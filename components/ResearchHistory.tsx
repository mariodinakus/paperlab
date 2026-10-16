"use client";
import {useEffect,useState} from "react";
import {Archive,PlayCircle,Trash2,FlaskConical} from "lucide-react";
import {papers,type Paper} from "../lib/catalog";
type SavedRun={id:string;paper:string;a:number;b:number;seed:number;metric:string;value:string;created:string};
const key="paperlab-experiment-history";
export default function ResearchHistory({onReplay}:{onReplay:(paper:Paper,run:SavedRun)=>void}){
const [runs,setRuns]=useState<SavedRun[]>([]);
useEffect(()=>{try{const saved=JSON.parse(localStorage.getItem(key)||"[]");if(Array.isArray(saved))setRuns(saved.filter(x=>x&&typeof x.paper==="string"))}catch{}},[]);
const remove=(id:string)=>{const next=runs.filter(r=>r.id!==id);setRuns(next);try{localStorage.setItem(key,JSON.stringify(next))}catch{}};
return <section className="historySection"><div className="headingLine"><div><span className="eyebrow">PERSONAL RESEARCH JOURNAL</span><h2>Saved experiment runs <span className="countPill">{runs.length}</span></h2></div><Archive size={20}/></div>{runs.length?<div className="historyList">{runs.slice(0,20).map(run=>{const p=papers.find(x=>x.id===run.paper);return <div className="historyRow" key={run.id}><span className="historyIcon"><FlaskConical size={17}/></span><div className="historyMeta"><strong>{p?.title||run.paper}</strong><span>{run.metric}: {run.value} · A {run.a}% / B {run.b}% · seed {run.seed} · {new Date(run.created).toLocaleDateString()}</span></div><div className="historyActions">{p&&<button className="outline" onClick={()=>onReplay(p,run)}><PlayCircle size={15}/> Re-run</button>}<button className="outline" aria-label="Delete saved run" onClick={()=>remove(run.id)}><Trash2 size={15}/></button></div></div>})}</div>:<div className="historyEmpty">No recorded experiments yet. Open any paper, use <strong>Experiment studio → Save current run</strong>, and your reproducible configuration will appear here. Data stays in your browser.</div>}</section>;
}
