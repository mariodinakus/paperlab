"use client";
import {useEffect,useState} from "react";
import {Archive,PlayCircle,Trash2,FlaskConical} from "lucide-react";
import {papers,type Paper} from "../lib/catalog";
import {useLanguage} from "./LanguageProvider";
import {paperTitle} from "../lib/guides";
import {localizedMetric} from "../lib/localized-labels";
type SavedRun={id:string;paper:string;a:number;b:number;seed:number;metric:string;value:string;created:string};
const key="paperlab-experiment-history";
export default function ResearchHistory({onReplay}:{onReplay:(paper:Paper,run:SavedRun)=>void}){
const {language,t}=useLanguage();const [runs,setRuns]=useState<SavedRun[]>([]);
useEffect(()=>{try{const saved=JSON.parse(localStorage.getItem(key)||"[]");if(Array.isArray(saved))setRuns(saved.filter(x=>x&&typeof x.paper==="string"))}catch{}},[]);
const remove=(id:string)=>{const next=runs.filter(r=>r.id!==id);setRuns(next);try{localStorage.setItem(key,JSON.stringify(next))}catch{}};
return <section className="historySection"><div className="headingLine"><div><span className="eyebrow">{t("ΠΡΟΣΩΠΙΚΟ ΕΡΕΥΝΗΤΙΚΟ ΗΜΕΡΟΛΟΓΙΟ","PERSONAL RESEARCH JOURNAL")}</span><h2>{t("Αποθηκευμένες εκτελέσεις","Saved experiment runs")} <span className="countPill">{runs.length}</span></h2></div><Archive size={20}/></div>{runs.length?<div className="historyList">{runs.slice(0,20).map(run=>{const p=papers.find(x=>x.id===run.paper);return <div className="historyRow" key={run.id}><span className="historyIcon"><FlaskConical size={17}/></span><div className="historyMeta"><strong>{p?paperTitle(p,language):run.paper}</strong><span>{localizedMetric(run.metric,language)}: {run.value} · A {run.a}% / B {run.b}% · seed {run.seed} · {new Date(run.created).toLocaleDateString()}</span></div><div className="historyActions">{p&&<button className="outline" onClick={()=>onReplay(p,run)}><PlayCircle size={15}/> {t("Εκτέλεση ξανά","Re-run")}</button>}<button className="outline" aria-label={t("Διαγραφή αποθηκευμένης εκτέλεσης","Delete saved run")} onClick={()=>remove(run.id)}><Trash2 size={15}/></button></div></div>})}</div>:<div className="historyEmpty">{t("Δεν υπάρχουν αποθηκευμένα πειράματα. Άνοιξε μια μελέτη, επίλεξε Εργαστήριο πειραμάτων → Αποθήκευση εκτέλεσης και θα εμφανιστεί εδώ το ιστορικό σου. Τα δεδομένα παραμένουν στον browser.","No recorded experiments yet. Open any paper, use Experiment studio → Save current run, and your reproducible configuration will appear here. Data stays in your browser.")}</div>}</section>;
}
