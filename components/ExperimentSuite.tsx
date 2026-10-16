"use client";
import {useMemo,useState} from "react";
import {Download,RotateCcw,GitCompareArrows,Layers3,BarChart3,Save} from "lucide-react";
import type {Paper} from "../lib/catalog";
import {simulate,type LabResult,type XY} from "../lib/engine";
import Plot from "./Plot";
type Mode="sweep"|"replicates"|"scenarios";
type SavedRun={id:string;paper:string;a:number;b:number;seed:number;metric:string;value:string;created:string};
const SCENARIOS=[{name:"Conservative",a:20,b:20},{name:"Balanced",a:50,b:50},{name:"Extreme",a:85,b:85}];
function stats(data:number[]){const s=data.filter(Number.isFinite);if(!s.length)return {mean:NaN,sd:NaN,min:NaN,max:NaN};const mean=s.reduce((a,b)=>a+b,0)/s.length;return {mean,sd:Math.sqrt(s.reduce((a,v)=>a+(v-mean)**2,0)/s.length),min:Math.min(...s),max:Math.max(...s)}}
const fmt=(n:number)=>Number.isFinite(n)?n.toLocaleString("en-US",{maximumFractionDigits:3}):"—";
export default function ExperimentSuite({paper,a,b,step,onApply}:{paper:Paper;a:number;b:number;step:number;onApply:(a:number,b:number,step:number)=>void}){
const [mode,setMode]=useState<Mode>("sweep"),[axis,setAxis]=useState<"a"|"b">("a"),[metric,setMetric]=useState(0),[count,setCount]=useState(25),[repetitions,setRepetitions]=useState(32),[notice,setNotice]=useState("");
const current=useMemo(()=>simulate(paper.model,a,b,step),[paper.model,a,b,step]);
const selected=Math.min(metric,Math.max(0,current.metrics.length-1));
const metricLabel=current.metrics[selected]?.label||"First metric";
const metricValue=(r:LabResult)=>Number.parseFloat(r.metrics[selected]?.value||"NaN");
const scenarios=useMemo(()=>mode!=="scenarios"?[]:SCENARIOS.map(s=>({...s,result:simulate(paper.model,s.a,s.b,step)})),[mode,paper.model,step]);
const series=useMemo(()=>{if(mode==="scenarios")return [] as XY[];const n=mode==="sweep"?count:repetitions;return Array.from({length:n},(_,i)=>{const value=mode==="sweep"?Math.round(5+i*90/(n-1)):step+i;const ra=mode==="sweep"&&axis==="a"?value:a;const rb=mode==="sweep"&&axis==="b"?value:b;const res=simulate(paper.model,ra,rb,mode==="sweep"?step:value);return {x:value,y:metricValue(res)}})},[paper.model,mode,axis,count,repetitions,a,b,step,selected]);
const values=series.map(p=>p.y).filter(Number.isFinite);
const summary=stats(values);
const chart=useMemo<LabResult>(()=>({kind:"lines",tracks:[{name:metricLabel,color:"#4ee5cc",data:series}],cells:[],nodes:[],edges:[],metrics:[],explanation:"Sweep output from the interactive teaching model.",xLabel:mode==="sweep"?"Parameter "+axis.toUpperCase()+" (%)":"Deterministic random seed",yLabel:metricLabel}),[series,axis,mode,metricLabel]);
const exportCSV=()=>{const rows=["paper,model,mode,axis,parameter_a,parameter_b,base_seed,metric,x,y"];for(const point of series)rows.push([paper.id,paper.model,mode,axis,a,b,step,JSON.stringify(metricLabel),point.x,point.y].join(","));if(mode==="scenarios"){rows.push("scenario,parameter_a,parameter_b,metric,value");for(const s of scenarios)for(const m of s.result.metrics)rows.push([s.name,s.a,s.b,JSON.stringify(m.label),m.value].join(","))}const url=URL.createObjectURL(new Blob([rows.join("\n")],{type:"text/csv;charset=utf-8"}));const anchor=document.createElement("a");anchor.href=url;anchor.download=paper.id+"-"+mode+"-analysis.csv";anchor.click();URL.revokeObjectURL(url)};
const save=()=>{try{const key="paperlab-experiment-history";const prev=JSON.parse(localStorage.getItem(key)||"[]") as SavedRun[];const run:SavedRun={id:paper.id+"-"+Date.now(),paper:paper.id,a,b,seed:step,metric:metricLabel,value:current.metrics[selected]?.value||"—",created:new Date().toISOString()};localStorage.setItem(key,JSON.stringify([run,...prev].slice(0,120)));setNotice("Saved to your browser's experiment history")}catch{setNotice("Storage unavailable in this browser")}};
return <section className="suite">
<div className="suiteIntro"><div><span className="eyebrow">EXPERIMENT STUDIO / REPRODUCIBLE RUNS</span><h3>Test the parameter space.</h3><p>Explore sensitivity and random-seed variation, then export the generated data. These are simulated model outputs, not estimates from the research publication.</p></div><button className="outline" onClick={save}><Save size={15}/> Save current run</button></div>
<div className="suiteMode" role="group" aria-label="Experiment type">
<button className={mode==="sweep"?"on":""} onClick={()=>setMode("sweep")}><BarChart3 size={17}/> Parameter sweep</button>
<button className={mode==="replicates"?"on":""} onClick={()=>setMode("replicates")}><RotateCcw size={17}/> Repeated trials</button>
<button className={mode==="scenarios"?"on":""} onClick={()=>setMode("scenarios")}><GitCompareArrows size={17}/> Scenario matrix</button>
</div>
<div className="suiteOptions"><label>OUTPUT METRIC<select value={selected} onChange={e=>setMetric(Number(e.target.value))}>{current.metrics.map((m,i)=><option key={i} value={i}>{m.label}</option>)}</select></label>{mode==="sweep"&&<><label>VARY PARAMETER<select value={axis} onChange={e=>setAxis(e.target.value as "a"|"b")}><option value="a">A / first parameter</option><option value="b">B / second parameter</option></select></label><label>GRID RESOLUTION<select value={count} onChange={e=>setCount(Number(e.target.value))}><option value={15}>15 simulations</option><option value={25}>25 simulations</option><option value={41}>41 simulations</option></select></label></>}{mode==="replicates"&&<label>NUMBER OF REPLICATES<select value={repetitions} onChange={e=>setRepetitions(Number(e.target.value))}><option value={16}>16 runs</option><option value={32}>32 runs</option><option value={64}>64 runs</option></select></label>}<button className="action" onClick={exportCSV}><Download size={15}/> Export experiment</button></div>
{mode!=="scenarios"?<><div className="suiteMetrics"><div><span>{mode==="sweep"?"SWEEP RANGE":"SEED RANGE"}</span><strong>{mode==="sweep"?"5–95%":step+"–"+(step+repetitions-1)}</strong></div><div><span>MEAN OUTPUT</span><strong>{fmt(summary.mean)}</strong></div><div><span>MIN / MAX</span><strong>{fmt(summary.min)} / {fmt(summary.max)}</strong></div><div><span>STD. DEVIATION</span><strong>{fmt(summary.sd)}</strong></div></div><div className="suiteChart"><Plot data={chart}/></div><p className="suiteHint">{mode==="sweep"?"One parameter varies while the other and seed stay fixed. The plotted outcome is the selected model diagnostic, not a causal effect.":"The same inputs are evaluated with distinct deterministic seeds. Models with no random component may yield zero variation."} Nonfinite outputs are excluded from summary statistics.</p></>:<div className="scenarioGrid">{scenarios.map(s=><div className="scenario" key={s.name}><div className="scenarioTop"><strong>{s.name}</strong><span>A {s.a} · B {s.b}</span></div><div className="scenarioValue">{s.result.metrics[selected]?.value||"—"}</div><div className="scenarioLabel">{metricLabel}</div><button className="outline" onClick={()=>onApply(s.a,s.b,step)}><Layers3 size={14}/> Apply scenario</button></div>)}</div>}
{notice&&<p className="suiteSaved">{notice} <button onClick={()=>setNotice("")} aria-label="Dismiss notice">×</button></p>}
</section>;
}
