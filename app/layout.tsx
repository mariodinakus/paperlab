import type {Metadata} from "next";
import {LanguageProvider} from "../components/LanguageProvider";
import "./globals.css";
import "./upgrade.css";
export const metadata:Metadata={title:"PAPERLAB — Διαδραστικό Ερευνητικό Εργαστήριο / Interactive Research Atlas",description:"59 επιστημονικά papers με διαδραστικά εργαστήρια, προσομοιώσεις και δίγλωσσους οδηγούς"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="el"><body><LanguageProvider>{children}</LanguageProvider></body></html>}
