import type {PaperGuide} from "./guide-types";
export const guidesPartA:Record<string,PaperGuide> = {
  "lorenz": {
    "titleEl": "Ο ελκυστής του Λόρεντς",
    "ideaEl": "Μικροσκοπικές διαφορές στην αρχή μπορούν να παράγουν τεράστιες αποκλίσεις, ακόμη και σε ένα απολύτως ντετερμινιστικό σύστημα.",
    "watchEl": "Η τροχιά προκύπτει από τρεις συνδεδεμένες διαφορικές εξισώσεις. Η καμπύλη σχηματίζει τον χαρακτηριστικό διπλό ελκυστή, χωρίς να επαναλαμβάνει ακριβώς την ίδια διαδρομή.",
    "tryEl": "Άλλαξε την παράμετρο ρ και σύγκρινε την τροχιά. Το χάος δεν είναι το ίδιο με την τυχαιότητα.",
    "watchEn": "The trajectory follows three coupled differential equations. It forms a two-lobed attractor without exactly repeating its path.",
    "tryEn": "Change ρ and compare the resulting trajectory. Chaos is not the same as randomness."
  },
  "boids": {
    "titleEl": "Σμήνη και συλλογική κίνηση",
    "ideaEl": "Τρεις απλοί τοπικοί κανόνες — αποφυγή, ευθυγράμμιση και συνοχή — παράγουν οργανωμένη ομαδική κίνηση χωρίς κεντρικό αρχηγό.",
    "watchEl": "Κάθε μικρό σημείο υπολογίζει την κατεύθυνσή του με βάση τους κοντινούς γείτονες. Η συνολική μορφή του σμήνους αναδύεται από αυτές τις αποφάσεις.",
    "tryEl": "Μείωσε τη συνοχή και δες αν το σμήνος διαλύεται. Μετά αύξησε την ευθυγράμμιση.",
    "watchEn": "Each point steers relative to nearby neighbours. Collective flock patterns emerge from local decisions, not a central leader.",
    "tryEn": "Lower cohesion to see whether the group disperses, then increase alignment."
  },
  "sir": {
    "titleEl": "Το μοντέλο επιδημιών SIR",
    "ideaEl": "Μια κοινότητα χωρίζεται σε ευπαθείς, μολυσμένους και αναρρώσαντες. Η μετάδοση και η ανάρρωση καθορίζουν την εξέλιξη.",
    "watchEl": "Οι καμπύλες S, I και R δείχνουν αντίστοιχα όσους μπορούν να μολυνθούν, όσους νοσούν και όσους έχουν αναρρώσει. Η κορυφή της I είναι η μέγιστη ταυτόχρονη διασπορά.",
    "tryEl": "Αύξησε τον ρυθμό ανάρρωσης γ. Πώς μετατοπίζεται η κορυφή των λοιμώξεων;",
    "watchEn": "The S, I and R curves track susceptible, infected and recovered populations. The peak of I measures the maximum simultaneous infections.",
    "tryEn": "Increase the recovery rate γ. How does the infection peak change?"
  },
  "black-scholes": {
    "titleEl": "Αποτίμηση δικαιωμάτων Black–Scholes",
    "ideaEl": "Η αξία ενός ευρωπαϊκού δικαιώματος αγοράς εξαρτάται από την τιμή του υποκείμενου στοιχείου, τη μεταβλητότητα και τον χρόνο ως τη λήξη.",
    "watchEl": "Η καμπύλη απεικονίζει τη θεωρητική αξία ενός call σε διαφορετικές τιμές spot. Η ανοδική κλίση γίνεται εντονότερη όταν το δικαίωμα είναι βαθύτερα εντός χρήματος.",
    "tryEl": "Αύξησε τη μεταβλητότητα διατηρώντας σταθερά τα άλλα. Πώς αλλάζει το ασφάλιστρο;",
    "watchEn": "The curve shows theoretical European call values across spot prices. Higher underlying prices push the option deeper into the money.",
    "tryEn": "Raise volatility while holding other inputs fixed. What happens to the option premium?"
  },
  "pagerank": {
    "titleEl": "Πώς λειτουργεί το PageRank",
    "ideaEl": "Μια ιστοσελίδα θεωρείται σημαντική όχι μόνο αν δέχεται πολλούς συνδέσμους, αλλά και αν αυτοί προέρχονται από σημαντικές άλλες σελίδες.",
    "watchEl": "Οι κόμβοι σχηματίζουν έναν κατευθυνόμενο γράφο και το μέγεθός τους αναπαριστά τη σχετική πιθανότητα επισκέψεων σε μακροχρόνια ισορροπία.",
    "tryEl": "Άλλαξε τον συντελεστή απόσβεσης. Ενισχύεται ή περιορίζεται η κυριαρχία ορισμένων κόμβων;",
    "watchEn": "Nodes represent pages in a directed graph; their size reflects their stationary PageRank probability.",
    "tryEn": "Change the damping factor. Do a few nodes become more or less dominant?"
  },
  "attention": {
    "titleEl": "Η προσοχή στους Transformers",
    "ideaEl": "Η αυτοπροσοχή επιτρέπει σε κάθε token να αποδίδει διαφορετικό βάρος στα υπόλοιπα, ανάλογα με τη μαθηματική τους συνάφεια.",
    "watchEl": "Το θερμικό πλέγμα δείχνει κανονικοποιημένα βάρη προσοχής. Κάθε γραμμή αντιστοιχεί σε ένα ερώτημα, κάθε στήλη σε ένα στοιχείο-κλειδί.",
    "tryEl": "Ρύθμισε το βάρος αυτοπροσοχής και παρατήρησε αν η διαγώνιος γίνεται εντονότερη. Τα βάρη εδώ είναι συνθετικά, όχι από εκπαιδευμένο μοντέλο.",
    "watchEn": "The heat map displays normalized synthetic attention weights: each row is a query and each column is a key.",
    "tryEn": "Adjust self-attention bias and watch the diagonal. These are synthetic weights, not outputs from a trained model."
  },
  "ising": {
    "titleEl": "Το μοντέλο Ising",
    "ideaEl": "Πολλές απλές αλληλεπιδράσεις μεταξύ γειτονικών σπιν μπορούν να προκαλέσουν συνολική μαγνητική τάξη ή αποδιοργάνωση.",
    "watchEl": "Κάθε κελί είναι ένα σπιν που αλληλεπιδρά με τα τέσσερα γειτονικά του. Στην εξέλιξη εμφανίζονται και μεταβάλλονται περιοχές κοινής φοράς.",
    "tryEl": "Μείωσε τη θερμοκρασία και δες αν δημιουργούνται μεγαλύτεροι τομείς ίδιας κατάστασης.",
    "watchEn": "Each cell is a spin interacting with its four neighbours. During evolution, domains with matching spin orientation form and change.",
    "tryEn": "Lower the temperature. Do larger, aligned domains emerge?"
  },
  "schelling": {
    "titleEl": "Το μοντέλο διαχωρισμού Schelling",
    "ideaEl": "Ακόμη και ήπιες ατομικές προτιμήσεις για όμοιους γείτονες μπορούν να παράγουν έντονο χωρικό διαχωρισμό.",
    "watchEl": "Το πλέγμα παρουσιάζει δύο ομάδες και κενές θέσεις. Οι πράκτορες που δεν ικανοποιούν το επιθυμητό ποσοστό όμοιων γειτόνων μετακινούνται.",
    "tryEl": "Αύξησε την απαιτούμενη ομοιότητα. Δημιουργούνται πιο ομοιογενείς γειτονιές;",
    "watchEn": "The grid contains two types of agents and empty sites. Unhappy agents move when too few neighbours belong to their own group.",
    "tryEn": "Increase the similarity threshold. Do more homogeneous neighbourhoods form?"
  },
  "life": {
    "titleEl": "Το Παιχνίδι της Ζωής",
    "ideaEl": "Από τέσσερις απλούς κανόνες γέννησης και επιβίωσης εμφανίζονται δομές που κινούνται, αναπαράγονται ή εξαφανίζονται.",
    "watchEl": "Σε κάθε γενιά, ένα κελί γεννιέται με τρεις ζωντανούς γείτονες και επιβιώνει με δύο ή τρεις. Όλα τα κελιά ενημερώνονται ταυτόχρονα.",
    "tryEl": "Κάνε παύση και προχώρησε ένα βήμα. Μπορείς να προβλέψεις ποια κελιά θα επιζήσουν;",
    "watchEn": "Cells are updated simultaneously: a dead cell with three live neighbours is born, while a live cell survives with two or three.",
    "tryEn": "Pause and step once. Can you predict which cells survive?"
  },
  "smallworld": {
    "titleEl": "Τα δίκτυα μικρού κόσμου",
    "ideaEl": "Λίγες μακρινές συνδέσεις μπορούν να μειώσουν δραματικά τη μέση απόσταση μεταξύ ατόμων, διατηρώντας τοπικές ομάδες.",
    "watchEl": "Ξεκινάς από έναν κανονικό δακτύλιο συνδέσεων. Ορισμένες ακμές επανασυνδέονται σε μακρινούς κόμβους δημιουργώντας συντομεύσεις.",
    "tryEl": "Αύξησε την πιθανότητα επανασύνδεσης και δες πόσο πυκνώνουν οι μακρινοί σύνδεσμοι.",
    "watchEn": "A regular ring network gradually rewires selected edges into long-distance shortcuts.",
    "tryEn": "Increase the rewiring probability and watch long-distance connections appear."
  },
  "bank": {
    "titleEl": "Τραπεζικές αναλήψεις πανικού",
    "ideaEl": "Μια τράπεζα μπορεί να αντιμετωπίσει κρίση ρευστότητας όταν οι καταθέτες περιμένουν ότι και οι άλλοι θα αποσύρουν τα χρήματά τους.",
    "watchEl": "Η καμπύλη είναι απλοποιημένος δείκτης ανάδρασης εμπιστοσύνης, όχι αναπαραγωγή της πλήρους ισορροπίας Diamond–Dybvig.",
    "tryEl": "Αύξησε το έλλειμμα εμπιστοσύνης και μετά το απόθεμα ρευστότητας. Τι συμβαίνει στον δείκτη;",
    "watchEn": "The curve is a stylized confidence-feedback risk proxy, not a full Diamond–Dybvig bank equilibrium.",
    "tryEn": "Increase the trust deficit, then the liquidity buffer. What happens to the proxy?"
  },
  "sandpile": {
    "titleEl": "Αυτοοργανωμένη κρισιμότητα",
    "ideaEl": "Όταν συσσωρεύονται τοπικά μικρές μεταβολές, ένα σύστημα μπορεί να εκδηλώσει ξαφνικές αναδιατάξεις πολλών διαφορετικών μεγεθών.",
    "watchEl": "Κάθε κελί δέχεται κόκκους. Όταν φτάσει τέσσερις, τους μεταφέρει στους γείτονες. Αυτή η ανατροπή μπορεί να πυροδοτήσει αλυσιδωτές χιονοστιβάδες.",
    "tryEl": "Προχώρησε το timeline και παρατήρησε πού συγκεντρώνονται κόκκοι και πού διαδίδονται ανατροπές.",
    "watchEn": "Grains accumulate in cells. At four grains, a cell topples into its neighbours and may trigger avalanches.",
    "tryEn": "Advance the timeline to watch accumulation and local toppling cascades."
  },
  "lotka": {
    "titleEl": "Κύκλοι θηρευτή και θηράματος",
    "ideaEl": "Η αύξηση των θηραμάτων τροφοδοτεί τους θηρευτές, αλλά περισσότεροι θηρευτές μειώνουν αργότερα τον πληθυσμό των θηραμάτων.",
    "watchEl": "Δύο καμπύλες παρουσιάζουν πληθυσμούς θηραμάτων και θηρευτών. Το ένα μέγεθος τείνει να ακολουθεί χρονικά το άλλο.",
    "tryEl": "Άλλαξε τον ρυθμό αναπαραγωγής των θηραμάτων. Πώς επηρεάζονται οι διακυμάνσεις;",
    "watchEn": "Two population curves rise and fall as prey abundance supports predators and predation reduces prey.",
    "tryEn": "Change prey reproduction. How do the oscillation patterns respond?"
  },
  "logistic": {
    "titleEl": "Ο λογιστικός χάρτης και το χάος",
    "ideaEl": "Η επανάληψη μιας εξαιρετικά απλής μη γραμμικής εξίσωσης μπορεί να δώσει σταθερότητα, περιοδικούς κύκλους ή χαοτική συμπεριφορά.",
    "watchEl": "Η καμπύλη δείχνει διαδοχικές τιμές του x. Για ορισμένες τιμές της παραμέτρου r οι ταλαντώσεις αλλάζουν από περιοδικές σε ακανόνιστες.",
    "tryEl": "Αύξησε το r προς το 4. Δες πότε εμφανίζονται μεγαλύτερες και λιγότερο προβλέψιμες διακυμάνσεις.",
    "watchEn": "The trace shows successive values of the logistic map. Different r values produce stable, periodic or chaotic sequences.",
    "tryEn": "Raise r toward 4. Look for period changes and increasingly irregular oscillations."
  },
  "turing": {
    "titleEl": "Πώς γεννιούνται τα βιολογικά μοτίβα",
    "ideaEl": "Η αντίδραση δύο ουσιών μαζί με τη διαφορετική διάχυσή τους μπορεί να δημιουργεί λωρίδες και κηλίδες χωρίς προκαθορισμένο σχέδιο.",
    "watchEl": "Οι συγκεντρώσεις ουσιών εξελίσσονται σε ένα χωρικό πλέγμα και οργανώνονται σε μοτίβα. Το lab χρησιμοποιεί τον συγγενή μηχανισμό Gray–Scott.",
    "tryEl": "Μετακίνησε αργά τις τιμές feed και kill και δες πότε οι κηλίδες εμφανίζονται ή εξαφανίζονται.",
    "watchEn": "Two interacting concentrations evolve over a spatial grid and may form spots or stripes. This uses the related Gray–Scott model.",
    "tryEn": "Move feed and kill rates gradually and observe when patterns appear or collapse."
  },
  "percolation": {
    "titleEl": "Πότε δημιουργείται συνεχές μονοπάτι;",
    "ideaEl": "Ένα τυχαίο μέσο μπορεί ξαφνικά να αποκτήσει διαδρομή που συνδέει δύο απέναντι πλευρές, όταν η κάλυψη περάσει ένα κατώφλι.",
    "watchEl": "Τα κελιά γεμίζουν με σταθερό τυχαίο δείγμα. Τα φωτεινά κελιά συνδέονται με την επάνω πλευρά και μπορεί να φτάσουν μέχρι κάτω.",
    "tryEl": "Αύξησε την πιθανότητα κάλυψης και παρατήρησε πότε δημιουργείται πλήρης σύνδεση.",
    "watchEn": "Sites are gradually occupied in a fixed random lattice. Highlighted sites connect to the top edge and may eventually span the grid.",
    "tryEn": "Increase occupancy probability and see when a spanning path forms."
  },
  "metropolis": {
    "titleEl": "Ο αλγόριθμος Metropolis",
    "ideaEl": "Μπορούμε να δειγματοληπτούμε από πολύπλοκες κατανομές δοκιμάζοντας νέες θέσεις και αποδεχόμενοι ή απορρίπτοντας αλλαγές.",
    "watchEl": "Η τροχιά ακολουθεί έναν τυχαίο περιπατητή σε ένα ενεργειακό τοπίο. Οι μεταβάσεις σε υψηλότερη ενέργεια δεν είναι πάντα απαγορευμένες.",
    "tryEl": "Αύξησε τη θερμοκρασία και δες αν ο περιπατητής περνά συχνότερα ανάμεσα στις περιοχές.",
    "watchEn": "The trace follows a random-walk sampler in an energy landscape. Uphill proposals may still be accepted.",
    "tryEn": "Raise temperature. Does the sampler cross between wells more often?"
  },
  "qlearning": {
    "titleEl": "Ενισχυτική μάθηση Q-learning",
    "ideaEl": "Ένας πράκτορας μαθαίνει ποιες ενέργειες είναι καλές βελτιώνοντας εκτιμήσεις μελλοντικής ανταμοιβής μέσα από επαναλαμβανόμενες δοκιμές.",
    "watchEl": "Το πλέγμα παρουσιάζει εκτιμήσεις αξίας σε ένα περιβάλλον 8×8. Καθώς εκτελούνται περισσότερα επεισόδια, διαδίδεται η πληροφορία για τις καλές διαδρομές.",
    "tryEl": "Πάτησε Animate και δες πώς αλλάζουν σταδιακά οι τιμές. Αύξησε την εξερεύνηση ε και σύγκρινε.",
    "watchEn": "An 8×8 grid shows estimated values. Additional training episodes propagate reward information to earlier states.",
    "tryEn": "Animate training, then increase exploration ε and compare the learned values."
  },
  "gan": {
    "titleEl": "Ανταγωνιστικά γενετικά δίκτυα",
    "ideaEl": "Δύο μοντέλα έχουν αντίθετους στόχους: το ένα προσπαθεί να παράγει πειστικά δείγματα και το άλλο να τα αναγνωρίσει.",
    "watchEl": "Οι δύο καμπύλες προσεγγίζουν σχηματικά ένα ανταγωνιστικό παιχνίδι βαθμίδων. Δεν εκπαιδεύεται πραγματικό GAN ούτε δημιουργούνται εικόνες.",
    "tryEl": "Άλλαξε τις αρχικές συνθήκες των δύο παικτών. Παρατήρησε αν η δυναμική συγκλίνει ή περιστρέφεται.",
    "watchEn": "Two curves illustrate a simplified adversarial gradient game. No actual GAN is trained and no images are generated.",
    "tryEn": "Change both players' starting positions and inspect convergence or oscillations."
  },
  "vae": {
    "titleEl": "Μεταβλητοί αυτοκωδικοποιητές VAE",
    "ideaEl": "Το VAE ισορροπεί ανάμεσα στην πιστή ανακατασκευή δεδομένων και σε μια ομαλή πιθανοτική αναπαράσταση.",
    "watchEl": "Οι καμπύλες δείχνουν σφάλμα ανακατασκευής, ποινή KL και συνολικό αντικειμενικό. Πρόκειται για συνθετικό παράδειγμα, όχι εκπαιδευμένο δίκτυο.",
    "tryEl": "Άλλαξε το βάρος της ποινής KL. Πώς μετατοπίζεται το σημείο καλύτερου συμβιβασμού;",
    "watchEn": "Curves depict reconstruction error, KL penalty and total objective for a synthetic example, not a trained network.",
    "tryEn": "Change the KL weight. How does the balance between reconstruction and regularity move?"
  },
  "diffusion": {
    "titleEl": "Πιθανοτικά μοντέλα διάχυσης",
    "ideaEl": "Η διάχυση προσθέτει βήμα-βήμα θόρυβο σε δεδομένα. Στα πραγματικά μοντέλα ένα εκπαιδευμένο δίκτυο μαθαίνει να αντιστρέφει αυτή τη διαδικασία.",
    "watchEl": "Στο lab βλέπεις μόνο τη σταδιακή πρόσθεση θορύβου πάνω σε συνθετικό σχήμα. Δεν υλοποιείται η μαθημένη αντίστροφη παραγωγή εικόνας.",
    "tryEl": "Πάτησε Animate και παρατήρησε πότε το αρχικό σήμα γίνεται δυσδιάκριτο.",
    "watchEn": "The animation performs only forward noise corruption on a synthetic image-like shape. It does not run a learned reverse denoiser.",
    "tryEn": "Animate and note when the original signal becomes hard to distinguish."
  },
  "resnet": {
    "titleEl": "Βαθιά υπολειμματικά δίκτυα ResNet",
    "ideaEl": "Οι συνδέσεις παράκαμψης βοηθούν πληροφορία και βαθμίδες να διατηρούνται όταν ένα νευρωνικό δίκτυο αποκτά πολλά επίπεδα.",
    "watchEl": "Οι καμπύλες συγκρίνουν μια απλοποιημένη εξασθένηση σήματος με και χωρίς παράκαμψη. Δεν μετριέται πραγματική ακρίβεια αναγνώρισης.",
    "tryEl": "Μετακίνησε τις τιμές διατήρησης και έλεγξε πόσο αποκλίνουν οι δύο καμπύλες.",
    "watchEn": "Schematic curves compare signal retention with and without residual skip paths; this is not measured vision-model accuracy.",
    "tryEn": "Adjust retention parameters and inspect how the curves diverge."
  },
  "scaling": {
    "titleEl": "Νόμοι κλιμάκωσης γλωσσικών μοντέλων",
    "ideaEl": "Η μείωση του σφάλματος συχνά ακολουθεί προσεγγιστικές σχέσεις δύναμης με το μέγεθος του μοντέλου, των δεδομένων ή του υπολογισμού.",
    "watchEl": "Η καμπύλη δείχνει σχηματικά πώς μικραίνει μια συνάρτηση απώλειας όσο αυξάνεται η κλίμακα. Οι συντελεστές δεν είναι μετρημένοι.",
    "tryEl": "Άλλαξε τον εκθέτη κλιμάκωσης. Πότε η αύξηση μεγέθους αποφέρει μικρότερα οφέλη;",
    "watchEn": "The curve sketches a power-law decrease in loss as model scale rises. Coefficients are illustrative, not empirically fitted.",
    "tryEn": "Change the scaling exponent. When do additional increases yield diminishing returns?"
  },
  "word2vec": {
    "titleEl": "Διανυσματικές αναπαραστάσεις λέξεων",
    "ideaEl": "Λέξεις με παρόμοια συμφραζόμενα μπορούν να μάθουν κοντινές θέσεις μέσα σε έναν πολυδιάστατο διανυσματικό χώρο.",
    "watchEl": "Το διάγραμμα εμφανίζει τεχνητές ομάδες σημείων που μοιάζουν με embeddings, όχι εκπαιδευμένα διανύσματα πραγματικών λέξεων.",
    "tryEl": "Άλλαξε τη διασπορά των ομάδων. Πότε γίνεται δυσκολότερο να τις ξεχωρίσεις;",
    "watchEn": "The scatter shows synthetic clusters resembling word embeddings, not actual vectors learned from text.",
    "tryEn": "Increase cluster spread. At what point are the groups harder to distinguish?"
  },
  "monod": {
    "titleEl": "Μικροβιακή ανάπτυξη Monod",
    "ideaEl": "Ο ρυθμός ανάπτυξης μικροοργανισμών αυξάνεται με τα διαθέσιμα θρεπτικά στοιχεία αλλά τελικά κορέννυται.",
    "watchEl": "Η καμπύλη παρουσιάζει τον ειδικό ρυθμό ανάπτυξης σε διαφορετικές συγκεντρώσεις υποστρώματος. Το μmax είναι το ανώτατο όριο.",
    "tryEl": "Αύξησε τη σταθερά ημικορεσμού Ks και δες πόσο υπόστρωμα χρειάζεται για τον ίδιο ρυθμό.",
    "watchEn": "The curve plots growth rate versus nutrient concentration, with saturation at the maximum rate μmax.",
    "tryEn": "Raise the half-saturation constant Ks. How much more nutrient is required?"
  },
  "hodgkin": {
    "titleEl": "Ηλεκτρική διέγερση νευρώνων",
    "ideaEl": "Μια αρκετά ισχυρή διέγερση μπορεί να οδηγήσει σε αιχμές δυναμικού με μετέπειτα επαναφορά της μεμβράνης.",
    "watchEl": "Η καμπύλη δείχνει δυναμικό μεμβράνης με απλοποιημένο μοντέλο Izhikevich. Δεν είναι πλήρης αριθμητική λύση Hodgkin–Huxley.",
    "tryEl": "Αύξησε το ρεύμα. Πώς μεταβάλλεται ο αριθμός των αιχμών;",
    "watchEn": "The voltage trace uses a simplified Izhikevich neuron, not the full Hodgkin–Huxley ion-channel equations.",
    "tryEn": "Increase injected current. How does spike frequency change?"
  },
  "epinet": {
    "titleEl": "Επιδημίες σε δίκτυα με κόμβους-υπερμεταδότες",
    "ideaEl": "Όταν ο αριθμός επαφών διαφέρει έντονα ανά άτομο, η διάδοση μπορεί να συμπεριφέρεται διαφορετικά από ένα ομοιογενές δίκτυο.",
    "watchEl": "Οι δύο καμπύλες είναι απλοποιημένοι δείκτες μετάδοσης σε ομοιογενείς και ετερογενείς επαφές, όχι προσομοίωση ρητού δικτύου.",
    "tryEl": "Άλλαξε την ένταση μετάδοσης και την ανάρρωση. Πώς αλλάζει η απόσταση των δύο προσεγγίσεων;",
    "watchEn": "The two curves contrast stylized homogeneous and heterogeneous-contact spread; no explicit contact network is simulated.",
    "tryEn": "Vary transmission and recovery parameters. How far apart are the curves?"
  },
  "markowitz": {
    "titleEl": "Επιλογή χαρτοφυλακίου Markowitz",
    "ideaEl": "Η διαφοροποίηση εξαρτάται όχι μόνο από τον κίνδυνο κάθε περιουσιακού στοιχείου αλλά και από τη μεταξύ τους συσχέτιση.",
    "watchEl": "Το διάγραμμα δείχνει διαφορετικούς συνδυασμούς δύο υποθετικών στοιχείων ως προς κίνδυνο και αναμενόμενη απόδοση.",
    "tryEl": "Άλλαξε τη συσχέτιση και βρες πότε μειώνεται ο ελάχιστος κίνδυνος.",
    "watchEn": "The curve plots risk and expected return for combinations of two hypothetical assets.",
    "tryEn": "Change correlation and find where the minimum portfolio risk falls."
  },
  "sharpe": {
    "titleEl": "Το υπόδειγμα CAPM",
    "ideaEl": "Το CAPM συνδέει την αναμενόμενη απόδοση με τον συστηματικό κίνδυνο όπως μετριέται από τον συντελεστή βήτα.",
    "watchEl": "Η ευθεία της αγοράς δείχνει την αναμενόμενη απόδοση για διαφορετικά βήτα, με υποθετικό επιτόκιο χωρίς κίνδυνο και ασφάλιστρο αγοράς.",
    "tryEl": "Αύξησε το ασφάλιστρο κινδύνου και δες πώς αλλάζει η κλίση της ευθείας.",
    "watchEn": "The security-market line shows expected return across beta values under hypothetical risk-free rate and market premium.",
    "tryEn": "Increase the market risk premium. How does the line slope change?"
  },
  "solow": {
    "titleEl": "Το υπόδειγμα οικονομικής μεγέθυνσης Solow",
    "ideaEl": "Η αποταμίευση αυξάνει το κεφάλαιο ανά εργαζόμενο, ενώ η απόσβεση και άλλοι παράγοντες το περιορίζουν, δημιουργώντας μακροχρόνια ισορροπία.",
    "watchEl": "Η καμπύλη δείχνει την πορεία του κεφαλαίου ανά εργαζόμενο καθώς οι επενδύσεις και η απόσβεση αλληλεπιδρούν.",
    "tryEl": "Αύξησε την αποταμίευση. Πώς αλλάζει το επίπεδο κεφαλαίου προς το οποίο τείνει το σύστημα;",
    "watchEn": "Capital per worker evolves as investment and effective depreciation compete, often approaching a steady state.",
    "tryEn": "Raise the saving rate. Where does the capital path converge?"
  }
};
