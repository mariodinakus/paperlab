"use client";
import {createContext,useContext,useEffect,useMemo,useState,type ReactNode} from "react";
export type Language="el"|"en";
type LanguageValue={language:Language;setLanguage:(next:Language)=>void;t:(el:string,en:string)=>string};
const LanguageContext=createContext<LanguageValue|null>(null);
export function LanguageProvider({children}:{children:ReactNode}){
  const [language,setLanguage]=useState<Language>("el");
  useEffect(()=>{try{const saved=localStorage.getItem("paperlab-language");if(saved==="en"||saved==="el")setLanguage(saved)}catch{}},[]);
  useEffect(()=>{document.documentElement.lang=language;try{localStorage.setItem("paperlab-language",language)}catch{}},[language]);
  const value=useMemo<LanguageValue>(()=>({language,setLanguage,t:(el,en)=>language==="el"?el:en}),[language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export function useLanguage(){const ctx=useContext(LanguageContext);if(!ctx)throw new Error("LanguageProvider is required");return ctx}
