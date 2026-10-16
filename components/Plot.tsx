"use client";
import {useId,useMemo} from "react";
import type {LabResult,XY} from "../lib/engine";
const colors=["#50e8d0","#65aafb","#ffc079","#c5a1ff","#fb7fa1"];
function bounds(a:number[]):[number,number]{const v=a.filter(Number.isFinite);if(!v.length)return [0,1];let lo=Math.min(...v),hi=Math.max(...v);if(hi-lo<1e-6){lo-=1;hi+=1}const d=(hi-lo)*.08;return [lo-d,hi+d]}
const num=(n:number)=>!Number.isFinite(n)?"—":Math.abs(n)>=1000?n.toFixed(0):Math.abs(n)<.01?n.toExponential(1):n.toFixed(Math.abs(n)<1?2:1);
type Props={data:LabResult;progress?:number;playing?:boolean;frame?:number;motionMs?:number;trajectory?:boolean;cascade?:boolean};
export default function Plot({data,progress,playing=false,frame=0,motionMs=160,trajectory=false,cascade=false}:Props){
 const id=useId().replace(/:/g,""),extent=useMemo(()=>{
  const pts=data.tracks.flatMap(t=>t.data).filter(p=>Number.isFinite(p.x)&&Number.isFinite(p.y));
  return {x:bounds(pts.map(p=>p.x)),y:bounds(pts.map(p=>p.y))}
 },[data]);
 const xScale=(v:number)=>70+(v-extent.x[0])/(extent.x[1]-extent.x[0])*790;
 const yScale=(v:number)=>399-(v-extent.y[0])/(extent.y[1]-extent.y[0])*326;
 const portion=Math.max(0,Math.min(1,progress??1));
 const vizStyle={["--plot-motion" as string]:motionMs+"ms"};
 const backdrop=<><rect width="900" height="470" fill="#071522"/><rect x="0" y="0" width="900" height="470" fill={`url(#${id}-glow)`}/><g opacity=".31">{Array.from({length:13},(_,i)=><line key={"v"+i} x1={55+i*65} x2={55+i*65} y1="30" y2="430" stroke="#173749" strokeWidth=".8"/>)}{Array.from({length:7},(_,i)=><line key={"h"+i} x1="45" x2="860" y1={50+i*58} y2={50+i*58} stroke="#173749" strokeWidth=".8"/>)}</g></>;
 const defs=<defs><radialGradient id={id+"-glow"} cx="70%" cy="20%" r="80%"><stop stopColor="#146166" stopOpacity=".26"/><stop offset="1" stopColor="#071522" stopOpacity="0"/></radialGradient><filter id={id+"-bloom"} x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="4"/></filter></defs>;
 if(data.kind==="grid"){
  const w=data.shape?.w||1,h=data.shape?.h||1,cw=800/w,ch=392/h;
  return <div className="plot plotLive" style={vizStyle}><svg viewBox="0 0 900 470" role="img" aria-label="Scientific cellular simulation grid">{defs}{backdrop}
   <rect x="46" y="26" width="808" height="400" rx="9" fill="#091e2b" stroke="#264856" strokeWidth="1.5"/>
   <g>{data.cells.map((c,i)=>{const v=Math.max(0,Math.min(1,c.value));const fill=v<.07?"#0d2331":v>.8?"#91ffe2":v>.6?"#50d8c8":v>.4?"#267ca2":v>.2?"#214b68":"#163748";return <rect className="cellMotion" key={i} x={50+c.x*cw} y={30+c.y*ch} width={cw+.22} height={ch+.22} fill={fill}><title>{"Cell "+c.x+","+c.y+" · "+v.toFixed(2)}</title></rect>})}</g>
   <text x="50" y="452" fontSize="12" fill="#91aebb">CELLULAR FIELD / {w} × {h} / FRAME {frame}</text>
   <circle cx="845" cy="448" r="4" fill={playing?"#52f0c5":"#70909e"} className={playing?"pulseBeacon":""}/>
  </svg></div>;
 }
 if(data.kind==="network"){
  const radius=(n:{size?:number})=>Math.max(2.7,Math.min(13,n.size||4));
  const pos=(n:{x:number;y:number})=>({cx:n.x*8+50,cy:n.y*4+30});
  return <div className="plot plotLive" style={vizStyle}><svg viewBox="0 0 900 470" role="img" aria-label="Evolving scientific network">{defs}{backdrop}
   <g>{data.edges.map((e,i)=>{const u=data.nodes[e.from],v=data.nodes[e.to];if(!u||!v)return null;const active=cascade&&u.group!==3&&v.group!==3;return <line key={e.from+"-"+e.to+"-"+i} x1={pos(u).cx} y1={pos(u).cy} x2={pos(v).cx} y2={pos(v).cy} stroke={active?"#53e5c7":"#377283"} strokeWidth={active?1.5:.85} opacity={active?.62:.24} className="networkEdge"/>})}</g>
   <g>{data.nodes.map((n,i)=>{const {cx,cy}=pos(n);const active=cascade?n.group!==3:false,brandNew=cascade&&n.group===2;
     const fill=cascade?(brandNew?"#ffc46f":active?"#55efc8":"#305c6b"):colors[(n.group||0)%colors.length];
     return <g key={i} className="nodeMotion">
      {(active||brandNew)&&<circle cx={cx} cy={cy} r={radius(n)+(brandNew?9:5)} fill={fill} opacity={brandNew?.13:.065} className="nodeAura"/>}
      {brandNew&&<circle cx={cx} cy={cy} r={radius(n)+2.5} fill="none" stroke="#ffc46f" strokeWidth="1.3" className="signalWave"/>}
      <circle className="nodeCore" cx={cx} cy={cy} r={radius(n)} fill={fill} stroke={active?"#d1fff0":"#142b38"} strokeWidth={active?1.3:1} opacity={active?1:.82}>
       <title>{cascade?"Agent "+(i+1)+" · "+(brandNew?"newly activated":active?"activated":"inactive"):"Node "+(i+1)}</title>
      </circle></g>})}</g>
   <text x="51" y="452" fontSize="12" fill="#94b5c2">{cascade?"THRESHOLD CONTAGION": "NETWORK TOPOLOGY"} / {data.nodes.length} NODES / {data.edges.length} EDGES</text>
   <text x="850" y="452" textAnchor="end" fontSize="12" fill="#7fe8d4">{playing?"● RUNNING":"● PAUSED"}</text>
  </svg>{cascade&&<div className="plotLegend"><span><i style={{background:"#305c6b"}}/>Inactive</span><span><i style={{background:"#55efc8"}}/>Activated</span><span><i style={{background:"#ffc46f"}}/>New this round</span></div>}</div>;
 }
 const visible=(tr:XY[])=>tr.slice(0,Math.max(1,Math.min(tr.length,Math.ceil(tr.length*portion)))).filter(pt=>Number.isFinite(pt.x)&&Number.isFinite(pt.y));
 const primary=data.tracks[0];
 const points=primary?visible(primary.data):[];
 const head=points.length?points[points.length-1]:undefined;
 return <div className="plot plotLive" style={vizStyle}><svg viewBox="0 0 900 470" role="img" aria-label="Animated scientific time series or scatterplot">{defs}{backdrop}
  <g>{Array.from({length:6},(_,i)=>{const y=72+i*65.2;return <g key={i}><line x1="67" x2="863" y1={y} y2={y} stroke="#294654" strokeWidth="1" strokeDasharray="3 7"/><text x="57" y={y+4} textAnchor="end" fill="#8babb9" fontSize="11">{num(extent.y[1]-(extent.y[1]-extent.y[0])*i/5)}</text></g>})}</g>
  <g>{Array.from({length:6},(_,i)=><text key={i} x={70+i*158} y="429" textAnchor="middle" fill="#8babb9" fontSize="11">{num(extent.x[0]+i/5*(extent.x[1]-extent.x[0]))}</text>)}</g>
  <line x1="68" x2="862" y1="399" y2="399" stroke="#376175"/><line x1="68" x2="68" y1="66" y2="403" stroke="#376175"/>
  {data.tracks.map((t,j)=>{
   const pts=visible(t.data),cols=t.color||colors[j%colors.length];
   if(data.kind==="scatter"){
    if(trajectory){const trail=pts.slice(-160);return <g key={j}>
     <polyline points={trail.map(p=>xScale(p.x)+","+yScale(p.y)).join(" ")} fill="none" stroke={cols} strokeWidth="2.4" opacity=".68" strokeLinejoin="round"/>
     {pts.filter((_,i)=>i%3===0).map((p,i)=><circle key={i} cx={xScale(p.x)} cy={yScale(p.y)} r={i>pts.length/4?1.5:1.1} fill={cols} opacity=".34"/>)}
    </g>}
    return <g key={j}>{pts.filter((_,i)=>i%Math.max(1,Math.ceil(pts.length/1800))===0).map((p,i)=><circle key={i} cx={xScale(p.x)} cy={yScale(p.y)} r="2.1" fill={cols} opacity=".63"/>)}</g>
   }
   const path=pts.map(p=>xScale(p.x).toFixed(2)+","+yScale(p.y).toFixed(2)).join(" ");
   return <g key={j}><polyline fill="none" points={path} stroke={cols} strokeWidth="6" opacity=".13" filter={`url(#${id}-bloom)`}/><polyline fill="none" points={path} stroke={cols} strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round"/></g>
  })}
  {head&&(portion<1||playing)&&<g><circle cx={xScale(head.x)} cy={yScale(head.y)} r="12" fill={primary.color} opacity=".16"/><circle cx={xScale(head.x)} cy={yScale(head.y)} r="5" fill={primary.color} stroke="#dffff4" strokeWidth="1.5"/></g>}
  <text x="72" y="455" fill="#a0b9c4" fontSize="12">{data.xLabel}</text><text x="858" y="25" textAnchor="end" fill="#a0b9c4" fontSize="12">{data.yLabel}</text>
 </svg><div className="legend">{data.tracks.map((t,i)=><span key={i}><i style={{background:t.color||colors[i%colors.length]}}/>{t.name}</span>)}</div></div>;
}
