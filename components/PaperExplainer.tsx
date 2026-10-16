"use client";
import {Activity,BookOpen,Eye,Lightbulb,FlaskConical,AlertCircle} from "lucide-react";
import {useLanguage} from "./LanguageProvider";
import {guides} from "../lib/guides";
import type {Paper} from "../lib/catalog";
import type {LabResult} from "../lib/engine";
import {localizedMetric} from "../lib/localized-labels";

const stages:Record<string,[string,string,string,string,string,string]>={
cascades:["Αρχικά μόνο πέντε κόμβοι είναι ενεργοί.","Οι γείτονες ελέγχουν πόσοι γύρω τους έχουν ενεργοποιηθεί.","Πράσινο = παλαιότερη ενεργοποίηση, πορτοκαλί = νέα ενεργοποίηση.","Only five seed agents are initially active.","Neighbours check what fraction of their contacts has adopted.","Green means previously active; amber means newly active."],
boids:["Τοποθετούνται τα πουλιά και ορίζονται οι αρχικές τους ταχύτητες.","Κάθε πουλί προσαρμόζει την κίνησή του στους κοντινούς γείτονες.","Παρατήρησε τη συλλογική πορεία που προκύπτει χωρίς αρχηγό.","Boids begin with fixed positions and velocities.","Each boid updates steering from nearby neighbours.","Watch coherent collective movement emerge without a leader."],
life:["Το αρχικό πλέγμα ορίζεται με συγκεκριμένο seed.","Εφαρμόζονται ταυτόχρονα οι κανόνες γέννησης και επιβίωσης.","Αναζήτησε σταθερά, επαναλαμβανόμενα ή κινούμενα μοτίβα.","A reproducible starting grid is initialized.","All cells update under simultaneous birth/survival rules.","Look for stable, repeating or travelling patterns."],
ising:["Τα σπιν ξεκινούν με αρχικές κατευθύνσεις.","Προτείνονται αντιστροφές σπιν και αποφασίζονται από ενέργεια και θερμοκρασία.","Οι ομοιόμορφες περιοχές αποτελούν αναδυόμενη οργάνωση.","Spins start from an initial orientation.","Spin flips are accepted based on energy and temperature.","Aligned domains are emergent collective order."],
schelling:["Οι δύο κοινωνικές ομάδες τοποθετούνται σε γειτονιά.","Άτομα που δεν ικανοποιούν το κριτήριο γειτόνων μετακινούνται.","Η συνολική χωρική διάκριση προκύπτει από τοπικές επιλογές.","Two groups populate the starting neighborhood.","Unhappy agents relocate based on their local threshold.","Large-scale segregation can emerge from local choices."],
reaction:["Ορίζονται δύο συνθετικές συγκεντρώσεις ουσιών.","Οι ουσίες αντιδρούν και διαχέονται σε γειτονικά κελιά.","Κηλίδες ή γραμμώσεις μπορούν να σταθεροποιηθούν ή να μεταβληθούν.","Two synthetic chemical concentrations are initialized.","Reaction and diffusion update local concentrations.","Spots and stripes may form or dissipate."],
percolation:["Λίγες θέσεις του πλέγματος είναι κατειλημμένες.","Προστίθενται θέσεις με σταθερή τυχαία διάταξη.","Μια φωτεινή διαδρομή από πάνω ως κάτω σημαίνει διήθηση.","Initially few lattice sites are occupied.","Sites are revealed in a fixed random order.","A highlighted spanning path indicates percolation."],
sandpile:["Κόκκοι συγκεντρώνονται στα κελιά.","Όταν το ύψος φτάσει τέσσερις, το κελί ανατρέπεται.","Πολλές τοπικές ανατροπές μπορούν να συνδεθούν σε χιονοστιβάδα.","Grains accumulate in grid cells.","At four grains a cell topples to adjacent cells.","Several topplings can propagate as an avalanche."],
scaleFree:["Δύο κόμβοι αποτελούν τον αρχικό σκελετό.","Κάθε νέος κόμβος προτιμά συνδέσεις σε ήδη δημοφιλείς κόμβους.","Ορισμένοι κόμβοι αποκτούν πολύ περισσότερες συνδέσεις.","The network begins with two vertices.","Each new vertex preferentially attaches to connected vertices.","A few nodes can become increasingly connected hubs."],
pagerank:["Όλοι οι κόμβοι ξεκινούν με ίσο αρχικό βάρος.","Κάθε επανάληψη αναδιανέμει πιθανότητα μέσω συνδέσμων.","Οι σχετικές βαθμολογίες τείνουν να συγκλίνουν σε σταθερές τιμές.","Nodes begin with equal weights.","Every iteration redistributes importance over outgoing links.","Relative ranking scores tend toward a stable distribution."],
qlearning:["Οι τιμές δράσεων ξεκινούν χωρίς εμπειρία.","Ο πράκτορας παίζει νέα επεισόδια και ενημερώνει τις Q-τιμές.","Η πληροφορία της ανταμοιβής διαδίδεται προς παλαιότερες καταστάσεις.","Action values begin without experience.","Training episodes update Q-values via reward and future estimates.","Reward information propagates to earlier states."],
dijkstra:["Μόνο η πηγή έχει αρχική απόσταση μηδέν.","Κάθε βήμα οριστικοποιεί τον φθηνότερο ανεξερεύνητο κόμβο.","Ο πράσινος κόμβος έχει πλέον οριστική συντομότερη απόσταση.","Only the source starts with distance zero.","Each step settles the least-cost unexplored vertex.","Green nodes have definitive shortest distances."],
diffusion:["Αρχικά φαίνεται ένα συνθετικό σχήμα.","Προστίθεται βαθμιαία τυχαίος θόρυβος.","Αυτό είναι μόνο η εμπρόσθια διάχυση, όχι εκπαίδευση ή παραγωγή εικόνας.","A synthetic image-like signal is initially visible.","Gaussian noise is progressively mixed into the image.","This shows forward corruption only—not trained reverse generation."],
smallworld:["Ξεκινάμε από έναν τοπικά συνδεδεμένο δακτύλιο.","Ορισμένες συνδέσεις επανασυνδέονται σε πιο μακρινούς κόμβους.","Οι νέες μακρινές συνδέσεις δημιουργούν συντομεύσεις στο δίκτυο.","Start from a locally connected ring.","Selected edges are rewired toward more distant vertices.","Long-range links create shortcuts in the network."],
weakties:["Υπάρχουν τέσσερις σχετικά απομονωμένες κοινότητες.","Προστίθενται γέφυρες μεταξύ διαφορετικών κοινοτήτων.","Η νέα σύνδεση επιτρέπει δυνητικά διάδοση πληροφορίας μεταξύ ομάδων.","Four communities are initially relatively isolated.","Bridging edges are gradually introduced between groups.","Bridges enable cross-community paths for information."],
brownian:["Ο περιπατητής ξεκινά κοντά στην αρχή των αξόνων.","Κάθε βήμα προέρχεται από τυχαίες μετατοπίσεις.","Η διαδρομή είναι τυχαία, παρότι η στατιστική διάχυση έχει θεωρητικό νόμο.","The walker starts near the origin.","Each increment is a random displacement.","A particular path is random despite a known diffusion law."],
lorenz:["Η εξέλιξη αρχίζει από μία συγκεκριμένη αρχική κατάσταση.","Η τροχιά εξελίσσεται μέσα σε μη γραμμικό δυναμικό σύστημα.","Οι διαδοχικές επισκέψεις στους δύο λοβούς σχηματίζουν τον ελκυστή.","Evolution begins from one initial state.","The nonlinear differential equations advance the trajectory.","Repeated visits around two lobes form an attractor."],
henon:["Επιλέγεται αρχικό ζεύγος τιμών στον χάρτη.","Η ίδια απλή απεικόνιση εφαρμόζεται επανειλημμένα.","Τα σημεία μπορούν να σχηματίζουν λεπτή, σύνθετη γεωμετρία.","An initial pair of map coordinates is selected.","The same nonlinear map is repeatedly applied.","Iterates can form intricate geometric structure."]
};
const limitsEl:Record<string,string>={
attention:"Τα βάρη προσοχής είναι συνθετικά και δεν προέρχονται από εκπαιδευμένο Transformer.",
gan:"Δεν πραγματοποιείται εκπαίδευση GAN ούτε δημιουργούνται εικόνες.",
vae:"Η βελτιστοποίηση ELBO είναι σχηματική, όχι αποτέλεσμα εκπαίδευσης VAE.",
diffusion:"Δεν εκτελείται αντίστροφη διάχυση ή εκπαιδευμένο μοντέλο παραγωγής εικόνων.",
svm:"Η διαχωριστική ευθεία δεν έχει προκύψει από προσαρμογή SVM.",
forest:"Το παράδειγμα χρησιμοποιεί απλά τυχαία κατώφλια, όχι εκπαιδευμένα δέντρα.",
hodgkin:"Χρησιμοποιείται απλοποιημένη δυναμική νευρώνα, όχι η πλήρης λύση Hodgkin–Huxley.",
turing:"Χρησιμοποιείται Gray–Scott, όχι η αρχική χημική διατύπωση του Turing.",
epinet:"Δεν κατασκευάζεται πλήρες ετερογενές δίκτυο επαφών.",
bank:"Ο δείκτης τραπεζικού πανικού δεν είναι βαθμονομημένη οικονομική πρόβλεψη.",
cascades:"Τα δίκτυα είναι συνθετικά και τα κατώφλια εκπαιδευτικά, όχι μετρημένη κοινωνική συμπεριφορά.",
scaling:"Οι αριθμοί δεν είναι εμπειρικές προβλέψεις απόδοσης σύγχρονων μοντέλων AI."
};
export function PaperOverview({paper}:{paper:Paper}){
 const {language,t}=useLanguage(),guide=guides[paper.id];
 if(!guide)return null;
 return <section className="paperOverview" aria-label={t("Κατανόηση της έρευνας","Understanding the paper")}>
  <div className="guideSectionTitle"><span className="eyebrow">{t("ΑΠΟ ΤΟ PAPER ΣΤΗΝ ΚΑΤΑΝΟΗΣΗ","FROM PAPER TO UNDERSTANDING")}</span><strong>{t("Τι σημαίνει πραγματικά αυτή η έρευνα;","What is this research really about?")}</strong></div>
  <div className="guideGrid">
   <article className="guideCard"><span><BookOpen size={17}/>{t("01 / Η ΒΑΣΙΚΗ ΙΔΕΑ","01 / THE CORE IDEA")}</span><p>{language==="el"?guide.ideaEl:paper.summary}</p></article>
   <article className="guideCard"><span><Eye size={17}/>{t("02 / ΤΙ ΒΛΕΠΕΙΣ","02 / WHAT YOU SEE")}</span><p>{language==="el"?guide.watchEl:guide.watchEn}</p></article>
   <article className="guideCard"><span><FlaskConical size={17}/>{t("03 / ΔΟΚΙΜΑΣΕ ΑΥΤΟ","03 / TRY THIS")}</span><p>{language==="el"?guide.tryEl:guide.tryEn}</p></article>
  </div>
 </section>
}
export function LiveNarrator({paper,data,frame,maxFrame,playing,timelineActive}:{paper:Paper;data:LabResult;frame:number;maxFrame:number;playing:boolean;timelineActive:boolean}){
 const {language,t}=useLanguage(),guide=guides[paper.id];
 const phase=frame<=0?0:frame<maxFrame*.65?1:2;
 const notes=stages[paper.model];
 const textNow=notes?(language==="el"?notes[phase]:notes[phase+3]):(language==="el"?guide?.watchEl:guide?.watchEn);
 const first=data.metrics.slice(0,2);
 return <div className="liveNarrator" aria-live="off">
   <div className="narratorEyebrow"><Activity size={16}/><span>{t("ΤΙ ΣΥΜΒΑΙΝΕΙ ΤΩΡΑ","WHAT IS HAPPENING NOW")}</span><span className={playing?"active":""}>{playing?t("ΣΕ ΕΞΕΛΙΞΗ","RUNNING"):timelineActive?t("ΠΑΥΣΗ","PAUSED"):t("ΕΤΟΙΜΟ","READY")}</span></div>
   <div className="narratorProgress"><i style={{width:(timelineActive?Math.min(100,frame/maxFrame*100):0)+"%"}}/></div>
   <p className="narratorText">{textNow}</p>
   <div className="narratorMetrics">{first.map((m,i)=><div key={i}><small>{localizedMetric(m.label,language)}</small><strong>{m.value}</strong></div>)}</div>
   <p className="narratorInterpretation">{t("Τα παραπάνω είναι τιμές της τρέχουσας εκπαιδευτικής προσομοίωσης, όχι δημοσιευμένα αποτελέσματα του paper.","These are values from the current educational simulation, not measured results reported by the paper.")}</p>
 </div>;
}
export function ScientificBoundary({paper,details}:{paper:Paper;details:string}){
 const {language,t}=useLanguage();
 return <div className="scienceBoundary"><div><AlertCircle size={16}/><strong>{t("Επιστημονική ακρίβεια και όρια","Scientific accuracy and limitations")}</strong></div>
  <p>{language==="el"?(limitsEl[paper.id]||"Πρόκειται για εκπαιδευτική αριθμητική προσέγγιση, όχι ανεξάρτητα επικυρωμένη αναπαραγωγή των δημοσιευμένων αποτελεσμάτων."):details}</p>
  <p>{t("Για επιστημονική τεκμηρίωση, έλεγξε τις παραδοχές, τη μεθοδολογία και τα δεδομένα στο πρωτότυπο άρθρο.","For rigorous validation, review the assumptions, methodology and data in the original publication.")}</p>
 </div>
}
