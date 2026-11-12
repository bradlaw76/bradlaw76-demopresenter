#!/usr/bin/env node
"use strict";
/*
 * Read-only source evidence inspector for the Demo Presenters library.
 * Never prints document text, credentials, or record values; never writes files.
 * Requires an authorized GitHub token supplied locally in GH_TOKEN / GITHUB_TOKEN.
 */
const usage = `Usage: GH_TOKEN=<read-only-token> node scripts/review-source.cjs --repo OWNER/REPO --ref BRANCH --path docs/runbook.md [--path docs/other.md] [--json]`;
function argsOf(argv) {
  const out={paths:[],json:false,repo:null,ref:null};
  for(let i=0;i<argv.length;i++){
    const a=argv[i];
    if(a==="--help"||a==="-h"){out.help=true;continue}
    if(a==="--json"){out.json=true;continue}
    if(["--repo","--ref","--path"].includes(a)){
      const v=argv[++i];if(!v||v.startsWith("--"))throw new Error("Missing value for "+a);
      if(a==="--path")out.paths.push(v);else out[a.slice(2)]=v;
    }else throw new Error("Unknown option "+a);
  }
  return out;
}
function validate(v){
  if(!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(v.repo||""))throw new Error("Use --repo OWNER/REPO");
  if(!v.ref || /[\r\n]/.test(v.ref))throw new Error("Use a valid --ref");
  if(!v.paths.length||v.paths.length>20)throw new Error("Supply 1 to 20 --path values");
  for(const p of v.paths){
    if(!p || p.startsWith("/") || p.includes("\\") || p.split("/").some(x=>!x||x==="."||x==="..")||/[?#\r\n]/.test(p))throw new Error("Invalid source path");
  }
}
function count(s,re){return (s.match(re)||[]).length}
function inspect(path,sha,content){
  const c=content.replace(/\r\n/g,"\n");
  const gates={
    business_scenario:/\b(scenario|story|objective|purpose|mission|customer need|business problem)\b/i.test(c),
    ordered_walkthrough:/\b(walkthrough|run of show|click path|screen order|chapter|scene|step)\b/i.test(c),
    presenter_ownership:/\b(presenter|speaker|owner|handoff|transition)\b/i.test(c),
    spoken_transitions:/\b(transition|handoff|next section)\b/i.test(c),
    status_boundaries:/\b(verified|pending|fallback|preview|not deployed|not accepted|conditional)\b/i.test(c),
    timing:/\b(\d+\s*(?:min|minute)|timebox|duration|timing)\b/i.test(c)
  };
  return {
    path,sha,bytes:Buffer.byteLength(content,"utf8"),heading_count:count(c,/^#{1,4}\s+.+$/gm),
    section_coverage_hints:gates,
    public_review_risk_counts:{
      web_links:count(c,/https?:\/\/[^\s"'<>]+/g),
      guids:count(c,/\b[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}\b/gi),
      email_addresses:count(c,/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi),
      secret_markers:count(c,/\b(password|client.secret|access.token|authorization: bearer|private.key)\b/gi)
    }
  };
}
async function run(){
  const opt=argsOf(process.argv.slice(2));
  if(opt.help){process.stdout.write(usage+"\n");return}
  validate(opt);
  const token=process.env.GH_TOKEN||process.env.GITHUB_TOKEN;
  if(!token)throw new Error("GH_TOKEN or GITHUB_TOKEN required locally; do not store tokens in the public repository.");
  const [owner,name]=opt.repo.split("/");
  const rows=[];
  for(const path of opt.paths){
    const safe=path.split("/").map(encodeURIComponent).join("/");
    const url=`https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(name)}/contents/${safe}?ref=${encodeURIComponent(opt.ref)}`;
    const r=await fetch(url,{headers:{
      Accept:"application/vnd.github+json",Authorization:"Bearer "+token,
      "User-Agent":"demo-presenters-readonly-source-review","X-GitHub-Api-Version":"2022-11-28"
    }});
    if(!r.ok)throw new Error(`Read-only source lookup failed for ${path}: HTTP ${r.status}. Verify read access, repo/ref/path; no data was changed.`);
    const data=await r.json();
    if(!data||Array.isArray(data)||data.type!=="file"||typeof data.content!=="string"||!data.sha)throw new Error("Expected GitHub file content: "+path);
    const buf=Buffer.from(data.content.replace(/\s/g,""),"base64");
    if(buf.length>2_000_000)throw new Error("File over 2MB; narrow the read-only source review.");
    rows.push(inspect(path,data.sha,buf.toString("utf8")));
  }
  const out={status:"SOURCE_REVIEW_ONLY_NOT_PUBLICATION",repository:opt.repo,ref:opt.ref,files:rows,notes:[
    "This is source-inventory evidence only; human confirmation of the storyline and approval remains required.",
    "No private document content was printed or published. This script makes GET requests only.",
    "A Pages site cannot use this tool to access private repositories."
  ]};
  if(opt.json)process.stdout.write(JSON.stringify(out,null,2)+"\n");
  else{process.stdout.write("SOURCE_REVIEW_ONLY — "+opt.repo+" @ "+opt.ref+"\n");for(const f of rows)process.stdout.write(f.path+" | blob "+f.sha+" | "+f.bytes+" bytes | headings "+f.heading_count+" | coverage "+Object.values(f.section_coverage_hints).filter(Boolean).length+"/6 | inspect risk counts privately\n");process.stdout.write("No writes or public sync. Review and approve sanitized output separately.\n");}
}
run().catch(err=>{process.stderr.write("Source review not completed: "+err.message+"\n");process.exitCode=1});
