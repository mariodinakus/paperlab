import {guidesPartA} from "./guides-a";
import {guidesPartB} from "./guides-b";
import type {PaperGuide} from "./guide-types";
import type {Paper} from "./catalog";
export const guides:Record<string,PaperGuide>={...guidesPartA,...guidesPartB};
export function paperTitle(paper:Paper,language:"el"|"en"){return language==="el"?(guides[paper.id]?.titleEl||paper.title):paper.title}
export function paperSummary(paper:Paper,language:"el"|"en"){return language==="el"?(guides[paper.id]?.ideaEl||paper.summary):paper.summary}
