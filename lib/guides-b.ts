import type {PaperGuide} from "./guide-types";
export const guidesPartB:Record<string,PaperGuide> = {
  "garch": {
    "titleEl": "Μεταβλητότητα GARCH",
    "ideaEl": "Στις χρηματοοικονομικές αποδόσεις οι μεγάλες διακυμάνσεις συχνά εμφανίζονται σε συστάδες, επειδή η μελλοντική διακύμανση εξαρτάται από προηγούμενα σοκ.",
    "watchEl": "Οι καμπύλες δείχνουν συνθετικές αποδόσεις και την εκτιμώμενη υπό συνθήκη μεταβλητότητα που ενημερώνεται διαδοχικά.",
    "tryEl": "Αύξησε την παράμετρο διατήρησης β. Για πόσο παραμένει υψηλή η μεταβλητότητα μετά από ένα σοκ;",
    "watchEn": "Curves display simulated returns and the evolving conditional volatility estimated from previous shocks.",
    "tryEn": "Increase volatility persistence β. For how long does elevated volatility remain after a shock?"
  },
  "prospect": {
    "titleEl": "Θεωρία Προοπτικής",
    "ideaEl": "Οι άνθρωποι δεν αξιολογούν ισότιμα κέρδη και ζημιές: μια ζημιά συγκεκριμένου ποσού συχνά επηρεάζει περισσότερο από ένα ισόποσο κέρδος.",
    "watchEl": "Η καμπύλη αξίας έχει διαφορετική κλίση στα κέρδη και στις ζημιές, δείχνοντας την αποστροφή απώλειας.",
    "tryEl": "Αύξησε το λ. Πώς αλλάζει η καμπύλη για τις αρνητικές τιμές;",
    "watchEn": "The value function differs for gains and losses, illustrating stronger subjective impact on the loss side.",
    "tryEn": "Increase loss aversion λ. What happens to negative outcomes?"
  },
  "lemons": {
    "titleEl": "Η αγορά των «λεμονιών»",
    "ideaEl": "Όταν ο πωλητής γνωρίζει την ποιότητα ενός προϊόντος καλύτερα από τον αγοραστή, τα ποιοτικά προϊόντα μπορεί να αποσυρθούν από την αγορά.",
    "watchEl": "Η καμπύλη παρουσιάζει μια σχηματική υποχώρηση της μέσης ποιότητας σε συνθήκες πληροφοριακής ασυμμετρίας.",
    "tryEl": "Αύξησε την ένταση της δυσμενούς επιλογής και δες αν επιταχύνεται η πτώση.",
    "watchEn": "The toy curve sketches how average traded quality can decline under asymmetric information.",
    "tryEn": "Increase adverse-selection intensity. Does average quality deteriorate faster?"
  },
  "bass": {
    "titleEl": "Διάδοση καινοτομιών Bass",
    "ideaEl": "Οι νέοι χρήστες ενός προϊόντος εμφανίζονται είτε από ανεξάρτητη καινοτομία είτε από μίμηση άλλων που το έχουν ήδη υιοθετήσει.",
    "watchEl": "Η καμπύλη δείχνει την αθροιστική υιοθέτηση καθώς οι πρώτοι χρήστες επηρεάζουν σταδιακά τους υπόλοιπους.",
    "tryEl": "Αύξησε τον συντελεστή μίμησης q και δες πόσο γρήγορα επιταχύνεται η υιοθέτηση.",
    "watchEn": "Cumulative adoption rises as innovation introduces users and imitation spreads adoption through the population.",
    "tryEn": "Raise imitation q. How quickly does uptake accelerate?"
  },
  "nash": {
    "titleEl": "Ισορροπία Nash",
    "ideaEl": "Σε ένα στρατηγικό παιχνίδι κάθε παίκτης επιλέγει δράση λαμβάνοντας υπόψη την απόφαση των άλλων. Ισορροπία υπάρχει όταν κανείς δεν ωφελείται από μονομερή αλλαγή.",
    "watchEl": "Οι δύο καμπύλες δείχνουν προσαρμογές στρατηγικών σε ένα σχηματικό παιχνίδι καλύτερης απόκρισης. Δεν είναι καθολική μέθοδος εύρεσης ισορροπίας.",
    "tryEl": "Άλλαξε τις αρχικές στρατηγικές. Πάντα πλησιάζουν την ίδια κατάσταση;",
    "watchEn": "Two curves track smoothed best-response strategy updates in an illustrative game, not a universal Nash-equilibrium solver.",
    "tryEn": "Change initial strategies. Do trajectories always approach the same outcome?"
  },
  "axelrod": {
    "titleEl": "Η εξέλιξη της συνεργασίας",
    "ideaEl": "Η αμοιβαιότητα μπορεί να στηρίζει τη συνεργασία σε επαναλαμβανόμενα διλήμματα, ακόμη όταν η βραχυχρόνια προδοσία έχει όφελος.",
    "watchEl": "Οι καμπύλες παρουσιάζουν αθροιστικές ανταμοιβές δύο παικτών σε επαναλαμβανόμενο παίγνιο. Οι αποφάσεις επηρεάζονται από προηγούμενη συμπεριφορά.",
    "tryEl": "Άλλαξε τη συχνότητα αμοιβαιότητας. Πότε βελτιώνονται οι συνολικές ανταμοιβές;",
    "watchEn": "Cumulative payoffs reflect repeated prisoner's dilemmas where players react to previous cooperation.",
    "tryEn": "Increase reciprocity. When do both players accumulate higher rewards?"
  },
  "granovetter": {
    "titleEl": "Κατώφλια συλλογικής συμπεριφοράς",
    "ideaEl": "Κάθε άτομο μπορεί να αποφασίζει να συμμετάσχει μόνο όταν αρκετοί άλλοι έχουν ήδη συμμετάσχει. Έτσι εμφανίζονται απότομες κοινωνικές αλυσιδωτές αντιδράσεις.",
    "watchEl": "Η καμπύλη δείχνει το μερίδιο που υιοθετεί μια συμπεριφορά σε διαδοχικά βήματα ενός απλοποιημένου παγκόσμιου μοντέλου κατωφλίου.",
    "tryEl": "Αύξησε την αρχική συμμετοχή και δες πότε ενεργοποιείται μεγάλη αλυσίδα.",
    "watchEn": "The curve shows adoption in a simplified global-threshold model where individuals respond to others' participation.",
    "tryEn": "Increase initial adoption. When does a broader cascade begin?"
  },
  "barabasi": {
    "titleEl": "Δίκτυα χωρίς χαρακτηριστική κλίμακα",
    "ideaEl": "Νέοι κόμβοι που προτιμούν να συνδέονται με ήδη δημοφιλείς κόμβους μπορούν να δημιουργήσουν λίγους μεγάλους κόμβους-κόμβους συγκέντρωσης.",
    "watchEl": "Το δίκτυο αυξάνεται καθώς εμφανίζονται νέα σημεία και συνδέονται με πιθανότητα ανάλογη του υπάρχοντος βαθμού.",
    "tryEl": "Παρατήρησε ποιοι κόμβοι μεγαλώνουν περισσότερο. Αλλάζει η ανισότητα των βαθμών;",
    "watchEn": "The network grows as new vertices preferentially attach to more connected existing vertices.",
    "tryEn": "Watch which hubs become dominant. Does degree inequality emerge over time?"
  },
  "annealing": {
    "titleEl": "Προσομοιωμένη ανόπτηση",
    "ideaEl": "Η βελτιστοποίηση μπορεί να ξεφύγει από τοπικά ελάχιστα όταν επιτρέπει προσωρινά χειρότερες κινήσεις και μειώνει σταδιακά αυτή την ανοχή.",
    "watchEl": "Η καμπύλη παρακολουθεί την τιμή μιας συνάρτησης κατά την αναζήτηση σε πολύκορυφο τοπίο.",
    "tryEl": "Άλλαξε τη θερμοκρασία έναρξης και τον ρυθμό ψύξης. Βρίσκει πάντα την ίδια τελική τιμή;",
    "watchEn": "The objective trace follows stochastic search on a multi-well landscape, sometimes accepting temporarily worse moves.",
    "tryEn": "Change starting temperature and cooling rate. Does the search always finish at the same value?"
  },
  "mandelbrot": {
    "titleEl": "Πόσο μεγάλη είναι πραγματικά μια ακτογραμμή;",
    "ideaEl": "Όσο μικρότερος είναι ο χάρακας μέτρησης μιας πολύπλοκης ακτογραμμής, τόσο περισσότερες λεπτομέρειες συμπεριλαμβάνονται στο μήκος.",
    "watchEl": "Η καμπύλη δείχνει την υποθετική σχέση μεταξύ κλίμακας μέτρησης και φαινομενικού μήκους για μια φρακταλική διάσταση.",
    "tryEl": "Άλλαξε τη διάσταση D. Πόσο ευαίσθητο γίνεται το μήκος στην ανάλυση;",
    "watchEn": "The schematic curve relates measurement resolution to apparent length through an assumed fractal dimension.",
    "tryEn": "Change fractal dimension D. How much does estimated length depend on ruler size?"
  },
  "shannon": {
    "titleEl": "Θεωρία πληροφορίας Shannon",
    "ideaEl": "Η εντροπία μετρά τη μέση αβεβαιότητα ενός συνόλου πιθανοτικών αποτελεσμάτων, όχι τη χρησιμότητα του μηνύματος.",
    "watchEl": "Η καμπύλη δείχνει τα bit αβεβαιότητας μιας κατανομής τεσσάρων δυνατών αποτελεσμάτων καθώς αλλάζει η κατανομή πιθανοτήτων.",
    "tryEl": "Κοίτα πότε η εντροπία γίνεται μέγιστη: όταν όλα τα αποτελέσματα είναι ισοπίθανα.",
    "watchEn": "The curve measures entropy in bits for a four-outcome probability distribution as its probabilities shift.",
    "tryEn": "Find the maximum entropy. It occurs when all four outcomes are equally likely."
  },
  "adam": {
    "titleEl": "Ο αλγόριθμος βελτιστοποίησης Adam",
    "ideaEl": "Ο Adam συνδυάζει κινητούς μέσους των βαθμίδων και των τετραγώνων τους για να προσαρμόζει το μέγεθος των βημάτων βελτιστοποίησης.",
    "watchEl": "Δύο καμπύλες συγκρίνουν το σφάλμα μιας απλής συνθετικής συνάρτησης με Adam και SGD. Δεν αντιστοιχούν στην εκπαίδευση μεγάλου AI.",
    "tryEl": "Άλλαξε τον ρυθμό μάθησης. Πότε οι ενημερώσεις γίνονται ασταθείς;",
    "watchEn": "Two loss traces compare Adam and SGD on a synthetic one-dimensional objective—not on a trained frontier model.",
    "tryEn": "Change learning rate. When does optimisation become unstable?"
  },
  "dropout": {
    "titleEl": "Dropout και υπερπροσαρμογή",
    "ideaEl": "Κατά την εκπαίδευση ορισμένες ενεργοποιήσεις μηδενίζονται τυχαία, ώστε το δίκτυο να μη στηρίζεται υπερβολικά σε λίγα χαρακτηριστικά.",
    "watchEl": "Οι έξοδοι προκύπτουν από τυχαίες μάσκες σε ένα συνθετικό γραμμικό επίπεδο. Η αυξημένη τυχαιότητα προκαλεί μεγαλύτερη διασπορά.",
    "tryEl": "Αύξησε την πιθανότητα dropout. Πώς μεταβάλλεται η διακύμανση των εξόδων;",
    "watchEn": "Outputs come from random masks on a toy linear layer; larger dropout may increase variability.",
    "tryEn": "Raise dropout probability. How does output variance respond?"
  },
  "batchnorm": {
    "titleEl": "Κανονικοποίηση παρτίδας",
    "ideaEl": "Η κανονικοποίηση ενεργοποιήσεων μέσα σε ένα mini-batch επαναφέρει τη μέση τιμή και την κλίμακα, κάνοντας τη βελτιστοποίηση συχνά ευκολότερη.",
    "watchEl": "Η μία καμπύλη δείχνει αρχικές συνθετικές ενεργοποιήσεις και η άλλη τα ίδια σημεία μετά από κανονικοποίηση z-score.",
    "tryEl": "Άλλαξε τη μέση μετατόπιση και τη διασπορά. Μένει η τυπική απόκλιση της κανονικοποιημένης εξόδου περίπου 1;",
    "watchEn": "One trace shows synthetic raw activations; the other shows those same values after batch z-score normalization.",
    "tryEn": "Shift input mean and spread. Does normalized output standard deviation stay near 1?"
  },
  "svm": {
    "titleEl": "Μηχανές διανυσμάτων υποστήριξης",
    "ideaEl": "Οι SVM αναζητούν διαχωριστικά όρια που μεγιστοποιούν το περιθώριο ανάμεσα σε κατηγορίες, επιτρέποντας ποινές για λάθη όταν τα δεδομένα επικαλύπτονται.",
    "watchEl": "Βλέπεις δύο συνθετικά νέφη σημείων και μια ενδεικτική ευθεία. Προσοχή: η ευθεία δεν είναι αποτέλεσμα πραγματικής εκπαίδευσης SVM.",
    "tryEl": "Αύξησε την επικάλυψη. Πότε ο διαχωρισμός των κατηγοριών γίνεται οπτικά αδύνατος;",
    "watchEn": "Two synthetic point clouds appear with an illustrative line; the line is not the solution of a fitted SVM.",
    "tryEn": "Increase class overlap. When does separation become visibly difficult?"
  },
  "dijkstra": {
    "titleEl": "Ο αλγόριθμος συντομότερης διαδρομής Dijkstra",
    "ideaEl": "Σε δίκτυο με μη αρνητικά βάρη ακμών, ο αλγόριθμος βρίσκει σταδιακά τις συντομότερες αποστάσεις από μια αρχική κορυφή.",
    "watchEl": "Οι πράσινοι κόμβοι έχουν οριστικοποιημένη απόσταση, οι πορτοκαλί είναι το μέτωπο αναζήτησης και οι σκούροι δεν έχουν προσεγγιστεί ακόμη.",
    "tryEl": "Σύρε το timeline πίσω στην αρχή και προχώρα μία κορυφή τη φορά.",
    "watchEn": "Green nodes have settled shortest distances, amber ones are the search frontier, and dim nodes remain unreached.",
    "tryEn": "Scrub to the start and advance the search one vertex at a time."
  },
  "kelly": {
    "titleEl": "Το κριτήριο Kelly",
    "ideaEl": "Το μέγεθος θέσης που μεγιστοποιεί τη μακροχρόνια αναμενόμενη λογαριθμική αύξηση εξαρτάται από την πιθανότητα επιτυχίας και την απόδοση.",
    "watchEl": "Η καμπύλη δείχνει τη θεωρητική λογαριθμική αύξηση για διαφορετικά ποσοστά κεφαλαίου που διακινδυνεύονται σε υποθετικά ανεξάρτητα στοιχήματα.",
    "tryEl": "Άλλαξε την πιθανότητα νίκης και βρες πότε το βέλτιστο ποσοστό γίνεται μηδέν.",
    "watchEn": "The curve shows expected log growth for different hypothetical fractions staked on independent binary bets.",
    "tryEn": "Change win probability. At what point does the optimal stake become zero?"
  },
  "weak-ties": {
    "titleEl": "Η δύναμη των ασθενών δεσμών",
    "ideaEl": "Συνδέσεις ανάμεσα σε διαφορετικές κλειστές ομάδες μπορεί να μεταφέρουν νέα πληροφορία πολύ αποτελεσματικότερα από πολλούς επαναλαμβανόμενους δεσμούς εντός της ίδιας ομάδας.",
    "watchEl": "Τέσσερις κοινότητες έχουν πυκνές εσωτερικές σχέσεις. Καθώς προστίθενται γέφυρες, οι ομάδες συνδέονται μεταξύ τους.",
    "tryEl": "Αύξησε τις γέφυρες και παρατήρησε πόσο αλλάζει η συνολική συνδεσιμότητα.",
    "watchEn": "Four clustered communities receive additional cross-group bridging ties during playback.",
    "tryEn": "Increase the number of bridges and observe connectivity across communities."
  },
  "commons": {
    "titleEl": "Η τραγωδία των κοινών",
    "ideaEl": "Όταν πολλοί χρησιμοποιούν έναν κοινό περιορισμένο πόρο χωρίς επαρκή συντονισμό, μπορεί να τον εξαντλήσουν παρά το μακροπρόθεσμο κοινό τους συμφέρον.",
    "watchEl": "Δύο καμπύλες συγκρίνουν ένα ανανεώσιμο απόθεμα με σταθερή άντληση και χωρίς άντληση, σε απλό λογιστικό μοντέλο.",
    "tryEl": "Αύξησε την εξόρυξη. Σε ποιο σημείο ο πόρος δεν αναπληρώνεται αρκετά γρήγορα;",
    "watchEn": "Two curves compare a renewable common stock with constant extraction and without extraction.",
    "tryEn": "Increase harvesting. When does the stock fail to replenish?"
  },
  "replicator": {
    "titleEl": "Η δυναμική της εξελικτικής στρατηγικής",
    "ideaEl": "Στρατηγικές με υψηλότερη σχετική απόδοση τείνουν να αυξάνουν τη συχνότητά τους σε έναν πληθυσμό, με την απόδοση να εξαρτάται και από τη σύνθεση της ομάδας.",
    "watchEl": "Οι καμπύλες δείχνουν πώς μεταβάλλεται το μερίδιο δύο στρατηγικών με βάση τις σχετικές αποδόσεις.",
    "tryEl": "Άλλαξε το όφελος και το αρχικό ποσοστό. Πότε επικρατεί η μία στρατηγική;",
    "watchEn": "Curves show the shares of two competing strategies changing in response to frequency-dependent payoffs.",
    "tryEn": "Change the benefit and initial share. When does one strategy dominate?"
  },
  "brownian": {
    "titleEl": "Η κίνηση Brown",
    "ideaEl": "Ακόμη και χωρίς καθορισμένη κατεύθυνση, πολλές ανεξάρτητες μικροσκοπικές τυχαίες μετατοπίσεις παράγουν μια προβλέψιμη σχέση διασποράς με τον χρόνο.",
    "watchEl": "Η τροχιά δείχνει έναν δισδιάστατο τυχαίο περίπατο. Η συγκεκριμένη διαδρομή διαφέρει ανά seed, αλλά η μέση τετραγωνική μετατόπιση έχει θεωρητική δομή.",
    "tryEl": "Αύξησε τον συντελεστή διάχυσης D και δες πόσο μακριά τείνει να φτάνει ο περίπατος.",
    "watchEn": "The trace shows a two-dimensional random walk. Individual paths depend on the seed, even though the mean-squared displacement follows a theoretical law.",
    "tryEn": "Increase diffusion coefficient D. How far does the walk tend to spread?"
  },
  "henon": {
    "titleEl": "Ο παράξενος ελκυστής Hénon",
    "ideaEl": "Δύο απλές μη γραμμικές εξισώσεις επαναλαμβάνονται και μπορούν να παράγουν εντυπωσιακή γεωμετρική δομή και ευαισθησία στις αρχικές συνθήκες.",
    "watchEl": "Τα σημεία προέρχονται από διαδοχικές εφαρμογές του χάρτη Hénon. Σε ορισμένες παραμέτρους η τροχιά παραμένει περιορισμένη, ενώ αλλού αποκλίνει.",
    "tryEl": "Άλλαξε λίγο την παράμετρο a. Πώς διαφοροποιείται ο γεωμετρικός ελκυστής;",
    "watchEn": "Points come from repeated iterations of the Hénon map; some parameter choices produce bounded attractors while others diverge.",
    "tryEn": "Change parameter a slightly. How does the attractor geometry change?"
  },
  "forest": {
    "titleEl": "Τυχαία δάση αποφάσεων",
    "ideaEl": "Πολλά δέντρα αποφάσεων συνδυάζονται ώστε να μειωθεί η ευαισθησία σε μεμονωμένα δεδομένα και να αυξηθεί η σταθερότητα των προβλέψεων.",
    "watchEl": "Εδώ πολλά απλά κατώφλια σε μία διάσταση ψηφίζουν για την ίδια πρόβλεψη. Δεν εκπαιδεύεται πραγματικό Random Forest σε dataset.",
    "tryEl": "Αύξησε τον αριθμό των δέντρων. Γίνεται πιο σταθερή η συνολική καμπύλη ψήφων;",
    "watchEn": "Many synthetic one-dimensional decision stumps vote together. This is not a forest trained on real data.",
    "tryEn": "Add more trees. Does the ensemble vote curve look smoother?"
  },
  "pca": {
    "titleEl": "Ανάλυση κύριων συνιστωσών PCA",
    "ideaEl": "Η PCA βρίσκει διευθύνσεις που εξηγούν όσο γίνεται μεγαλύτερο μέρος της διακύμανσης των δεδομένων.",
    "watchEl": "Στο διάγραμμα βλέπεις ένα συνθετικό νέφος σημείων και τη διεύθυνση της πρώτης εμπειρικής κύριας συνιστώσας του.",
    "tryEl": "Περιστρέψε το νέφος και άλλαξε την επιμήκυνση. Ακολουθεί η πρώτη συνιστώσα τη μεγαλύτερη διασπορά;",
    "watchEn": "The scatter displays a synthetic point cloud and the direction of its first empirical principal component.",
    "tryEn": "Rotate or stretch the point cloud. Does the first component follow the direction of largest spread?"
  },
  "cointegration": {
    "titleEl": "Συνολοκλήρωση και διόρθωση σφάλματος",
    "ideaEl": "Δύο μη στάσιμες χρονοσειρές μπορούν να κινούνται μακροχρόνια μαζί, εάν κάποιος γραμμικός συνδυασμός τους παραμένει στάσιμος.",
    "watchEl": "Δύο τεχνητές σειρές μοιράζονται κοινή στοχαστική τάση, ενώ μια τρίτη ακολουθεί ανεξάρτητο τυχαίο περίπατο. Δεν εκτελείται στατιστικός έλεγχος συνολοκλήρωσης.",
    "tryEl": "Άλλαξε την επιμονή του σφάλματος. Πώς επηρεάζεται η απόκλιση μεταξύ των δύο συνδεδεμένων σειρών;",
    "watchEn": "Two synthetic I(1) series share a stochastic trend, while a third is an independent random walk. No cointegration test is performed.",
    "tryEn": "Change error persistence. How strongly do the two linked series depart from one another?"
  },
  "arch": {
    "titleEl": "Μεταβλητότητα ARCH",
    "ideaEl": "Μια μεγάλη παλαιότερη μεταβολή μπορεί να αυξήσει την εκτιμώμενη διακύμανση της επόμενης περιόδου, δημιουργώντας συστάδες μεταβλητότητας.",
    "watchEl": "Η συνθετική μεταβλητότητα ενημερώνεται από το τετράγωνο του προηγούμενου σοκ. Οι αποδόσεις προκύπτουν από κανονικές τυχαίες διαταραχές.",
    "tryEl": "Αύξησε τον συντελεστή ARCH και παρατήρησε την αντίδραση μετά από μεγάλα σοκ.",
    "watchEn": "Conditional volatility responds to the previous squared shock, producing clusters in synthetic return variability.",
    "tryEn": "Raise the ARCH coefficient and inspect the response after large innovations."
  },
  "cascades": {
    "titleEl": "Παγκόσμιες αλυσιδωτές αντιδράσεις σε δίκτυα",
    "ideaEl": "Μια μικρή αρχική ομάδα μπορεί να πυροδοτήσει μεγάλη διάδοση εάν κάθε κόμβος ενεργοποιείται όταν αρκετοί γείτονές του έχουν ήδη ενεργοποιηθεί.",
    "watchEl": "Το δίκτυο παραμένει ακριβώς το ίδιο σε κάθε frame. Οι πράσινοι κόμβοι είχαν ενεργοποιηθεί, οι πορτοκαλί ενεργοποιήθηκαν μόλις τώρα και οι σκούροι παραμένουν ανενεργοί.",
    "tryEl": "Σύρε τη χρονογραμμή ανά γύρο. Μείωσε το κατώφλι: φτάνει η ενεργοποίηση σε περισσότερους κόμβους;",
    "watchEn": "The same fixed graph persists through all frames: green nodes adopted earlier, amber ones adopted this round, and dark nodes have not adopted.",
    "tryEn": "Scrub round by round. Lower the threshold: does adoption reach more vertices?"
  },
  "bootstrap": {
    "titleEl": "Δειγματοληψία Bootstrap",
    "ideaEl": "Η επαναλαμβανόμενη δειγματοληψία με επανατοποθέτηση από ένα αρχικό δείγμα επιτρέπει την εκτίμηση της αβεβαιότητας ενός στατιστικού μεγέθους.",
    "watchEl": "Η καμπύλη παρουσιάζει μέσους όρους πολλών bootstrap δειγμάτων από ένα σταθερό συνθετικό αρχικό σύνολο. Τα όρια είναι εκατοστημοριακή εκτίμηση, όχι εγγυημένη κάλυψη.",
    "tryEl": "Αύξησε το μέγεθος δείγματος και σύγκρινε το πλάτος του εκτιμώμενου διαστήματος.",
    "watchEn": "The trace contains means of resamples drawn with replacement from one synthetic dataset; percentile intervals do not guarantee coverage.",
    "tryEn": "Increase initial sample size and compare estimated interval width."
  },
  "powerlaw": {
    "titleEl": "Εμπειρικές κατανομές νόμου δύναμης",
    "ideaEl": "Σε κατανομές με βαριές ουρές, ακραίες παρατηρήσεις μπορεί να είναι πολύ συχνότερες από ό,τι σε εκθετικές κατανομές.",
    "watchEl": "Οι δύο καμπύλες συγκρίνουν υποθετική δύναμη και εκθετική πτώση σε λογαριθμικούς άξονες. Δεν εφαρμόζεται εκτίμηση σε πραγματικά δεδομένα.",
    "tryEl": "Άλλαξε τον εκθέτη α. Πόσο γρήγορα μικραίνει η πιθανότητα ακραίων τιμών;",
    "watchEn": "The chart contrasts analytic power-law and exponential decay on log-log axes; it does not fit any observed dataset.",
    "tryEn": "Change tail exponent α. How fast does extreme-event frequency decline?"
  }
};
