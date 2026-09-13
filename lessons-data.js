/*
  lessons-data.js
  ----------------
  This file holds ALL lesson content for Learn Darija.
  Content is Latin/number Darija + English only, no Arabic
  script, since this site is built for English speakers.

  HOW TO ADD A NEW LESSON:
  1. Copy an existing lesson object below (between the { and the matching }).
  2. Change the "id" to something unique, short, and url-safe (e.g. "family").
  3. Fill in vocabulary, phrases, conversation and quiz.
  4. Add the lesson to the correct level array at the bottom (LEVELS).
  That's it, lesson.html and index.html will pick it up automatically.

  A NOTE ON SPELLING:
  Darija does not have one official Latin spelling. Where more than one
  spelling is common, we list alternates in "latinAlt". We never claim
  one spelling is "the" correct one.
*/

const LESSONS = {

  // ============================================================
  // LESSON 1 - HOW TO READ DARIJA
  // ============================================================
  "how-to-read": {
    id: "how-to-read",
    level: "A1",
    number: 1,
    title: "How to Read Darija",
    subtitle: "Understanding the number/letter system",
    intro: `Moroccan Darija is normally written in Arabic script, but online, in texting,
      and on social media, Moroccans very often write Darija using the Latin alphabet
      plus numbers. The numbers stand in for Arabic
      sounds that don't have an obvious Latin letter. There is <strong>no single official
      way</strong> to spell Darija in Latin letters, different people spell the same word
      differently, and that's completely normal. This site uses Latin/number Darija
      throughout, since it's the version you'll actually see and type as an English speaker.`,
    keyPoints: [
      { symbol: "3", soundName: "an \"ayn\" sound", note: "A throat sound with no English equivalent. Example: 3lach (why)." },
      { symbol: "7", soundName: "a heavy \"h\"", note: "A breathy \"h\" from deep in the throat. Example: 7bibi (my dear)." },
      { symbol: "9", soundName: "a heavy \"k\"", note: "A \"k\" sound made further back in the throat. Example: 9tar (rain)." },
      { symbol: "5 / kh", soundName: "like Scottish \"loch\"", note: "A raspy back-of-throat sound. Example: khoya or 5oya (my brother)." },
      { symbol: "2", soundName: "a glottal stop", note: "A short catch in the voice, like the pause in \"uh-oh\". Example: mli2 (good, less common spelling)." }
    ],
    vocab: [
      { latin: "3lach", latinAlt: "3lash", english: "Why?", pronunciation: "3-lach", example: { latin: "3lach katd7ak?", english: "Why are you laughing?" } },
      { latin: "7bibi", latinAlt: "hbibi", english: "My dear / my love", pronunciation: "7-bi-bi", example: { latin: "Ahlan 7bibi", english: "Hi, my dear" } },
      { latin: "bzaf", latinAlt: "bezzaf", english: "A lot / very much", pronunciation: "bzaf", example: { latin: "Shukran bzaf", english: "Thank you very much" } },
      { latin: "wakha", latinAlt: "waxa", english: "Okay / alright", pronunciation: "wa-kha", example: { latin: "Wakha, ntla9aw ghda", english: "Okay, see you tomorrow" } }
    ],
    phrases: [],
    conversation: null,
    quiz: [
      {
        type: "multiple-choice",
        question: "What sound does the number \"3\" usually represent in Darija Latin spelling?",
        options: ["A heavy \"h\"", "An \"ayn\" throat sound", "A heavy \"k\"", "A raspy \"kh\""],
        answerIndex: 1,
        explanation: "\"3\" represents a throat sound (ayn) with no English letter equivalent."
      },
      {
        type: "multiple-choice",
        question: "Which of these is TRUE about Latin Darija spelling?",
        options: [
          "There is one official, government-approved spelling",
          "Everyone spells Darija exactly the same way",
          "People commonly spell the same word in more than one way",
          "Numbers are never used in Darija texting"
        ],
        answerIndex: 2,
        explanation: "Darija has no single standardized Latin spelling, variation is normal and expected."
      },
      {
        type: "multiple-choice",
        question: "\"7bibi\" most likely means:",
        options: ["Why?", "Thank you", "My dear / my love", "Okay"],
        answerIndex: 2,
        explanation: "7bibi means \"my dear / my love\". The 7 represents a heavy \"h\" sound."
      }
    ]
  },

  // ============================================================
  // LESSON 2 - GREETINGS
  // ============================================================
  "greetings": {
    id: "greetings",
    level: "A1",
    number: 2,
    title: "Greetings",
    subtitle: "How Moroccans say hello and goodbye",
    intro: `Greetings are the first thing you'll use in any real conversation. Moroccans
      often mix a standard Arabic greeting ("Salam") with everyday Darija expressions.`,
    keyPoints: [],
    vocab: [
      { latin: "Salam", latinAlt: "Slam", english: "Hello / Peace", pronunciation: "sa-lam", example: { latin: "Salam, labas?", english: "Hello, how are you?" } },
      { latin: "Sbah lkhir", latinAlt: "Sba7 lkhir", english: "Good morning", pronunciation: "sbah l-kheer", example: { latin: "Sbah lkhir jami3", english: "Good morning everyone" } },
      { latin: "Msa lkhir", latinAlt: "Msa lkhir", english: "Good evening", pronunciation: "m-sa l-kheer", example: null },
      { latin: "Bslama", latinAlt: "B slama", english: "Goodbye", pronunciation: "b-sla-ma", example: { latin: "Bslama, nshufek ghda", english: "Goodbye, see you tomorrow" } },
      { latin: "Mar7ba", latinAlt: "Marhba", english: "Welcome", pronunciation: "mar-h-ba", example: { latin: "Mar7ba bik", english: "Welcome (to you)" } },
      { latin: "Tsba7 3la khir", latinAlt: "Tsbah 3la khir", english: "Good night", pronunciation: "ts-bah 3la kheer", example: null }
    ],
    phrases: [
      { latin: "Labas?", english: "How are you? (lit. \"no harm?\")", note: "Extremely common, used constantly instead of a formal \"how are you\"." },
      { latin: "Labas, lhamdulillah", english: "I'm fine, thank God", note: "Very common response to Labas?" },
      { latin: "Kidayer? / Kidayra?", english: "How's it going? (to a man / to a woman)", note: "Casual, common among friends." }
    ],
    conversation: {
      title: "Meeting a friend on the street",
      lines: [
        { speaker: "A", latin: "Salam! Labas?", english: "Hello! How are you?" },
        { speaker: "B", latin: "Labas, lhamdulillah. W nta?", english: "I'm fine, thank God. And you?" },
        { speaker: "A", latin: "Labas Alhamdulillah, shukran", english: "I'm well, thank God, thanks" },
        { speaker: "B", latin: "Bslama, nshufek mnba3d", english: "Goodbye, see you later" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "What does \"Labas?\" mean?", options: ["Good morning", "How are you?", "Goodbye", "Welcome"], answerIndex: 1, explanation: "\"Labas?\" literally means \"no harm?\" and is used as \"how are you?\"" },
      { type: "multiple-choice", question: "How would you say \"Good morning\" in Darija?", options: ["Msa lkhir", "Bslama", "Sbah lkhir", "Salam"], answerIndex: 2, explanation: "\"Sbah lkhir\" means good morning. \"Msa lkhir\" is good evening." },
      { type: "multiple-choice", question: "A common reply to \"Labas?\" is:", options: ["Bslama", "Labas, lhamdulillah", "Sbah lkhir", "Mar7ba"], answerIndex: 1, explanation: "\"Labas, lhamdulillah\" (I'm fine, thank God) is the standard reply." }
    ]
  },

  // ============================================================
  // LESSON 3 - INTRODUCING YOURSELF
  // ============================================================
  "introducing-yourself": {
    id: "introducing-yourself",
    level: "A1",
    number: 3,
    title: "Introducing Yourself",
    subtitle: "Sharing your name and asking someone else's",
    intro: `Once you've greeted someone, the natural next step is exchanging names.
      Darija uses "smiti" (my name is) rather than a direct translation of "I am called".`,
    keyPoints: [],
    vocab: [
      { latin: "Smiti", latinAlt: "Smyti", english: "My name is", pronunciation: "smee-tee", example: { latin: "Smiti Yassine", english: "My name is Yassine" } },
      { latin: "Chno smitek?", latinAlt: "Ashno smitek?", english: "What's your name?", pronunciation: "chno smee-tek", example: null },
      { latin: "Ana mn...", latinAlt: "Ana men...", english: "I am from...", pronunciation: "a-na mn", example: { latin: "Ana mn lmaghrib", english: "I am from Morocco" } },
      { latin: "Tsharrafna", latinAlt: "", english: "Nice to meet you", pronunciation: "tshar-raf-na", example: null },
      { latin: "Nta / Nti", latinAlt: "", english: "You (to a man / to a woman)", pronunciation: "nta / ntee", example: { latin: "W nti?", english: "And you? (to a woman)" } }
    ],
    phrases: [
      { latin: "Mnin nta?", english: "Where are you from? (to a man)", note: "\"Mnin nti?\" when asking a woman." },
      { latin: "Wach nta maghribi?", english: "Are you Moroccan? (to a man)", note: "\"Wach nti maghribiya?\" to a woman." }
    ],
    conversation: {
      title: "Meeting someone new",
      lines: [
        { speaker: "A", latin: "Salam, chno smitek?", english: "Hello, what's your name?" },
        { speaker: "B", latin: "Smiti Yassine. W nta?", english: "My name is Yassine. And you?" },
        { speaker: "A", latin: "Smiti Adam. Tsharrafna", english: "My name is Adam. Nice to meet you" },
        { speaker: "B", latin: "Tsharrafna. Mnin nta?", english: "Nice to meet you too. Where are you from?" },
        { speaker: "A", latin: "Ana mn Amirika. W nta?", english: "I'm from America. And you?" },
        { speaker: "B", latin: "Ana mn lmaghrib", english: "I'm from Morocco" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Chno smitek?\" means:", options: ["Where are you from?", "What's your name?", "How are you?", "Nice to meet you"], answerIndex: 1, explanation: "\"Chno smitek?\" literally asks \"what is your name?\"" },
      { type: "multiple-choice", question: "How do you say \"My name is...\"?", options: ["Ana mn...", "Smiti...", "Nta...", "Tsharrafna"], answerIndex: 1, explanation: "\"Smiti\" means \"my name is\"." },
      { type: "multiple-choice", question: "\"Nti\" is used to address:", options: ["A man", "A woman", "A group", "An object"], answerIndex: 1, explanation: "\"Nta\" = you (to a man), \"Nti\" = you (to a woman)." }
    ]
  },

  // ============================================================
  // LESSON 4 - HOW ARE YOU?
  // ============================================================
  "how-are-you": {
    id: "how-are-you",
    level: "A1",
    number: 4,
    title: "How Are You?",
    subtitle: "Checking in on someone and answering naturally",
    intro: `You already saw "Labas?" in the greetings lesson, this lesson goes deeper into
      the different ways Moroccans ask how someone is doing, and natural ways to answer.`,
    keyPoints: [],
    vocab: [
      { latin: "Labas?", latinAlt: "", english: "How are you? (lit. no harm?)", pronunciation: "la-bas", example: null },
      { latin: "Kidayer?", latinAlt: "Ki dayer?", english: "How's it going? (to a man)", pronunciation: "ki-da-yer", example: null },
      { latin: "Kidayra?", latinAlt: "", english: "How's it going? (to a woman)", pronunciation: "ki-day-ra", example: null },
      { latin: "Bikhir", latinAlt: "B5ir", english: "Well / fine", pronunciation: "bee-kheer", example: { latin: "Ana bikhir", english: "I'm well" } },
      { latin: "Shwiya shwiya", latinAlt: "", english: "So-so / little by little", pronunciation: "shwee-ya shwee-ya", example: { latin: "Shwiya shwiya, machi bzaf", english: "So-so, not great" } },
      { latin: "3ayan / 3ayana", latinAlt: "", english: "Tired (m. / f.)", pronunciation: "3a-yan / 3a-ya-na", example: null }
    ],
    phrases: [
      { latin: "Lhamdulillah bikhir", english: "Fine, thank God", note: "A common, warm way to answer positively." },
      { latin: "Machi hadak shi", english: "Not that great (lit. \"not that thing\")", note: "A casual way to say things aren't great." }
    ],
    conversation: {
      title: "Checking in with a friend",
      lines: [
        { speaker: "A", latin: "Salam! Kidayer?", english: "Hi! How's it going?" },
        { speaker: "B", latin: "Labas, lhamdulillah bikhir. W nta kidayer?", english: "I'm fine, thank God. And how are you?" },
        { speaker: "A", latin: "Shwiya shwiya, shwiya 3ayan lyouma", english: "So-so, a bit tired today" },
        { speaker: "B", latin: "Khassek terta7", english: "You should rest" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Kidayer?\" is used to ask a...", options: ["Man", "Woman", "Group of women", "Child only"], answerIndex: 0, explanation: "\"Kidayer?\" addresses a man; \"Kidayra?\" addresses a woman." },
      { type: "multiple-choice", question: "\"Shwiya shwiya\" as an answer to \"how are you\" means roughly:", options: ["Very well", "So-so", "Terrible", "I don't know"], answerIndex: 1, explanation: "\"Shwiya shwiya\" means \"so-so\" / \"little by little\"." },
      { type: "multiple-choice", question: "\"3ayan\" means:", options: ["Happy", "Hungry", "Tired", "Busy"], answerIndex: 2, explanation: "\"3ayan\" (masculine) / \"3ayana\" (feminine) means tired." }
    ]
  },

  // ============================================================
  // LESSON 5 - BASIC EVERYDAY EXPRESSIONS
  // ============================================================
  "everyday-expressions": {
    id: "everyday-expressions",
    level: "A1",
    number: 5,
    title: "Common Everyday Expressions",
    subtitle: "Small words that make you sound natural",
    intro: `These are short, high-frequency words you'll hear constantly in Moroccan daily
      life, in cafés, taxis, shops, and with friends. Learning them early makes every
      later lesson easier.`,
    keyPoints: [],
    vocab: [
      { latin: "Shukran", latinAlt: "", english: "Thank you", pronunciation: "shuk-ran", example: null },
      { latin: "3afak", latinAlt: "3afek", english: "Please", pronunciation: "3a-fak", example: { latin: "3afak 3awnni", english: "Please help me" } },
      { latin: "Sme7 liya", latinAlt: "Sma7 liya", english: "Excuse me / sorry", pronunciation: "sm-eh lee-ya", example: null },
      { latin: "Wakha", latinAlt: "", english: "Okay", pronunciation: "wa-kha", example: null },
      { latin: "Yallah", latinAlt: "", english: "Let's go / come on", pronunciation: "ya-llah", example: { latin: "Yallah nemshiw", english: "Come on, let's go" } },
      { latin: "Bsa7a", latinAlt: "Bsaha", english: "Enjoy / cheers (said after eating, a haircut, etc.)", pronunciation: "b-sah-ha", example: null },
      { latin: "Inshallah", latinAlt: "", english: "God willing", pronunciation: "in-shal-lah", example: { latin: "Nshufek ghda inshallah", english: "See you tomorrow, God willing" } },
      { latin: "Machi mushkil", latinAlt: "", english: "No problem", pronunciation: "ma-shee mush-kil", example: null }
    ],
    phrases: [
      { latin: "La shukr 3la wajib", english: "No thanks needed (response to \"thank you\")", note: "A polite, common reply to \"shukran\"." }
    ],
    conversation: {
      title: "At a small shop",
      lines: [
        { speaker: "A", latin: "Sme7 liya, 3afak bghit had shi", english: "Excuse me, please, I want this thing" },
        { speaker: "B", latin: "Wakha, tfaddal", english: "Okay, here you go" },
        { speaker: "A", latin: "Shukran bzaf", english: "Thank you very much" },
        { speaker: "B", latin: "La shukr 3la wajib", english: "You're welcome" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"3afak\" means:", options: ["Thank you", "Please", "Sorry", "Okay"], answerIndex: 1, explanation: "\"3afak\" means \"please\"." },
      { type: "multiple-choice", question: "You'd say \"Bsa7a\" to someone...", options: ["Who is angry", "Who just ate or got a haircut", "Who is lost", "Who is late"], answerIndex: 1, explanation: "\"Bsa7a\" is said after eating, a haircut, a shower, etc., roughly \"enjoy/well done\"." },
      { type: "multiple-choice", question: "\"Machi mushkil\" means:", options: ["No problem", "Big problem", "I don't know", "Come here"], answerIndex: 0, explanation: "\"Machi mushkil\" literally means \"not a problem\"." }
    ]
  },

  // ============================================================
  // LESSON 6 - NUMBERS
  // ============================================================
  "numbers": {
    id: "numbers",
    level: "A1",
    number: 6,
    title: "Numbers",
    subtitle: "Counting from zero and asking prices",
    intro: `Numbers come up constantly, prices, phone numbers, quantities, time. Note that
      this is different from the "numbers-as-letters" you saw in "How to Read Darija"
      (3, 7, 9, 5, 2 standing in for sounds), here we mean actual counting numbers,
      which happen to be written with digits in both systems, so context matters.`,
    keyPoints: [],
    vocab: [
      { latin: "Sifr", latinAlt: "Zero", english: "Zero", pronunciation: "si-fr", example: null },
      { latin: "Wahed", latinAlt: "Wahd", english: "One", pronunciation: "wa-hed", example: { latin: "Bghit wahed", english: "I want one" } },
      { latin: "Jouj", latinAlt: "Zouj", english: "Two", pronunciation: "joozh", example: { latin: "Jouj qhawi 3afak", english: "Two coffees please" } },
      { latin: "Tlata", latinAlt: "", english: "Three", pronunciation: "tla-ta", example: null },
      { latin: "Rb3a", latinAlt: "Arba3a", english: "Four", pronunciation: "rb-3a", example: null },
      { latin: "Khamsa", latinAlt: "", english: "Five", pronunciation: "kham-sa", example: null },
      { latin: "Stta", latinAlt: "Setta", english: "Six", pronunciation: "st-ta", example: null },
      { latin: "Sb3a", latinAlt: "Seb3a", english: "Seven", pronunciation: "sb-3a", example: null },
      { latin: "Tmnya", latinAlt: "Tmanya", english: "Eight", pronunciation: "tm-nya", example: null },
      { latin: "Tsa3ud", latinAlt: "Tsaa", english: "Nine", pronunciation: "tsa-3ud", example: null },
      { latin: "3achra", latinAlt: "3ashra", english: "Ten", pronunciation: "3ash-ra", example: null },
      { latin: "Shhal?", latinAlt: "Chhal?", english: "How much? / How many?", pronunciation: "sh-hal", example: { latin: "Shhal hada?", english: "How much is this?" } }
    ],
    phrases: [
      { latin: "Bghit jouj", english: "I want two (of something already mentioned)", note: "Numbers stand alone once the item is clear from context." },
      { latin: "Ghali bzaf", english: "That's very expensive", note: "Useful right after hearing a price." },
      { latin: "Rkhes chwiya", english: "Lower it a bit / make it cheaper", note: "Common in markets when bargaining is expected." }
    ],
    conversation: {
      title: "Buying oranges from a stall",
      lines: [
        { speaker: "A", latin: "Salam, shhal had lburtuqal?", english: "Hello, how much are these oranges?" },
        { speaker: "B", latin: "3achra derhem lkilo", english: "Ten dirhams a kilo" },
        { speaker: "A", latin: "Wakha, 3tini jouj kilo 3afak", english: "Okay, give me two kilos please" },
        { speaker: "B", latin: "Tfaddal, hadi 3ashrin derhem", english: "Here you go, that's twenty dirhams" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Jouj\" means:", options: ["One", "Two", "Three", "Ten"], answerIndex: 1, explanation: "\"Jouj\" (or \"Zouj\") means two." },
      { type: "multiple-choice", question: "\"Shhal?\" is used to ask:", options: ["Where something is", "How much / how many", "Who someone is", "When something happens"], answerIndex: 1, explanation: "\"Shhal?\" asks about quantity or price." },
      { type: "multiple-choice", question: "If something is \"ghali bzaf\", it is:", options: ["Very cheap", "Very expensive", "Very small", "Not available"], answerIndex: 1, explanation: "\"Ghali\" means expensive; \"bzaf\" intensifies it to \"very\"." }
    ]
  },

  // ============================================================
  // LESSON 7 - FAMILY
  // ============================================================
  "family": {
    id: "family",
    level: "A1",
    number: 7,
    title: "Family",
    subtitle: "Talking about parents, siblings, and relatives",
    intro: `Family comes up early in almost any real conversation in Morocco, people ask
      about your family, and you'll want to talk about theirs. Darija family words often
      double as terms of affection, even for people who aren't literally your relatives.`,
    keyPoints: [],
    vocab: [
      { latin: "Baba", latinAlt: "", english: "Father / dad", pronunciation: "ba-ba", example: { latin: "Baba dyali", english: "My father" } },
      { latin: "Mama", latinAlt: "Mmi", english: "Mother / mom", pronunciation: "ma-ma", example: { latin: "Mama dyali", english: "My mother" } },
      { latin: "Khoya", latinAlt: "5oya", english: "My brother", pronunciation: "kho-ya", example: null },
      { latin: "Khti", latinAlt: "5ti", english: "My sister", pronunciation: "kh-tee", example: null },
      { latin: "Jddi", latinAlt: "Jdi", english: "My grandfather", pronunciation: "jd-dee", example: null },
      { latin: "Jddati", latinAlt: "Jdati", english: "My grandmother", pronunciation: "jd-da-tee", example: null },
      { latin: "3ammi", latinAlt: "", english: "My paternal uncle", pronunciation: "3am-mee", example: null },
      { latin: "Khali", latinAlt: "", english: "My maternal uncle", pronunciation: "kha-lee", example: null },
      { latin: "3ammti", latinAlt: "3ammati", english: "My paternal aunt", pronunciation: "3am-tee", example: null },
      { latin: "Khalti", latinAlt: "", english: "My maternal aunt", pronunciation: "khal-tee", example: null },
      { latin: "Weldi", latinAlt: "", english: "My son", pronunciation: "wel-dee", example: null },
      { latin: "Bnti", latinAlt: "", english: "My daughter", pronunciation: "bn-tee", example: null }
    ],
    phrases: [
      { latin: "3andi jouj khoutat", english: "I have two sisters", note: "\"3andi\" (I have) + number + word." },
      { latin: "Kidayra la famille?", latinAlt: "Kidayra l3a2ila?", english: "How's the family? (general check-in)", note: "A warm, common question when catching up with someone." },
      { latin: "Lla y7fedhem", english: "May God protect them", note: "Common blessing said after mentioning family members." }
    ],
    conversation: {
      title: "Asking about someone's family",
      lines: [
        { speaker: "A", latin: "Wach 3andek khoutat wela khout?", english: "Do you have sisters or brothers?" },
        { speaker: "B", latin: "Ah, 3andi khoya wahed w khti wahda", english: "Yes, I have one brother and one sister" },
        { speaker: "A", latin: "W babak w mamak labas?", english: "And your father and mother, are they well?" },
        { speaker: "B", latin: "Labas, lhamdulillah, Lla y7fedhem", english: "They're well, thank God, may God protect them" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Khoya\" means:", options: ["My father", "My brother", "My uncle", "My son"], answerIndex: 1, explanation: "\"Khoya\" means \"my brother\"; \"Khti\" is \"my sister\"." },
      { type: "multiple-choice", question: "\"3ammi\" refers to your:", options: ["Maternal uncle", "Paternal uncle", "Grandfather", "Son"], answerIndex: 1, explanation: "\"3ammi\" is your father's brother; \"Khali\" is your mother's brother." },
      { type: "multiple-choice", question: "\"3andi jouj khoutat\" means:", options: ["I have two brothers", "I have two sisters", "I have two sons", "I have two uncles"], answerIndex: 1, explanation: "\"3andi\" = I have, \"jouj\" = two, \"khoutat\" = sisters." }
    ]
  },

  // ============================================================
  // LESSON 8 - FOOD AND DRINKS
  // ============================================================
  "food-and-drinks": {
    id: "food-and-drinks",
    level: "A1",
    number: 8,
    title: "Food and Drinks",
    subtitle: "Ordering, naming dishes, and talking about meals",
    intro: `Food is central to Moroccan daily life and hospitality. This lesson covers the
      words you'll need to order at a café, talk about a meal, and respond politely when
      someone offers you food, which happens often.`,
    keyPoints: [],
    vocab: [
      { latin: "Atay", latinAlt: "Tay", english: "Mint tea", pronunciation: "a-tay", example: { latin: "Bghit atay 3afak", english: "I'd like mint tea please" } },
      { latin: "Qahwa", latinAlt: "9ahwa", english: "Coffee", pronunciation: "9ah-wa", example: null },
      { latin: "Khobz", latinAlt: "", english: "Bread", pronunciation: "khobz", example: null },
      { latin: "Tajine", latinAlt: "Tagine", english: "Tajine (slow-cooked stew)", pronunciation: "ta-zheen", example: null },
      { latin: "Kouskous", latinAlt: "Couscous", english: "Couscous", pronunciation: "koos-koos", example: null },
      { latin: "Ma", latinAlt: "L'ma", english: "Water", pronunciation: "ma", example: { latin: "3tini lma 3afak", english: "Give me water please" } },
      { latin: "Hlib", latinAlt: "", english: "Milk", pronunciation: "hleeb", example: null },
      { latin: "3assir", latinAlt: "Aassir", english: "Juice", pronunciation: "3as-seer", example: null },
      { latin: "Lham", latinAlt: "Lahm", english: "Meat", pronunciation: "l-ham", example: null },
      { latin: "Hut", latinAlt: "7ut", english: "Fish", pronunciation: "hoot", example: null },
      { latin: "Khodra", latinAlt: "", english: "Vegetables", pronunciation: "khod-ra", example: null },
      { latin: "Fruta", latinAlt: "Deser", english: "Fruit / dessert", pronunciation: "froo-ta", example: null }
    ],
    phrases: [
      { latin: "Bghit...", english: "I would like...", note: "The core phrase for ordering anything." },
      { latin: "Shab3an", latinAlt: "Shab3ana", english: "I'm full (m. / f.)", note: "Said after a meal, often while declining more food." },
      { latin: "Bnina!", english: "Delicious! (said to the cook)", note: "A compliment offered during or after a meal, expected and appreciated." }
    ],
    conversation: {
      title: "Ordering at a café",
      lines: [
        { speaker: "A", latin: "Salam, bghit atay w khobz 3afak", english: "Hello, I'd like mint tea and bread please" },
        { speaker: "B", latin: "Wakha, wa7ed atay w khobz, chi haja khra?", english: "Okay, one mint tea and bread, anything else?" },
        { speaker: "A", latin: "La, safi, shukran", english: "No, that's enough, thank you" },
        { speaker: "B", latin: "Bsa7a!", english: "Enjoy!" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Atay\" refers to:", options: ["Coffee", "Mint tea", "Milk", "Juice"], answerIndex: 1, explanation: "\"Atay\" is mint tea, a staple drink in Morocco." },
      { type: "multiple-choice", question: "What do you say to compliment a meal?", options: ["Shab3an", "Bnina!", "Ghali bzaf", "Sme7 liya"], answerIndex: 1, explanation: "\"Bnina!\" means \"delicious!\" and is a common compliment to the cook." },
      { type: "multiple-choice", question: "\"Bghit\" means:", options: ["I have", "I would like", "I am full", "I don't want"], answerIndex: 1, explanation: "\"Bghit\" is the standard way to say \"I want/would like\" when ordering." }
    ]
  },

  // ============================================================
  // LESSON 9 - DAYS AND TIME
  // ============================================================
  "days-and-time": {
    id: "days-and-time",
    level: "A1",
    number: 9,
    title: "Days and Time",
    subtitle: "Talking about today, tomorrow, and the days of the week",
    intro: `Making plans means talking about when. This lesson covers the basic time words
      you'll use constantly ("today", "tomorrow", "now") plus the days of the week, so you
      can arrange to meet someone or understand when something is happening.`,
    keyPoints: [
      { symbol: "Nhar", soundName: "day", note: "\"Nhar\" means \"day\" and combines with a day name, e.g. \"Nhar ssebt\" = Saturday, \"Nhar l7ad\" = Sunday." }
    ],
    vocab: [
      { latin: "Lyoum", latinAlt: "", english: "Today", pronunciation: "l-yoom", example: { latin: "Lyoum 3andi bzaf dyal khedma", english: "Today I have a lot of work" } },
      { latin: "Ghda", latinAlt: "Ghedda", english: "Tomorrow", pronunciation: "gh-da", example: { latin: "Nshufek ghda", english: "See you tomorrow" } },
      { latin: "Lbar7", latinAlt: "Lbareh", english: "Yesterday", pronunciation: "l-bar-h", example: null },
      { latin: "Daba", latinAlt: "", english: "Now", pronunciation: "da-ba", example: { latin: "Ghadi nemshi daba", english: "I'm going to go now" } },
      { latin: "Nhar l7ad", latinAlt: "Lhad", english: "Sunday (lit. \"day of\" + l7ad)", pronunciation: "n-har l-had", example: null },
      { latin: "Ltnin", latinAlt: "Nhar ltnin", english: "Monday", pronunciation: "lt-neen", example: null },
      { latin: "Ttlat", latinAlt: "Nhar ttlat", english: "Tuesday", pronunciation: "t-t-lat", example: null },
      { latin: "Larb3a", latinAlt: "Nhar larb3a", english: "Wednesday", pronunciation: "larb-3a", example: null },
      { latin: "Lkhmis", latinAlt: "Nhar lkhmis", english: "Thursday", pronunciation: "l-khmees", example: null },
      { latin: "Jjem3a", latinAlt: "Nhar jjem3a", english: "Friday", pronunciation: "jj-em-3a", example: null },
      { latin: "Ssebt", latinAlt: "Nhar ssebt", english: "Saturday", pronunciation: "s-sebt", example: null }
    ],
    phrases: [
      { latin: "M3yax?", latinAlt: "", english: "What time is it?", note: "The natural, commonly-used way to ask the time." },
      { latin: "3andi maw3id", english: "I have an appointment", note: "Useful for explaining you're busy at a certain time." },
      { latin: "Nchoufek nhar jjem3a", english: "I'll see you on Friday", note: "Combine any day word with \"nchoufek\" (I'll see you) to make plans." }
    ],
    conversation: {
      title: "Making plans with a friend",
      lines: [
        { speaker: "A", latin: "Wach nta msali ghda?", english: "Are you free tomorrow?" },
        { speaker: "B", latin: "La, 3andi maw3id ghda. Chno balk nhar sebt?", english: "No, I have an appointment tomorrow. What about Saturday?" },
        { speaker: "A", latin: "Wakha, ssebt mzyan. M3yax?", english: "Okay, Saturday works. What time?" },
        { speaker: "B", latin: "Nchoufek m3a l3achra", english: "I'll see you at ten o'clock" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Ghda\" means:", options: ["Yesterday", "Today", "Tomorrow", "Now"], answerIndex: 2, explanation: "\"Ghda\" means tomorrow." },
      { type: "multiple-choice", question: "\"Nhar jjem3a\" refers to:", options: ["Monday", "Wednesday", "Friday", "Sunday"], answerIndex: 2, explanation: "\"Jjem3a\" is Friday, a day with special significance in Morocco." },
      { type: "multiple-choice", question: "\"M3yax?\" is asking:", options: ["What day is it?", "What time is it?", "How much does it cost?", "Where is it?"], answerIndex: 1, explanation: "\"M3yax?\" is the natural way to ask what time it is." }
    ]
  },

  // ============================================================
  // LESSON 10 - AT A CAFÉ
  // ============================================================
  "at-a-cafe": {
    id: "at-a-cafe",
    level: "A1",
    number: 10,
    title: "At a Café",
    subtitle: "Ordering the Moroccan way and asking for the bill",
    intro: `Moroccan cafés have their own vocabulary and rituals, from the classic
      "nos-nos" order to asking a waiter for the bill. This lesson builds on the drinks
      you learned in "Food and Drinks" with café-specific words and phrases.`,
    keyPoints: [],
    vocab: [
      { latin: "Nos-nos", latinAlt: "Nusnus", english: "Half coffee, half milk (a café classic)", pronunciation: "nos-nos", example: { latin: "Wa7ed nos-nos 3afak", english: "One nos-nos please" } },
      { latin: "Qahwa kahla", latinAlt: "9ahwa kahla", english: "Black coffee", pronunciation: "9ah-wa kah-la", example: null },
      { latin: "Sukkar", latinAlt: "Sokkar", english: "Sugar", pronunciation: "suk-kar", example: { latin: "Bla sukkar 3afak", english: "Without sugar please" } },
      { latin: "Kas", latinAlt: "", english: "Glass / cup", pronunciation: "kas", example: null },
      { latin: "Garso", latinAlt: "", english: "Waiter", pronunciation: "gar-so", example: null },
      { latin: "Lhsab", latinAlt: "L7sab", english: "The bill", pronunciation: "l-h-sab", example: { latin: "3tini lhsab 3afak", english: "Give me the bill please" } },
      { latin: "Blasa", latinAlt: "", english: "Seat / place", pronunciation: "bla-sa", example: { latin: "Fin kayna blasa khawya?", english: "Where is there a free seat?" } }
    ],
    phrases: [
      { latin: "Wach 3andkom wifi?", english: "Do you have wifi?", note: "Very commonly asked in Moroccan cafés." },
      { latin: "Bla sukkar", english: "Without sugar", note: "Add this after your drink order if you don't want it sweet." },
      { latin: "Fkas sghir wela kbir?", english: "In a small or large glass?", note: "A question you might hear back from the waiter." }
    ],
    conversation: {
      title: "Ordering at a café and asking for the bill",
      lines: [
        { speaker: "A", latin: "Salam, wa7ed nos-nos 3afak, bla sukkar", english: "Hello, one nos-nos please, without sugar" },
        { speaker: "B", latin: "Wakha, chi haja khra?", english: "Okay, anything else?" },
        { speaker: "A", latin: "La, shukran. Wach 3andkom wifi?", english: "No, thank you. Do you have wifi?" },
        { speaker: "B", latin: "Ah, kayn. Lmode passe kayn ftabla", english: "Yes, there is. The password is on the table" },
        { speaker: "A", latin: "Mzyan, shukran. 3tini lhsab 3afak mnba3d", english: "Great, thanks. Give me the bill later please" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "A \"nos-nos\" is:", options: ["Black coffee", "Half coffee, half milk", "Mint tea", "A type of bread"], answerIndex: 1, explanation: "\"Nos-nos\" (\"half-half\") is a Moroccan café classic: half coffee, half milk." },
      { type: "multiple-choice", question: "\"Lhsab\" means:", options: ["The menu", "The bill", "The waiter", "The seat"], answerIndex: 1, explanation: "\"Lhsab\" means \"the bill\", useful when you're ready to pay." },
      { type: "multiple-choice", question: "\"Bla sukkar\" means:", options: ["With sugar", "Without sugar", "More sugar", "No coffee"], answerIndex: 1, explanation: "\"Bla\" means \"without\", so \"bla sukkar\" is \"without sugar\"." }
    ]
  },

  // ============================================================
  // LESSON 11 - SHOPPING
  // ============================================================
  "shopping": {
    id: "shopping",
    level: "A1",
    number: 11,
    title: "Shopping",
    subtitle: "Trying things on and talking about price, size, and color",
    intro: `Whether at a souq stall or a regular shop, a few key words let you ask about
      size, color, and price, and politely negotiate if that's expected. This builds on
      the numbers and bargaining phrases from the "Numbers" lesson.`,
    keyPoints: [],
    vocab: [
      { latin: "Souq", latinAlt: "Souk", english: "Market", pronunciation: "sook", example: null },
      { latin: "Hanut", latinAlt: "7anut", english: "Shop / small store", pronunciation: "ha-noot", example: null },
      { latin: "Flous", latinAlt: "", english: "Money", pronunciation: "floos", example: { latin: "Ma 3ndish flous bzaf", english: "I don't have a lot of money" } },
      { latin: "Taille", latinAlt: "", english: "Size", pronunciation: "ta-ye", example: { latin: "3andkom taille kbira?", english: "Do you have a bigger size?" } },
      { latin: "Lawn", latinAlt: "Loun", english: "Color", pronunciation: "lawn", example: { latin: "Bghit lawn akhor", english: "I want a different color" } },
      { latin: "Kbir", latinAlt: "", english: "Big", pronunciation: "kbeer", example: null },
      { latin: "Sghir", latinAlt: "Seghir", english: "Small", pronunciation: "sgheer", example: null },
      { latin: "Njarreb", latinAlt: "Nkayes", english: "I try (on)", pronunciation: "n-jar-reb", example: { latin: "Wach momkin njarreb?", english: "Can I try it on?" } }
    ],
    phrases: [
      { latin: "Wach momkin njarreb?", latinAlt: "Wach momkin nkayes?", english: "Can I try it on?", note: "The essential phrase for clothes shopping." },
      { latin: "3andkom taille kbira/sghira?", english: "Do you have a bigger/smaller size?", note: "Swap \"kbira\" (big) and \"sghira\" (small) as needed." },
      { latin: "Ghali 3lya", english: "That's too expensive for me", note: "A polite way to push back on price without being rude." }
    ],
    conversation: {
      title: "Trying on a jacket at a shop",
      lines: [
        { speaker: "A", latin: "Salam, wach momkin njarreb had ljacket?", english: "Hello, can I try on this jacket?" },
        { speaker: "B", latin: "Ah, tfaddal. Bghiti taille akhra?", english: "Yes, go ahead. Do you want a different size?" },
        { speaker: "A", latin: "Bghit wahed sghir chwiya", english: "I'd like one a bit smaller" },
        { speaker: "B", latin: "Tfaddal hada. Shhal 3ndek dyal flous?", english: "Here you go. How much money do you have?" },
        { speaker: "A", latin: "Ghali 3lya chwiya, wach momkin rkhes?", english: "It's a bit expensive for me, can you lower it?" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Wach momkin njarreb?\" is used to ask:", options: ["How much is this?", "Can I try it on?", "Where is the shop?", "What color is it?"], answerIndex: 1, explanation: "\"Njarreb\" means \"I try\", this phrase asks permission to try something on." },
      { type: "multiple-choice", question: "\"Ghali 3lya\" means:", options: ["I like it", "That's too expensive for me", "It's too small", "I'll take it"], answerIndex: 1, explanation: "\"Ghali 3lya\" is a polite way to say a price is too high for you." },
      { type: "multiple-choice", question: "\"Sghir\" means:", options: ["Big", "Expensive", "Small", "Colorful"], answerIndex: 2, explanation: "\"Sghir\" means small; \"Kbir\" means big." }
    ]
  },

  // ============================================================
  // LESSON 12 - ASKING SOMEONE'S NAME (titles & introducing others)
  // ============================================================
  "asking-name": {
    id: "asking-name",
    level: "A1",
    number: 12,
    title: "Asking Someone's Name",
    subtitle: "Titles, introducing others, and double-checking a name",
    intro: `You already learned the basics of giving your own name in "Introducing
      Yourself". This lesson goes a bit further: polite titles for addressing people,
      introducing a third person to someone else, and phrases for when you didn't quite
      catch a name the first time.`,
    keyPoints: [],
    vocab: [
      { latin: "Sidi", latinAlt: "", english: "Sir / Mr. (respectful address)", pronunciation: "see-dee", example: { latin: "Sidi, smeh liya", english: "Sir, excuse me" } },
      { latin: "Lalla", latinAlt: "", english: "Ma'am / Mrs. (respectful address)", pronunciation: "lal-la", example: null },
      { latin: "Hada", latinAlt: "", english: "This is (masc., introducing someone)", pronunciation: "ha-da", example: { latin: "Hada sahbi Yassine", english: "This is my friend Yassine" } },
      { latin: "Hadi", latinAlt: "", english: "This is (fem., introducing someone)", pronunciation: "ha-dee", example: { latin: "Hadi khti Sara", english: "This is my sister Sara" } },
      { latin: "3awed 3afak", latinAlt: "3awd 3afak", english: "Say it again please", pronunciation: "3a-wed 3a-fak", example: { latin: "Sme7 liya, 3awed smitek 3afak", english: "Sorry, say your name again please" } },
      { latin: "Kifash katketb smitek?", latinAlt: "", english: "How do you spell your name?", pronunciation: "kee-fash kat-ketb smee-tek", example: null }
    ],
    phrases: [
      { latin: "Hada/Hadi ... smiytu/smiytha ...", english: "This is ..., their name is ...", note: "Standard pattern for introducing a third person." },
      { latin: "Sme7 liya, ma smi3tsh mzyan", english: "Sorry, I didn't hear well", note: "A polite way to ask someone to repeat their name." },
      { latin: "Farhan bik", latinAlt: "Metsherfin", english: "Pleased to meet you", note: "Said after being introduced to someone new." }
    ],
    conversation: {
      title: "Introducing a friend",
      lines: [
        { speaker: "A", latin: "Sidi, hada sahbi Karim", english: "Sir, this is my friend Karim" },
        { speaker: "B", latin: "Farhan bik Karim. Kifash katketb smitek?", english: "Pleased to meet you Karim. How do you spell your name?" },
        { speaker: "C", latin: "K-A-R-I-M, Karim", english: "K-A-R-I-M, Karim" },
        { speaker: "B", latin: "Mzyan, farhan bik bzaf", english: "Great, very pleased to meet you" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Hada\" is used to introduce:", options: ["A place", "A man (\"this is...\")", "A woman (\"this is...\")", "A food"], answerIndex: 1, explanation: "\"Hada\" is the masculine form of \"this is\"; \"Hadi\" is feminine." },
      { type: "multiple-choice", question: "\"Sidi\" is a respectful way to address:", options: ["A child", "A woman", "A man", "A pet"], answerIndex: 2, explanation: "\"Sidi\" (sir/Mr.) is used to respectfully address a man; \"Lalla\" is the equivalent for a woman." },
      { type: "multiple-choice", question: "\"3awed 3afak\" means:", options: ["Nice to meet you", "Say it again please", "What's your name?", "Goodbye"], answerIndex: 1, explanation: "\"3awed\" means \"repeat/again\", so this asks someone to say something again." }
    ]
  },

  // ============================================================
  // LESSON 13 - WHERE ARE YOU FROM?
  // ============================================================
  "where-from": {
    id: "where-from",
    level: "A1",
    number: 13,
    title: "Where Are You From?",
    subtitle: "Talking about your country, city, and nationality",
    intro: `A near-universal small-talk question. This lesson covers how to ask and
      answer it, plus a few country and nationality words you're likely to actually need
      in conversation.`,
    keyPoints: [],
    vocab: [
      { latin: "Mnin nta?", latinAlt: "Mnin nti?", english: "Where are you from?", pronunciation: "mneen nta", example: null },
      { latin: "Ana mn...", latinAlt: "", english: "I'm from...", pronunciation: "a-na mn", example: { latin: "Ana mn Lmghrib", english: "I'm from Morocco" } },
      { latin: "Lmghrib", latinAlt: "Elmaghrib", english: "Morocco", pronunciation: "l-magh-rib", example: null },
      { latin: "Blad", latinAlt: "", english: "Country", pronunciation: "blad", example: { latin: "Ashno hiya bladek?", english: "What's your country?" } },
      { latin: "Madina", latinAlt: "", english: "City", pronunciation: "ma-dee-na", example: null },
      { latin: "Ajnabi", latinAlt: "Ajnabiya", english: "Foreigner (m. / f.)", pronunciation: "aj-na-bee", example: null },
      { latin: "Meghribi", latinAlt: "Meghribiya", english: "Moroccan (m. / f.)", pronunciation: "megh-ree-bee", example: null }
    ],
    phrases: [
      { latin: "Mnin nta/nti?", english: "Where are you from?", note: "The essential question." },
      { latin: "Chhal 3ndek mnl3am hna flmghrib?", english: "How long have you been here in Morocco?", note: "A natural follow-up for visitors." },
      { latin: "Kay3jbni lmghrib bzeef", english: "I like Morocco a lot", note: "A friendly, easy compliment." }
    ],
    conversation: {
      title: "Meeting a traveler",
      lines: [
        { speaker: "A", latin: "Mnin nta?", english: "Where are you from?" },
        { speaker: "B", latin: "Ana mn Faransa, w nta?", english: "I'm from France, and you?" },
        { speaker: "A", latin: "Ana meghribi, mn Marrakech", english: "I'm Moroccan, from Marrakech" },
        { speaker: "B", latin: "Ah mzyan! Kay3jbni lmghrib bzeef", english: "Oh nice! I like Morocco a lot" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Mnin nta?\" means:", options: ["What's your name?", "Where are you from?", "How old are you?", "Where do you live now?"], answerIndex: 1, explanation: "\"Mnin\" means \"from where\", asking about origin." },
      { type: "multiple-choice", question: "\"Meghribi\" describes:", options: ["A country", "A city", "A Moroccan person (masc.)", "A foreigner"], answerIndex: 2, explanation: "\"Meghribi\" means \"Moroccan\" (masculine); \"Meghribiya\" is feminine." },
      { type: "multiple-choice", question: "\"Blad\" means:", options: ["City", "Country", "Street", "Neighborhood"], answerIndex: 1, explanation: "\"Blad\" means \"country\"; \"Madina\" is \"city\"." }
    ]
  },

  // ============================================================
  // LESSON 14 - AT A RESTAURANT
  // ============================================================
  "at-a-restaurant": {
    id: "at-a-restaurant",
    level: "A1",
    number: 14,
    title: "At a Restaurant",
    subtitle: "Ordering a full meal and asking for recommendations",
    intro: `This builds on "Food and Drinks" and "At a Café" for a sit-down restaurant
      meal, reserving a table, asking what's good, and handling the bill at the end.`,
    keyPoints: [],
    vocab: [
      { latin: "Lmenu", latinAlt: "Lamniu", english: "The menu", pronunciation: "l-me-noo", example: { latin: "3tini lmenu 3afak", english: "Give me the menu please" } },
      { latin: "Reservation", latinAlt: "", english: "Reservation", pronunciation: "re-zer-va-syon", example: { latin: "Brit ndir reservation", english: "I want to make a reservation" } },
      { latin: "Bax katnsahni?", latinAlt: "", english: "What do you recommend?", pronunciation: "bakh kat-nsah-nee", example: null },
      { latin: "Har", latinAlt: "", english: "Spicy", pronunciation: "har", example: { latin: "Maxi har 3afak", english: "Not spicy please" } },
      { latin: "Halwa", latinAlt: "", english: "Dessert / sweets", pronunciation: "hal-wa", example: null },
      { latin: "Bsahtek", latinAlt: "Bsse7tek", english: "Enjoy your meal (lit. to your health)", pronunciation: "b-sah-tek", example: null }
    ],
    phrases: [
      { latin: "Brit ndir reservation dyal table dyal jouj d nas", english: "I'd like to make a reservation for a table of two", note: "Useful to call ahead or ask at the door." },
      { latin: "Bax katnsahni?", english: "What do you recommend?", note: "A great question if the menu is unfamiliar." },
      { latin: "3tini lhsab mnba3d 3afak", english: "Give me the bill after, please", note: "Reused from \"At a Café\", works anywhere." }
    ],
    conversation: {
      title: "Ordering a meal",
      lines: [
        { speaker: "A", latin: "Msa lkhir, brit ndir reservation dyal table dyal jouj d nas", english: "Good evening, I'd like to make a reservation for a table of two" },
        { speaker: "B", latin: "Wakha, tfaddal. Bax katnsahni?", english: "Sure, right this way. What do you recommend?" },
        { speaker: "A", latin: "Ttajine dyal ddjaj bnin bzaf hna", english: "The chicken tajine here is very good" },
        { speaker: "B", latin: "Mzyan, ghadi njarreb. Maxi har 3afak", english: "Great, I'll try it. Not spicy please" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Bax katnsahni?\" is asking:", options: ["How much is it?", "What do you recommend?", "Where's the bathroom?", "Is it spicy?"], answerIndex: 1, explanation: "This phrase asks the waiter or host for a recommendation." },
      { type: "multiple-choice", question: "\"Har\" means:", options: ["Delicious", "Spicy", "Cold", "Sweet"], answerIndex: 1, explanation: "\"Har\" describes spicy food." },
      { type: "multiple-choice", question: "\"Bsahtek\" is said:", options: ["Before ordering", "To wish someone a good meal", "To ask for the bill", "To say goodbye"], answerIndex: 1, explanation: "\"Bsahtek\" (\"to your health\") is said before or during a meal, like \"enjoy\"." }
    ]
  },

  // ============================================================
  // LESSON 15 - AT THE MARKET
  // ============================================================
  "at-the-market": {
    id: "at-the-market",
    level: "A1",
    number: 15,
    title: "At the Market",
    subtitle: "Weighing produce and haggling like a local",
    intro: `Moroccan souqs and neighborhood produce markets run on a slightly different
      script than a fixed-price shop. This lesson covers weights, "just looking", and
      finishing a haggle with a final price.`,
    keyPoints: [],
    vocab: [
      { latin: "Souq lkhodra", latinAlt: "", english: "The vegetable market", pronunciation: "sook l-khod-ra", example: null },
      { latin: "Kilo", latinAlt: "", english: "Kilogram", pronunciation: "kee-lo", example: { latin: "3tini kilo dyal maticha", english: "Give me a kilo of tomatoes" } },
      { latin: "Ness kilo", latinAlt: "Nos kilo", english: "Half a kilo", pronunciation: "ness kee-lo", example: null },
      { latin: "Maticha", latinAlt: "", english: "Tomatoes", pronunciation: "ma-tee-sha", example: null },
      { latin: "Khyar", latinAlt: "", english: "Cucumber", pronunciation: "khyar", example: null },
      { latin: "Ana ghir kanshuf", latinAlt: "", english: "I'm just looking", pronunciation: "a-na gheer kan-shoof", example: null },
      { latin: "Akhir taman", latinAlt: "", english: "Final price", pronunciation: "a-kheer ta-man", example: { latin: "Xno howa akhir taman?", english: "What's your final price?" } }
    ],
    phrases: [
      { latin: "Shhal lkilo?", english: "How much per kilo?", note: "Combine with \"Numbers\" to understand the answer." },
      { latin: "Ana ghir kanshuf", english: "I'm just looking", note: "A polite way to browse without being pressured to buy." },
      { latin: "Xno howa akhir taman?", english: "What's your final price?", note: "The standard closing move in a haggle." }
    ],
    conversation: {
      title: "Buying vegetables",
      lines: [
        { speaker: "A", latin: "Salam, shhal lkilo dyal lmaticha?", english: "Hello, how much per kilo of tomatoes?" },
        { speaker: "B", latin: "Tmnya derhem lkilo", english: "Eight dirhams a kilo" },
        { speaker: "A", latin: "3tini ness kilo, w jouj dyal lkhyar 3afak", english: "Give me half a kilo, and two cucumbers please" },
        { speaker: "B", latin: "Tfaddal, xno howa akhir taman 3andek f rasek?", english: "Here you go, what final price did you have in mind?" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Ness kilo\" means:", options: ["One kilo", "Half a kilo", "Two kilos", "A quarter kilo"], answerIndex: 1, explanation: "\"Ness\" means \"half\", so \"ness kilo\" is half a kilo." },
      { type: "multiple-choice", question: "\"Ana ghir kanshuf\" is useful when you:", options: ["Want to pay immediately", "Are just browsing, not buying yet", "Want a discount", "Are lost"], answerIndex: 1, explanation: "This phrase politely signals you're just looking around." },
      { type: "multiple-choice", question: "\"Akhir taman\" means:", options: ["Half price", "Final price", "Free", "Double price"], answerIndex: 1, explanation: "\"Akhir taman\" asks for or states the final, settled price." }
    ]
  },

  // ============================================================
  // LESSON 16 - TAKING A TAXI
  // ============================================================
  "taking-a-taxi": {
    id: "taking-a-taxi",
    level: "A1",
    number: 16,
    title: "Taking a Taxi",
    subtitle: "Giving directions and understanding the meter",
    intro: `Petit taxis are one of the most common ways to get around Moroccan cities.
      This lesson covers giving your destination, checking the meter is used, and
      asking the driver to stop.`,
    keyPoints: [],
    vocab: [
      { latin: "Ttaksi", latinAlt: "Taxi", english: "Taxi", pronunciation: "t-tak-see", example: null },
      { latin: "Kumbtur", latinAlt: "Lkumbtur", english: "The meter", pronunciation: "koom-bteur", example: { latin: "Khddem bhssab lkumbtur 3afak", english: "Use the meter please" } },
      { latin: "Ddini l...", latinAlt: "Wsslni l...", english: "Take me to...", pronunciation: "d-dee-nee l", example: { latin: "Ddini lmahatta 3afak", english: "Take me to the station please" } },
      { latin: "Nishan", latinAlt: "", english: "Straight ahead", pronunciation: "nee-shan", example: null },
      { latin: "Limen", latinAlt: "Lyemin", english: "Right (direction)", pronunciation: "lee-men", example: null },
      { latin: "Lisser", latinAlt: "Ch-chmal", english: "Left (direction)", pronunciation: "lee-sser", example: null },
      { latin: "Wqf hna 3afak", latinAlt: "", english: "Stop here please", pronunciation: "w9f hna 3a-fak", example: null }
    ],
    phrases: [
      { latin: "Ddini l... 3afak", english: "Take me to... please", note: "Say a place name right after \"ddini l\"." },
      { latin: "Khddem bhssab lkumbtur 3afak", english: "Use the meter please", note: "Worth saying upfront in a petit taxi." },
      { latin: "Wqf hna, machi mushkil", english: "Stop here, that's fine", note: "Useful when you've arrived close enough." }
    ],
    conversation: {
      title: "Giving a taxi driver directions",
      lines: [
        { speaker: "A", latin: "Salam, ddini lmahatta dyal ttrain 3afak", english: "Hello, take me to the train station please" },
        { speaker: "B", latin: "Wakha, khddem bhssab lkumbtur?", english: "Okay, should I use the meter?" },
        { speaker: "A", latin: "Ah, 3afak", english: "Yes, please" },
        { speaker: "A", latin: "Nishan, mnba3d limen, w wqf hna", english: "Straight ahead, then right, and stop here" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Ddini l...\" means:", options: ["I'm going to...", "Take me to...", "Where is...?", "Stop at..."], answerIndex: 1, explanation: "\"Ddini\" means \"take me\", used to state your destination to a driver." },
      { type: "multiple-choice", question: "\"Limen\" means:", options: ["Left", "Straight", "Right", "Behind"], answerIndex: 2, explanation: "\"Limen\" means \"right\"; \"Lisser\" means \"left\"." },
      { type: "multiple-choice", question: "Why might you say \"khddem bhssab lkumbtur\"?", options: ["To ask for a discount", "To ask the driver to use the meter", "To ask for a receipt", "To ask the driver to hurry"], answerIndex: 1, explanation: "This asks the driver to charge based on the meter rather than negotiate a flat price." }
    ]
  },

  // ============================================================
  // LESSON 17 - ASKING FOR DIRECTIONS
  // ============================================================
  "directions": {
    id: "directions",
    level: "A1",
    number: 17,
    title: "Asking for Directions",
    subtitle: "Finding your way on foot around a Moroccan city or medina",
    intro: `Medinas in particular can be a maze, this lesson gives you the core
      direction words and questions to ask a stranger for help finding somewhere.`,
    keyPoints: [],
    vocab: [
      { latin: "Fin kayn...?", latinAlt: "", english: "Where is...?", pronunciation: "feen kayn", example: { latin: "Fin kayn lbanka?", english: "Where is the bank?" } },
      { latin: "Qddam", latinAlt: "9ddam", english: "In front of", pronunciation: "9d-dam", example: null },
      { latin: "Wra", latinAlt: "", english: "Behind", pronunciation: "wra", example: null },
      { latin: "Hda", latinAlt: "Jamb", english: "Next to", pronunciation: "hda", example: { latin: "Hda lmasjid", english: "Next to the mosque" } },
      { latin: "B3id", latinAlt: "", english: "Far", pronunciation: "b3eed", example: null },
      { latin: "Qrib", latinAlt: "9rib", english: "Close / nearby", pronunciation: "9reeb", example: null },
      { latin: "Zanka", latinAlt: "", english: "Street", pronunciation: "zan-ka", example: null }
    ],
    phrases: [
      { latin: "Fin kayn...?", english: "Where is...?", note: "The core question, follow with a place name." },
      { latin: "Wach b3id mnhna?", english: "Is it far from here?", note: "Good follow-up before deciding to walk or take a taxi." },
      { latin: "Shukran, lqit-ha", english: "Thanks, I found it", note: "A friendly closer once someone's helped you." }
    ],
    conversation: {
      title: "Finding the post office",
      lines: [
        { speaker: "A", latin: "Sme7 liya, fin kayna lbusta?", english: "Excuse me, where is the post office?" },
        { speaker: "B", latin: "Sir nishan, mnba3d dur 3la limen", english: "Go straight, then turn right" },
        { speaker: "A", latin: "Wach b3id mnhna?", english: "Is it far from here?" },
        { speaker: "B", latin: "La, qriba, khms dqayeq bzzarbi", english: "No, it's close, five minutes on foot" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Fin kayn...?\" means:", options: ["What is...?", "Where is...?", "When is...?", "Who is...?"], answerIndex: 1, explanation: "\"Fin\" means \"where\", so this asks the location of something." },
      { type: "multiple-choice", question: "\"Qrib\" means:", options: ["Far", "Close/nearby", "Behind", "Straight"], answerIndex: 1, explanation: "\"Qrib\" (or \"9rib\") means close/nearby; \"B3id\" means far." },
      { type: "multiple-choice", question: "\"Hda\" means:", options: ["Next to", "Inside", "Above", "Under"], answerIndex: 0, explanation: "\"Hda\" (or \"Jamb\") means \"next to\"." }
    ]
  },

  // ============================================================
  // LESSON 18 - AT HOME
  // ============================================================
  "at-home": {
    id: "at-home",
    level: "A1",
    number: 18,
    title: "At Home",
    subtitle: "Rooms of the house and welcoming a guest",
    intro: `Hospitality is central to Moroccan culture, and having guests over is common.
      This lesson covers basic rooms of a house plus the warm phrases you'll hear (and
      can use yourself) when welcoming someone in.`,
    keyPoints: [],
    vocab: [
      { latin: "Dar", latinAlt: "", english: "House / home", pronunciation: "dar", example: { latin: "Darek hna", english: "Your home is here (make yourself at home)" } },
      { latin: "Bit", latinAlt: "", english: "Room", pronunciation: "beet", example: null },
      { latin: "Kuzina", latinAlt: "", english: "Kitchen", pronunciation: "koo-zee-na", example: null },
      { latin: "Toilet", latinAlt: "", english: "Bathroom / toilet", pronunciation: "twa-let", example: { latin: "Fin kayn toilet?", english: "Where is the bathroom?" } },
      { latin: "Salon", latinAlt: "", english: "Living room", pronunciation: "sa-lon", example: null },
      { latin: "Dkhul", latinAlt: "Tfaddal dkhul", english: "Come in", pronunciation: "d-khool", example: null },
      { latin: "Rtah", latinAlt: "", english: "Relax / make yourself comfortable", pronunciation: "r-tah", example: null }
    ],
    phrases: [
      { latin: "Tfaddal dkhul, dar darek", english: "Come in, this is your home too", note: "A classic, warm Moroccan hospitality phrase." },
      { latin: "Rtah shwiya", english: "Relax a little / make yourself at home", note: "Said to a guest after they arrive." },
      { latin: "Bghiti chi haja?", english: "Do you want something (to drink/eat)?", note: "Almost automatic to offer a guest something." }
    ],
    conversation: {
      title: "Welcoming a guest",
      lines: [
        { speaker: "A", latin: "Ahlan! Tfaddal dkhul, dar darek", english: "Welcome! Come in, this is your home too" },
        { speaker: "B", latin: "Shukran bzaf", english: "Thank you so much" },
        { speaker: "A", latin: "Rtah fssalon, bghiti atay wella qahwa?", english: "Relax in the living room, would you like mint tea or coffee?" },
        { speaker: "B", latin: "Atay yak mzyan, shukran", english: "Mint tea sounds great, thanks" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Dar darek\" is a way of saying:", options: ["Your house is far", "Make yourself at home", "The house is closed", "This is not your house"], answerIndex: 1, explanation: "Literally \"the house is your house\", a warm hospitality phrase meaning \"make yourself at home\"." },
      { type: "multiple-choice", question: "\"Toilet\" refers to the:", options: ["Kitchen", "Bedroom", "Bathroom", "Living room"], answerIndex: 2, explanation: "\"Toilet\" is the commonly used word for the bathroom." },
      { type: "multiple-choice", question: "\"Rtah\" means:", options: ["Come in", "Sit down and relax", "Eat", "Leave"], answerIndex: 1, explanation: "\"Rtah\" invites someone to relax/make themselves comfortable." }
    ]
  },

  // ============================================================
  // LESSON 19 - DAILY ACTIVITIES
  // ============================================================
  "daily-activities": {
    id: "daily-activities",
    level: "A1",
    number: 19,
    title: "Daily Activities",
    subtitle: "Describing your everyday routine",
    intro: `Some ready-to-use phrases for describing a typical day. These use the "ka-"
      present-tense pattern you'll see explained in full in the A2 grammar lessons, for
      now, just learn them as set phrases, the way you would learn any new vocabulary.`,
    keyPoints: [],
    vocab: [
      { latin: "Kanfe9 bekri", latinAlt: "", english: "I wake up early", pronunciation: "kan-fe9 bek-ree", example: null },
      { latin: "Kanmshi lkhedma", latinAlt: "", english: "I go to work", pronunciation: "kan-mshee l-khed-ma", example: null },
      { latin: "Kanrja3 ldar", latinAlt: "", english: "I go back home", pronunciation: "kan-rja3 l-dar", example: null },
      { latin: "Kan3as", latinAlt: "", english: "I sleep", pronunciation: "kan-3as", example: { latin: "Kan3as dghya lyoum", english: "I'm sleeping early today" } },
      { latin: "Bekri", latinAlt: "", english: "Early", pronunciation: "bek-ree", example: null },
      { latin: "M3attel", latinAlt: "Fer-rwaq", english: "Late", pronunciation: "m3at-tel", example: null },
      { latin: "T3ban", latinAlt: "T3bana", english: "Tired (m. / f.)", pronunciation: "t3-ban", example: null }
    ],
    phrases: [
      { latin: "Ash katdir fnhar dyalek?", english: "What do you do in your day?", note: "A natural way to ask about someone's routine." },
      { latin: "3andi nhar 3amer", english: "I have a full/busy day", note: "Useful when explaining you're occupied." },
      { latin: "Kanfe9 bekri kolyoum", english: "I wake up early every day", note: "Combine with \"kolyoum\" (every day) to describe habits." }
    ],
    conversation: {
      title: "Describing a typical day",
      lines: [
        { speaker: "A", latin: "Ash katdir fnhar dyalek?", english: "What do you do in your day?" },
        { speaker: "B", latin: "Kanfe9 bekri, kanmshi lkhedma, w kanrja3 ldar fla3chiya", english: "I wake up early, go to work, and come back home in the evening" },
        { speaker: "A", latin: "Wach kat3ya bzaf?", english: "Do you get very tired?" },
        { speaker: "B", latin: "Ah, kankun t3ban bzaf fllil", english: "Yes, I'm very tired at night" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Kanfe9 bekri\" means:", options: ["I go to sleep late", "I wake up early", "I go to work", "I'm tired"], answerIndex: 1, explanation: "\"Kanfe9\" means \"I wake up\"; \"bekri\" means \"early\"." },
      { type: "multiple-choice", question: "\"T3ban\" describes:", options: ["Being happy", "Being tired", "Being early", "Being hungry"], answerIndex: 1, explanation: "\"T3ban\" (masc.) / \"T3bana\" (fem.) means \"tired\"." },
      { type: "multiple-choice", question: "\"3andi nhar 3amer\" means:", options: ["I have free time", "I have a busy/full day", "I have no plans", "I'm on vacation"], answerIndex: 1, explanation: "\"Nhar 3amer\" literally means \"a full day\", i.e. a busy day." }
    ]
  },

  // ============================================================
  // LESSON 20 - BASIC QUESTIONS
  // ============================================================
  "basic-questions": {
    id: "basic-questions",
    level: "A1",
    number: 20,
    title: "Basic Questions",
    subtitle: "The core question words: who, what, where, when, why, how",
    intro: `You've already met a few of these scattered across earlier lessons
      ("Shhal?" for how much, "3lach?" for why). This lesson collects all the core
      question words in one place so you can build your own questions confidently.`,
    keyPoints: [],
    vocab: [
      { latin: "Shkun?", latinAlt: "", english: "Who?", pronunciation: "shkoon", example: { latin: "Shkun nta?", english: "Who are you?" } },
      { latin: "Ash?", latinAlt: "Ashno?", english: "What?", pronunciation: "ash", example: { latin: "Ash bghiti?", english: "What do you want?" } },
      { latin: "Fin?", latinAlt: "", english: "Where?", pronunciation: "feen", example: null },
      { latin: "Fuqash?", latinAlt: "Imta?", english: "When?", pronunciation: "foo-9ash", example: { latin: "Fuqash ghadi tji?", english: "When will you come?" } },
      { latin: "3lach?", latinAlt: "3lash?", english: "Why?", pronunciation: "3-lach", example: null },
      { latin: "Kifash?", latinAlt: "Kifash?", english: "How?", pronunciation: "kee-fash", example: { latin: "Kifash nemshi l...?", english: "How do I get to...?" } },
      { latin: "Shhal?", latinAlt: "Chhal?", english: "How much / how many?", pronunciation: "shhal", example: null }
    ],
    phrases: [
      { latin: "Shkun ghadi yji?", english: "Who is going to come?", note: "\"Shkun\" combined with the future tense." },
      { latin: "Ash kayn?", english: "What's going on / what's up?", note: "A very common casual check-in question." },
      { latin: "Kifash 7alek?", english: "How are you doing? (variant)", note: "An alternate to phrases already learned in \"How Are You?\"." }
    ],
    conversation: {
      title: "A rapid-fire Q&A between friends",
      lines: [
        { speaker: "A", latin: "Ash kayn? Fin kunti?", english: "What's up? Where were you?" },
        { speaker: "B", latin: "Kunt fddar. Nta, fuqash ja hbibi?", english: "I was home. And you, when did your friend arrive?" },
        { speaker: "A", latin: "Ja lbare7. Kifash 3reftih?", english: "He arrived yesterday. How do you know him?" },
        { speaker: "B", latin: "3reftu mn jami3a", english: "I know him from university" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Shkun?\" means:", options: ["What?", "Who?", "Where?", "When?"], answerIndex: 1, explanation: "\"Shkun?\" asks about a person, \"who?\"" },
      { type: "multiple-choice", question: "\"Fuqash?\" means:", options: ["Why?", "How?", "When?", "How much?"], answerIndex: 2, explanation: "\"Fuqash\" (or \"Imta\") means \"when?\"" },
      { type: "multiple-choice", question: "Which question word would you use to ask \"how do I get there?\"", options: ["Shkun", "Kifash", "Fin", "3lach"], answerIndex: 1, explanation: "\"Kifash\" means \"how\", used for asking about method/manner." }
    ]
  },

  // ============================================================
  // LESSON 21 - VERBS IN DARIJA: THE BASICS
  // ============================================================
  "verbs-basics": {
    id: "verbs-basics",
    level: "A2",
    number: 1,
    title: "Verbs in Darija: The Basics",
    subtitle: "How conjugation works, and the pronouns you'll need",
    intro: `Darija verbs don't have a separate "infinitive" form the way English "to write"
      does. Instead, dictionaries and phrasebooks (including this one) cite a verb using
      its "he" past-tense form, so "kteb" literally means "he wrote", but it's also the
      form you'll see used as the base/citation form for "to write". From that base form,
      three simple changes get you the three tenses you need most: <strong>add a suffix</strong>
      for the past, <strong>add a prefix (often with "ka-")</strong> for the present, and
      <strong>add "ghadi" before the present form</strong> for the future. The next three
      lessons walk through each one using the same example verb, "kteb" (to write), so you
      can compare them directly. This lesson just covers the subject pronouns you'll plug
      into those patterns.`,
    keyPoints: [
      { symbol: "Ana", soundName: "I", note: "1st person singular" },
      { symbol: "Nta / Nti", soundName: "you (m. / f.)", note: "2nd person singular, same word does double duty in casual speech" },
      { symbol: "Howa", soundName: "he", note: "3rd person singular masculine" },
      { symbol: "Hiya", soundName: "she", note: "3rd person singular feminine" },
      { symbol: "Hna", soundName: "we", note: "1st person plural" },
      { symbol: "Ntuma", soundName: "you all", note: "2nd person plural" },
      { symbol: "Huma", soundName: "they", note: "3rd person plural" }
    ],
    vocab: [
      { latin: "Ana", latinAlt: "", english: "I", pronunciation: "a-na", example: { latin: "Ana mn lmghrib", english: "I am from Morocco" } },
      { latin: "Nta", latinAlt: "Nti", english: "You (masc. / fem.)", pronunciation: "nta", example: null },
      { latin: "Howa", latinAlt: "Huwa", english: "He", pronunciation: "ho-wa", example: null },
      { latin: "Hiya", latinAlt: "", english: "She", pronunciation: "hi-ya", example: null },
      { latin: "Hna", latinAlt: "", english: "We", pronunciation: "hna", example: null },
      { latin: "Ntuma", latinAlt: "", english: "You all", pronunciation: "ntoo-ma", example: null },
      { latin: "Huma", latinAlt: "", english: "They", pronunciation: "hoo-ma", example: null }
    ],
    phrases: [
      { latin: "Ktebt (past)", english: "I wrote", note: "Base + suffix. See \"Talking About the Past\"." },
      { latin: "Kankteb (present)", english: "I write / I'm writing", note: "\"ka-\" + prefix + base. See \"Talking About the Present\"." },
      { latin: "Ghadi nkteb (future)", english: "I will write", note: "\"Ghadi\" + present form. See \"Talking About the Future\"." }
    ],
    conversation: null,
    quiz: [
      { type: "multiple-choice", question: "What is the citation/dictionary form of a Darija verb based on?", options: ["The infinitive", "The \"he\" past-tense form", "The \"I\" present-tense form", "The command form"], answerIndex: 1, explanation: "Darija has no separate infinitive, the \"he\" past-tense form (e.g. \"kteb\", he wrote) is used as the base form." },
      { type: "multiple-choice", question: "\"Ntuma\" means:", options: ["We", "They", "You all", "I"], answerIndex: 2, explanation: "\"Ntuma\" is the 2nd person plural, \"you all\"." },
      { type: "multiple-choice", question: "Which marker signals the future tense?", options: ["A suffix on the verb", "\"Ka-\" before the verb", "\"Ghadi\" before the present form", "No change at all"], answerIndex: 2, explanation: "The future is made by placing \"ghadi\" before the present-tense form of the verb." }
    ]
  },

  // ============================================================
  // LESSON 22 - TALKING ABOUT THE PRESENT
  // ============================================================
  "present-tense": {
    id: "present-tense",
    level: "A2",
    number: 2,
    title: "Talking About the Present",
    subtitle: "The \"ka-\" prefix, for now and for habits",
    intro: `The present tense covers both "I write" (habitual) and "I am writing" (right
      now) with the same form, context tells you which. Build it by adding a personal
      prefix to the verb stem, then usually adding "ka-" in front of that (some regions
      say "ta-" instead; this site uses "ka-" since it's the most widely recognized).
      One important exception: a handful of very common verbs, like "bgha" (to want) and
      "3ref" (to know), normally appear in their <strong>past-tense</strong> form even
      when they describe the present. That's why "Bghit" from earlier lessons means
      "I want", not "I wanted", it's a quirk worth knowing rather than a mistake.`,
    keyPoints: [
      { symbol: "Ana", soundName: "Kankteb", note: "I write / I'm writing" },
      { symbol: "Nta / Nti", soundName: "Katkteb", note: "you write / you're writing" },
      { symbol: "Howa", soundName: "Kaykteb", note: "he writes / he's writing" },
      { symbol: "Hiya", soundName: "Katkteb", note: "she writes / she's writing" },
      { symbol: "Hna", soundName: "Kanketbou", note: "we write / we're writing" },
      { symbol: "Ntuma", soundName: "Katketbou", note: "you all write / you're writing" },
      { symbol: "Huma", soundName: "Kayketbou", note: "they write / they're writing" }
    ],
    vocab: [
      { latin: "Kankteb", latinAlt: "", english: "I write / I'm writing", pronunciation: "kan-kteb", example: { latin: "Kankteb chwiya bdarija", english: "I write a little in Darija" } },
      { latin: "Kaymshi", latinAlt: "Kaymchi", english: "He goes / he's going", pronunciation: "kay-mshi", example: { latin: "Kaymshi lkhedma kolyoum", english: "He goes to work every day" } },
      { latin: "Kanskon", latinAlt: "", english: "I live (reside)", pronunciation: "kan-skon", example: { latin: "Kanskon fddar lbeida", english: "I live in Casablanca" } },
      { latin: "Kaykhdem", latinAlt: "", english: "He works", pronunciation: "kay-khdem", example: null },
      { latin: "Ash kadir?", latinAlt: "Ash katdir?", english: "What are you doing?", pronunciation: "ash ka-deer", example: null }
    ],
    phrases: [
      { latin: "Ash kadir daba?", english: "What are you doing right now?", note: "The \"right now\" reading of the present tense." },
      { latin: "Kandir shi haja", english: "I'm doing something", note: "A vague, all-purpose reply." },
      { latin: "Kanhder chwiya bdarija", english: "I speak a little Darija", note: "A habitual-present example, useful to say about yourself." }
    ],
    conversation: {
      title: "Catching up on daily life",
      lines: [
        { speaker: "A", latin: "Fin kaskon daba?", english: "Where do you live now?" },
        { speaker: "B", latin: "Kanskon fddar lbeida, w nta?", english: "I live in Casablanca, and you?" },
        { speaker: "A", latin: "Ana kanskon frrbat. Wach kadir khedma?", english: "I live in Rabat. Are you working?" },
        { speaker: "B", latin: "Ah, kaykhdem fchi sharika sghira", english: "Yes, I work at a small company" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Kankteb\" means:", options: ["I wrote", "I write / I'm writing", "I will write", "Write!"], answerIndex: 1, explanation: "\"Ka-\" + present prefix gives the present tense: \"I write / I'm writing\"." },
      { type: "multiple-choice", question: "Why does \"Bghit\" mean \"I want\" rather than \"I wanted\"?", options: ["It's a typo Moroccans made up", "Some common verbs like \"want\" use the past form for present meaning", "Darija has no past tense at all", "\"Bghit\" is actually future tense"], answerIndex: 1, explanation: "A small set of stative verbs (want, know, understand...) conventionally use the past-tense form to express a present state." },
      { type: "multiple-choice", question: "\"Kaykhdem\" means:", options: ["He worked", "He will work", "He works / he's working", "Work! (command)"], answerIndex: 2, explanation: "\"Kay-\" is the 3rd person masculine present prefix + \"ka-\": \"he works/he's working\"." }
    ]
  },

  // ============================================================
  // LESSON 23 - TALKING ABOUT THE PAST
  // ============================================================
  "past-tense": {
    id: "past-tense",
    level: "A2",
    number: 3,
    title: "Talking About the Past",
    subtitle: "Adding suffixes to say what already happened",
    intro: `Where the present adds a prefix, the past tense adds a suffix to the verb
      stem, and the "he" form is simply the bare stem with no suffix at all (which is
      why it doubles as the dictionary form). This lesson uses "kteb" (to write) as the
      model, plus a couple of common everyday verbs so you can see the pattern repeat.`,
    keyPoints: [
      { symbol: "Ana", soundName: "Ktebt", note: "I wrote" },
      { symbol: "Nta / Nti", soundName: "Ktebti", note: "you wrote" },
      { symbol: "Howa", soundName: "Kteb", note: "he wrote (the bare stem)" },
      { symbol: "Hiya", soundName: "Ketbet", note: "she wrote" },
      { symbol: "Hna", soundName: "Ktebna", note: "we wrote" },
      { symbol: "Ntuma", soundName: "Ktebtu", note: "you all wrote" },
      { symbol: "Huma", soundName: "Ketbou", note: "they wrote" }
    ],
    vocab: [
      { latin: "Ktebt", latinAlt: "", english: "I wrote", pronunciation: "kteb-t", example: { latin: "Ktebt risala lbareh", english: "I wrote a letter yesterday" } },
      { latin: "Mshit", latinAlt: "Msheet", english: "I went", pronunciation: "m-sheet", example: { latin: "Mshit lsouq sbah", english: "I went to the market this morning" } },
      { latin: "Klit", latinAlt: "Kelt", english: "I ate", pronunciation: "kleet", example: { latin: "Klit tajine dyal ddjaj", english: "I ate a chicken tajine" } },
      { latin: "Kun", latinAlt: "Kan", english: "He was (base form of \"to be\")", pronunciation: "koon", example: { latin: "Fin kunti lbare7?", english: "Where were you yesterday?" } },
      { latin: "Ja", latinAlt: "Jha", english: "He came", pronunciation: "zha", example: null }
    ],
    phrases: [
      { latin: "Fin kunti lbare7?", english: "Where were you yesterday?", note: "\"Kunti\" is the past of \"to be\" for \"you\"." },
      { latin: "Mshit lsouq lbare7", english: "I went to the market yesterday", note: "Pairs naturally with the \"Days and Time\" vocabulary." },
      { latin: "Shhal 7taj?", english: "How long did it take? (roughly)", note: "Useful when recounting something that happened." }
    ],
    conversation: {
      title: "Talking about yesterday",
      lines: [
        { speaker: "A", latin: "Fin kunti lbare7?", english: "Where were you yesterday?" },
        { speaker: "B", latin: "Mshit lsouq, w mnba3d klit m3a sa7bi", english: "I went to the market, then I ate with my friend" },
        { speaker: "A", latin: "Wach kan mzyan lmakla?", english: "Was the food good?" },
        { speaker: "B", latin: "Ah, kant bnina bzaf", english: "Yes, it was very delicious" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "Which is the \"he\" past-tense form of \"kteb\" (write)?", options: ["Ktebt", "Ktebna", "Kteb", "Ketbou"], answerIndex: 2, explanation: "The bare stem \"Kteb\" (no suffix) is the \"he\" form, and the dictionary/citation form." },
      { type: "multiple-choice", question: "\"Mshit\" means:", options: ["I go", "I went", "I will go", "Go! (command)"], answerIndex: 1, explanation: "\"Mshit\" is the past-tense \"I\" form of \"to go\"." },
      { type: "multiple-choice", question: "\"Fin kunti lbare7?\" means:", options: ["Where are you now?", "Where will you be?", "Where were you yesterday?", "Where do you live?"], answerIndex: 2, explanation: "\"Kunti\" (you were) + \"lbare7\" (yesterday) = \"Where were you yesterday?\"" }
    ]
  },

  // ============================================================
  // LESSON 24 - TALKING ABOUT THE FUTURE
  // ============================================================
  "future-tense": {
    id: "future-tense",
    level: "A2",
    number: 4,
    title: "Talking About the Future",
    subtitle: "Using \"ghadi\" to talk about what's coming",
    intro: `The future is the simplest of the three tenses to build: put "ghadi" (often
      shortened to "gha-" in fast speech) in front of the present-tense form of the verb,
      and drop the "ka-" from that present form. "Ghadi" itself never changes, only the
      verb after it conjugates for person.`,
    keyPoints: [
      { symbol: "Ana", soundName: "Ghadi nkteb", note: "I will write" },
      { symbol: "Nta / Nti", soundName: "Ghadi tkteb", note: "you will write" },
      { symbol: "Howa", soundName: "Ghadi ykteb", note: "he will write" },
      { symbol: "Hiya", soundName: "Ghadi tkteb", note: "she will write" },
      { symbol: "Hna", soundName: "Ghadi nketbou", note: "we will write" },
      { symbol: "Ntuma", soundName: "Ghadi tketbou", note: "you all will write" },
      { symbol: "Huma", soundName: "Ghadi yketbou", note: "they will write" }
    ],
    vocab: [
      { latin: "Ghadi nkteb", latinAlt: "Gha nkteb", english: "I will write", pronunciation: "gha-dee n-kteb", example: null },
      { latin: "Ghadi nemshi", latinAlt: "Ghanmshi", english: "I will go", pronunciation: "gha-dee ne-mshi", example: { latin: "Ghadi nemshi ghda", english: "I'll go tomorrow" } },
      { latin: "Ghadi tji?", latinAlt: "Ghati tji?", english: "Will you come?", pronunciation: "gha-dee tzhee", example: { latin: "Ghadi tji m3ana ghda?", english: "Will you come with us tomorrow?" } },
      { latin: "Ghadi ykun", latinAlt: "", english: "It will be / he will be", pronunciation: "gha-dee y-koon", example: { latin: "Ghadi ykun mzyan", english: "It'll be good/fine" } }
    ],
    phrases: [
      { latin: "Ghadi nemshi ghda", english: "I'll go tomorrow", note: "Combine with day words from \"Days and Time\"." },
      { latin: "Ghadi tji m3ana?", english: "Will you come with us?", note: "A natural way to invite someone." },
      { latin: "Ghadi ykun mzyan, tqelleq machi", english: "It'll be fine, don't worry", note: "A common reassurance." }
    ],
    conversation: {
      title: "Making weekend plans",
      lines: [
        { speaker: "A", latin: "Ash ghadi ddir nhar ssebt?", english: "What are you going to do on Saturday?" },
        { speaker: "B", latin: "Ghadi nemshi lsouq, w mnba3d ghadi nshuf sa7bi", english: "I'll go to the market, then I'll see my friend" },
        { speaker: "A", latin: "Ghadi tji m3ana lqahwa mnba3d?", english: "Will you come to the café with us afterward?" },
        { speaker: "B", latin: "Ah, ghadi nji, wakha", english: "Yes, I'll come, okay" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "How is the future tense formed in Darija?", options: ["Adding a suffix to the past form", "\"Ghadi\" + the present-tense form", "\"Ka-\" + the past form", "There's no future tense"], answerIndex: 1, explanation: "\"Ghadi\" placed before the present-tense form of the verb creates the future." },
      { type: "multiple-choice", question: "\"Ghadi tji m3ana?\" means:", options: ["Did you come with us?", "Are you coming with us now?", "Will you come with us?", "Where did you go with us?"], answerIndex: 2, explanation: "\"Ghadi\" + \"tji\" (you come) = \"Will you come...\"" },
      { type: "multiple-choice", question: "Does \"ghadi\" itself change based on who's doing the action?", options: ["Yes, it has 7 different forms", "No, only the verb after it changes", "Yes, but only for plural subjects", "No, the whole sentence stays identical"], answerIndex: 1, explanation: "\"Ghadi\" is invariant, it's the verb that follows it that conjugates for person." }
    ]
  },

  // ============================================================
  // LESSON 25 - TALKING ABOUT YOUR DAY
  // ============================================================
  "talking-about-your-day": {
    id: "talking-about-your-day",
    level: "A2",
    number: 5,
    title: "Talking About Your Day",
    subtitle: "Recounting what already happened, using the past tense",
    intro: `Now that you know the past tense, you can properly recount your day rather
      than just naming activities. This lesson reuses the "Daily Activities" vocabulary
      from A1, now conjugated in the past.`,
    keyPoints: [],
    vocab: [
      { latin: "Fe9t bekri", latinAlt: "", english: "I woke up early", pronunciation: "fe9t bek-ree", example: null },
      { latin: "Mshit lkhedma", latinAlt: "", english: "I went to work", pronunciation: "m-sheet l-khed-ma", example: null },
      { latin: "Rje3t ldar", latinAlt: "", english: "I came back home", pronunciation: "rje3t l-dar", example: null },
      { latin: "Kunt t3ban", latinAlt: "Kunt t3bana", english: "I was tired (m. / f.)", pronunciation: "koont t3-ban", example: null },
      { latin: "Kan nhar tewil", latinAlt: "", english: "It was a long day", pronunciation: "kan nhar t-weel", example: null }
    ],
    phrases: [
      { latin: "Kifash kan nharek?", english: "How was your day?", note: "The natural equivalent of the English small-talk question." },
      { latin: "Kan nhar mzyan", english: "It was a good day", note: "A simple, common answer." },
      { latin: "Dert bzaf dyal lkhedma lyoum", english: "I did a lot of work today", note: "Combines \"dert\" (I did) with \"bzaf\" (a lot)." }
    ],
    conversation: {
      title: "Recapping the day",
      lines: [
        { speaker: "A", latin: "Kifash kan nharek?", english: "How was your day?" },
        { speaker: "B", latin: "Kan tewil. Fe9t bekri w mshit lkhedma daghya", english: "It was long. I woke up early and went to work quickly" },
        { speaker: "A", latin: "W daba, kunt t3ban wella la?", english: "And now, are you tired or not?" },
        { speaker: "B", latin: "Ah, kunt t3ban bzaf mnin rje3t ldar", english: "Yes, I was very tired when I got back home" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Kifash kan nharek?\" means:", options: ["What will you do today?", "How was your day?", "What time is it?", "Where were you today?"], answerIndex: 1, explanation: "\"Kan\" (was) + \"nharek\" (your day) = \"How was your day?\"" },
      { type: "multiple-choice", question: "\"Rje3t ldar\" means:", options: ["I woke up", "I went to work", "I came back home", "I was tired"], answerIndex: 2, explanation: "\"Rje3t\" (I returned) + \"ldar\" (home)." },
      { type: "multiple-choice", question: "\"Kunt t3ban\" means:", options: ["I am tired", "I was tired", "I will be tired", "I am not tired"], answerIndex: 1, explanation: "\"Kunt\" is the past tense of \"to be\" for \"I\"." }
    ]
  },

  // ============================================================
  // LESSON 26 - MAKING PLANS
  // ============================================================
  "making-plans": {
    id: "making-plans",
    level: "A2",
    number: 6,
    title: "Making Plans",
    subtitle: "Using the future tense to arrange to meet someone",
    intro: `A practical follow-up to "Talking About the Future", the exact phrases
      you'd use to set up a time and place to meet a friend.`,
    keyPoints: [],
    vocab: [
      { latin: "Ghadi netla9aw", latinAlt: "", english: "We will meet up", pronunciation: "gha-dee net-la-9aw", example: null },
      { latin: "Fin ghadi netla9aw?", latinAlt: "", english: "Where will we meet?", pronunciation: "feen gha-dee net-la-9aw", example: null },
      { latin: "N3ayet lik", latinAlt: "", english: "I'll call you", pronunciation: "n3a-yet leek", example: { latin: "N3ayet lik ghda fessba7", english: "I'll call you tomorrow morning" } },
      { latin: "Wach nta msali?", latinAlt: "Wach nti msalya?", english: "Are you free? (m. / f.)", pronunciation: "wach nta msa-lee", example: null },
      { latin: "Ntafqu 3la...", latinAlt: "", english: "Let's agree on...", pronunciation: "nta-f-9oo", example: { latin: "Ntafqu 3la ssa3a sb3a", english: "Let's agree on 7 o'clock" } }
    ],
    phrases: [
      { latin: "Wach nta msali ghda?", english: "Are you free tomorrow?", note: "The standard opener for proposing a plan." },
      { latin: "Fin ghadi netla9aw?", english: "Where will we meet?", note: "Follow up once someone says yes." },
      { latin: "Ntafqu 3la ssa3a sb3a", english: "Let's agree on 7 o'clock", note: "Combine with \"Numbers\" for other times." }
    ],
    conversation: {
      title: "Arranging to meet up",
      lines: [
        { speaker: "A", latin: "Wach nta msali nhar sebt?", english: "Are you free on Saturday?" },
        { speaker: "B", latin: "Ah, msali. Fin ghadi netla9aw?", english: "Yes, free. Where will we meet?" },
        { speaker: "A", latin: "Ntla9aw fl9ahwa lli 7dana", english: "Let's meet at the café near us" },
        { speaker: "B", latin: "Wakha, ntafqu 3la ssa3a sb3a", english: "Okay, let's agree on 7 o'clock" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Wach nta msali?\" means:", options: ["Are you tired?", "Are you free?", "Are you hungry?", "Are you home?"], answerIndex: 1, explanation: "\"Msali\" here means \"free/available\"." },
      { type: "multiple-choice", question: "\"N3ayet lik\" means:", options: ["I'll see you", "I'll call you", "I'll write to you", "I'll wait for you"], answerIndex: 1, explanation: "\"N3ayet\" means \"I call (phone)\"." },
      { type: "multiple-choice", question: "\"Ntafqu 3la...\" means:", options: ["Let's cancel...", "Let's agree on...", "Let's avoid...", "Let's ask about..."], answerIndex: 1, explanation: "\"Ntafqu\" means \"we agree\"." }
    ]
  },

  // ============================================================
  // LESSON 27 - TALKING ABOUT WORK
  // ============================================================
  "talking-about-work": {
    id: "talking-about-work",
    level: "A2",
    number: 7,
    title: "Talking About Work",
    subtitle: "Jobs, colleagues, and describing your workday",
    intro: `Common vocabulary for describing what you do, where you work, and basic
      workplace small talk.`,
    keyPoints: [],
    vocab: [
      { latin: "Khedma", latinAlt: "", english: "Work / job", pronunciation: "khed-ma", example: { latin: "Ash khedmtek?", english: "What's your job?" } },
      { latin: "Sharika", latinAlt: "", english: "Company", pronunciation: "sha-ree-ka", example: null },
      { latin: "Mudir", latinAlt: "Mudira", english: "Boss / manager (m. / f.)", pronunciation: "moo-deer", example: null },
      { latin: "Zmil", latinAlt: "Zmila", english: "Colleague (m. / f.)", pronunciation: "zmeel", example: null },
      { latin: "Ma3ash", latinAlt: "", english: "Salary", pronunciation: "ma-3ash", example: null },
      { latin: "Ijaza", latinAlt: "", english: "Vacation / leave", pronunciation: "ee-ja-za", example: { latin: "3ndi ijaza ghda", english: "I have a day off tomorrow" } }
    ],
    phrases: [
      { latin: "Ash khedmtek?", english: "What's your job?", note: "The standard way to ask what someone does." },
      { latin: "Kankhdem f...", english: "I work at/as...", note: "Follow with a company name or role." },
      { latin: "3ndi ijaza ghda", english: "I have a day off tomorrow", note: "Useful when explaining you won't be around." }
    ],
    conversation: {
      title: "Talking about jobs",
      lines: [
        { speaker: "A", latin: "Ash khedmtek?", english: "What's your job?" },
        { speaker: "B", latin: "Kankhdem fsharika sghira, w nta?", english: "I work at a small company, and you?" },
        { speaker: "A", latin: "Ana mudir dyal fri9 sghir", english: "I'm the manager of a small team" },
        { speaker: "B", latin: "Mzyan! Wach 3ndek ijaza had ssimana?", english: "Nice! Do you have time off this week?" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Ash khedmtek?\" means:", options: ["Where do you live?", "What's your job?", "Who's your boss?", "Are you free?"], answerIndex: 1, explanation: "\"Khedmtek\" means \"your job\"." },
      { type: "multiple-choice", question: "\"Zmil\" means:", options: ["Boss", "Colleague", "Salary", "Company"], answerIndex: 1, explanation: "\"Zmil\" (masc.) / \"Zmila\" (fem.) means \"colleague\"." },
      { type: "multiple-choice", question: "\"Ijaza\" means:", options: ["Salary", "Meeting", "Vacation/leave", "Overtime"], answerIndex: 2, explanation: "\"Ijaza\" refers to vacation or time off." }
    ]
  },

  // ============================================================
  // LESSON 28 - TALKING ABOUT SCHOOL
  // ============================================================
  "talking-about-school": {
    id: "talking-about-school",
    level: "A2",
    number: 8,
    title: "Talking About School",
    subtitle: "Studies, exams, and everyday school vocabulary",
    intro: `Useful whether you're a student yourself or just asking someone else about
      their studies.`,
    keyPoints: [],
    vocab: [
      { latin: "Madrasa", latinAlt: "", english: "School", pronunciation: "ma-dra-sa", example: null },
      { latin: "Jami3a", latinAlt: "", english: "University", pronunciation: "ja-mee-3a", example: { latin: "Fin kat9ra?", english: "Where do you study?" } },
      { latin: "Ustad", latinAlt: "Ustada", english: "Teacher (m. / f.)", pronunciation: "oos-tad", example: null },
      { latin: "Tlmid", latinAlt: "Tlmida", english: "Student (m. / f.)", pronunciation: "tl-meed", example: null },
      { latin: "Wajib", latinAlt: "", english: "Homework", pronunciation: "wa-jeeb", example: null },
      { latin: "Imte7an", latinAlt: "", english: "Exam", pronunciation: "eem-te-han", example: { latin: "3ndi imte7an ghda", english: "I have an exam tomorrow" } }
    ],
    phrases: [
      { latin: "Fin kat9ra?", english: "Where do you study?", note: "Ask about someone's school or university." },
      { latin: "3ndi imte7an ghda", english: "I have an exam tomorrow", note: "Useful to explain you need to study." },
      { latin: "Kan sa3eb lwajib", english: "The homework was hard", note: "Combine with past tense from earlier lessons." }
    ],
    conversation: {
      title: "Talking about studies",
      lines: [
        { speaker: "A", latin: "Fin kat9ra?", english: "Where do you study?" },
        { speaker: "B", latin: "Kan9ra fjami3at rrbat", english: "I study at the university in Rabat" },
        { speaker: "A", latin: "Wach 3ndek imte7an dghya?", english: "Do you have an exam soon?" },
        { speaker: "B", latin: "Ah, ghda, w lwajib kan sa3eb bzaf", english: "Yes, tomorrow, and the homework was very hard" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Jami3a\" means:", options: ["Primary school", "University", "Classroom", "Library"], answerIndex: 1, explanation: "\"Jami3a\" means \"university\"; \"Madrasa\" is the more general \"school\"." },
      { type: "multiple-choice", question: "\"Wajib\" means:", options: ["Exam", "Homework", "Teacher", "Grade"], answerIndex: 1, explanation: "\"Wajib\" means \"homework\" or \"duty\"." },
      { type: "multiple-choice", question: "\"Ustad\" refers to:", options: ["A student", "A teacher", "A school", "An exam"], answerIndex: 1, explanation: "\"Ustad\" (masc.) / \"Ustada\" (fem.) means \"teacher\"." }
    ]
  },

  // ============================================================
  // LESSON 29 - TALKING ABOUT FRIENDS
  // ============================================================
  "talking-about-friends": {
    id: "talking-about-friends",
    level: "A2",
    number: 9,
    title: "Talking About Friends",
    subtitle: "Describing friendships and things you do together",
    intro: `Simple vocabulary for talking about your friends and the things you do
      together, beyond just introducing them (covered back in "Asking Someone's Name").`,
    keyPoints: [],
    vocab: [
      { latin: "Sahbi", latinAlt: "Sahbti", english: "My friend (m. / f.)", pronunciation: "sah-bee", example: null },
      { latin: "Sa7ab", latinAlt: "", english: "Friends (plural)", pronunciation: "sa-hab", example: { latin: "Sa7abi kolhom mzyanin", english: "All my friends are great" } },
      { latin: "Mzyan m3a", latinAlt: "", english: "Gets along well with", pronunciation: "mzyan m3a", example: null },
      { latin: "Nas 3zizin", latinAlt: "", english: "Dear people", pronunciation: "nas 3zee-zeen", example: null },
      { latin: "Kankhrjou", latinAlt: "", english: "We go out (together)", pronunciation: "kan-khr-zhoo", example: { latin: "Kankhrjou bzaf ma3a b3diyatna", english: "We go out a lot together" } }
    ],
    phrases: [
      { latin: "3ndi sahbi mzyan bzaf", english: "I have a very good friend", note: "A simple, warm way to describe a friendship." },
      { latin: "Kankhrjou bzaf", english: "We go out a lot", note: "Describes spending time together regularly." },
      { latin: "3reftu mnin sghar", english: "I've known him since we were kids", note: "A common way to describe a long friendship." }
    ],
    conversation: {
      title: "Talking about a close friend",
      lines: [
        { speaker: "A", latin: "Shkun hada f ttsawira?", english: "Who is this in the photo?" },
        { speaker: "B", latin: "Hada sahbi, 3reftu mnin sghar", english: "That's my friend, I've known him since we were kids" },
        { speaker: "A", latin: "Wach mazal katkhrjou bzaf?", english: "Do you still go out a lot?" },
        { speaker: "B", latin: "Ah, kankhrjou koll simana", english: "Yes, we go out every week" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Sa7ab\" means:", options: ["My friend (singular)", "Friends (plural)", "My family", "My colleagues"], answerIndex: 1, explanation: "\"Sa7ab\" is the plural of \"friend\"." },
      { type: "multiple-choice", question: "\"Kankhrjou\" means:", options: ["We stay home", "We go out", "We work", "We study"], answerIndex: 1, explanation: "\"Kankhrjou\" means \"we go out\", from the verb \"khrj\" (to go out)." },
      { type: "multiple-choice", question: "\"3reftu mnin sghar\" means:", options: ["I just met him", "I've known him since we were kids", "I don't know him well", "He's my brother"], answerIndex: 1, explanation: "\"Mnin sghar\" means \"since (we were) small/young\"." }
    ]
  },

  // ============================================================
  // LESSON 30 - TALKING ABOUT FAMILY (A2)
  // ============================================================
  "talking-about-family": {
    id: "talking-about-family",
    level: "A2",
    number: 10,
    title: "Talking About Family",
    subtitle: "Marital status, kids, and deeper family conversation",
    intro: `Goes beyond the "Family" lesson in A1 (which covered naming relatives) to
      cover marital status and children, common follow-up questions in Moroccan
      small talk.`,
    keyPoints: [],
    vocab: [
      { latin: "Mzewwej", latinAlt: "Mzewwej", english: "Married (masc.)", pronunciation: "mzeu-wej", example: { latin: "Wach nta mzewweج?", english: "Are you married?" } },
      { latin: "Mzewwja", latinAlt: "", english: "Married (fem.)", pronunciation: "mzeu-wja", example: null },
      { latin: "3azeb", latinAlt: "3azba", english: "Single (m. / f.)", pronunciation: "3a-zeb", example: null },
      { latin: "Wladi", latinAlt: "", english: "My kids", pronunciation: "wla-dee", example: { latin: "3ndi jouj dyal wladi", english: "I have two kids" } },
      { latin: "Mra dyali", latinAlt: "Zawja dyali", english: "My wife", pronunciation: "mra dya-lee", example: null },
      { latin: "Rajl dyali", latinAlt: "Zawj dyali", english: "My husband", pronunciation: "razhl dya-lee", example: null }
    ],
    phrases: [
      { latin: "Wach nta mzewweج?", english: "Are you married?", note: "Common (and expected) small-talk question in Morocco." },
      { latin: "3ndi jouj dyal wladi", english: "I have two kids", note: "Combine with \"Numbers\" for the count." },
      { latin: "Mazal 3azeb", english: "Still single", note: "A casual way to answer the marital status question." }
    ],
    conversation: {
      title: "Family small talk",
      lines: [
        { speaker: "A", latin: "Wach nta mzewweج?", english: "Are you married?" },
        { speaker: "B", latin: "Ah, w 3ndi jouj dyal wladi", english: "Yes, and I have two kids" },
        { speaker: "A", latin: "Mzyan! W nta shhal 3ndhom dyal l3am?", english: "Nice! And how old are they?" },
        { speaker: "B", latin: "Lkbir 3ndu 3ashra snin", english: "The oldest is ten years old" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Mzewwej\" describes someone who is:", options: ["Single", "Married", "Divorced", "Widowed"], answerIndex: 1, explanation: "\"Mzewwej\" (masc.) means \"married\"; \"Mzewwja\" is the feminine form." },
      { type: "multiple-choice", question: "\"Wladi\" means:", options: ["My parents", "My kids", "My siblings", "My cousins"], answerIndex: 1, explanation: "\"Wladi\" means \"my children/kids\"." },
      { type: "multiple-choice", question: "\"3azeb\" describes:", options: ["A married man", "A single man", "A married woman", "A widower"], answerIndex: 1, explanation: "\"3azeb\" (masc.) / \"3azba\" (fem.) means \"single\"." }
    ]
  },

  // ============================================================
  // LESSON 31 - SHOPPING CONVERSATIONS
  // ============================================================
  "shopping-conversations": {
    id: "shopping-conversations",
    level: "A2",
    number: 11,
    title: "Shopping Conversations",
    subtitle: "Discounts, receipts, and returning an item",
    intro: `Builds on the A1 "Shopping" lesson with vocabulary for more involved
      shopping situations: discounts, receipts, and exchanges.`,
    keyPoints: [],
    vocab: [
      { latin: "Ta3rifa", latinAlt: "Soldes", english: "Discount / promotion", pronunciation: "ta-3ree-fa", example: { latin: "Wach 3andkom ta3rifa?", english: "Do you have a discount?" } },
      { latin: "Fatura", latinAlt: "", english: "Receipt", pronunciation: "fa-too-ra", example: { latin: "3tini lfatura 3afak", english: "Give me the receipt please" } },
      { latin: "Nbeddel", latinAlt: "", english: "I exchange / I change", pronunciation: "n-bed-del", example: { latin: "Momkin nbeddel hadi?", english: "Can I exchange this?" } },
      { latin: "Damana", latinAlt: "", english: "Warranty", pronunciation: "da-ma-na", example: null },
      { latin: "Kadeau", latinAlt: "Hdiya", english: "Gift", pronunciation: "ka-doh", example: null }
    ],
    phrases: [
      { latin: "Wach 3andkom ta3rifa?", english: "Do you have a discount?", note: "Worth asking before paying full price." },
      { latin: "Momkin nbeddel hadi?", english: "Can I exchange this?", note: "Keep the receipt handy, often required." },
      { latin: "3tini lfatura 3afak", english: "Give me the receipt please", note: "Useful for warranties or returns." }
    ],
    conversation: {
      title: "Returning an item",
      lines: [
        { speaker: "A", latin: "Salam, bghit nbeddel had lqamija", english: "Hello, I want to exchange this shirt" },
        { speaker: "B", latin: "Wach 3andek lfatura?", english: "Do you have the receipt?" },
        { speaker: "A", latin: "Ah, ha hiya", english: "Yes, here it is" },
        { speaker: "B", latin: "Mzyan, bghiti taille akhra wella lawn akhor?", english: "Great, do you want a different size or color?" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Fatura\" means:", options: ["Discount", "Receipt", "Gift", "Warranty"], answerIndex: 1, explanation: "\"Fatura\" means \"receipt\" (or invoice)." },
      { type: "multiple-choice", question: "\"Nbeddel\" means:", options: ["I buy", "I exchange", "I pay", "I try on"], answerIndex: 1, explanation: "\"Nbeddel\" means \"I exchange/change\"." },
      { type: "multiple-choice", question: "\"Ta3rifa\" refers to:", options: ["A receipt", "A discount/promotion", "A size", "A gift"], answerIndex: 1, explanation: "\"Ta3rifa\" refers to a discount or promotion." }
    ]
  },

  // ============================================================
  // LESSON 32 - TRAVEL
  // ============================================================
  "travel": {
    id: "travel",
    level: "A2",
    number: 12,
    title: "Travel",
    subtitle: "Airports, trains, and getting a ticket",
    intro: `Vocabulary for getting from one Moroccan city to another, buying a ticket,
      finding the right station, and talking about your trip.`,
    keyPoints: [],
    vocab: [
      { latin: "Matar", latinAlt: "", english: "Airport", pronunciation: "ma-tar", example: { latin: "Ghadi lmatar bekri", english: "I'm going to the airport early" } },
      { latin: "Tayara", latinAlt: "", english: "Plane", pronunciation: "ta-ya-ra", example: null },
      { latin: "Tran", latinAlt: "Train", english: "Train", pronunciation: "trahn", example: null },
      { latin: "Hafila", latinAlt: "Autocar", english: "Bus / coach", pronunciation: "ha-fee-la", example: null },
      { latin: "Ma7atta", latinAlt: "Mahatta", english: "Station", pronunciation: "ma-hat-ta", example: { latin: "Fin lma7atta dyal ttran?", english: "Where's the train station?" } },
      { latin: "Tazkara", latinAlt: "", english: "Ticket", pronunciation: "taz-ka-ra", example: { latin: "Bghit tazkara lMarrakech", english: "I want a ticket to Marrakech" } },
      { latin: "Jawaz safar", latinAlt: "", english: "Passport", pronunciation: "ja-waz sa-far", example: null },
      { latin: "Bagaj", latinAlt: "", english: "Luggage", pronunciation: "ba-gazh", example: null }
    ],
    phrases: [
      { latin: "Fin lma7atta dyal ttran?", english: "Where's the train station?", note: "Swap \"ttran\" for \"lhafila\" to ask about the bus station instead." },
      { latin: "Shhal taman dyal tazkara?", english: "How much is the ticket?", note: "Combines with \"Numbers\" and \"Shhal?\" from earlier lessons." },
      { latin: "Ghadi nsafer l...", english: "I'm going to travel to...", note: "Follow with any city name." }
    ],
    conversation: {
      title: "Buying a train ticket",
      lines: [
        { speaker: "A", latin: "Salam, bghit tazkara lMarrakech 3afak", english: "Hello, I'd like a ticket to Marrakech please" },
        { speaker: "B", latin: "Wach dyal ghda wella lyoum?", english: "For tomorrow or today?" },
        { speaker: "A", latin: "Dyal ghda fessba7", english: "For tomorrow morning" },
        { speaker: "B", latin: "Wakha, hadi tazkartek, ttran ghadi ykhrej fessa3a tmnya", english: "Okay, here's your ticket, the train leaves at eight o'clock" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Ma7atta\" means:", options: ["Airport", "Station", "Ticket", "Luggage"], answerIndex: 1, explanation: "\"Ma7atta\" means \"station\" (train or bus)." },
      { type: "multiple-choice", question: "\"Jawaz safar\" means:", options: ["Ticket", "Luggage", "Passport", "Suitcase"], answerIndex: 2, explanation: "\"Jawaz safar\" literally means \"travel permit\", a passport." },
      { type: "multiple-choice", question: "\"Ghadi nsafer l...\" means:", options: ["I traveled to...", "I'm going to travel to...", "I want to buy a ticket", "Where is..."], answerIndex: 1, explanation: "\"Ghadi\" + present tense = future: \"I'm going to travel to...\"" }
    ]
  },

  // ============================================================
  // LESSON 33 - PROBLEMS AND EMERGENCIES
  // ============================================================
  "problems-and-emergencies": {
    id: "problems-and-emergencies",
    level: "A2",
    number: 13,
    title: "Problems and Emergencies",
    subtitle: "Asking for help when something goes wrong",
    intro: `Hopefully you won't need this lesson often, but knowing how to ask for help,
      describe a problem, or explain you're sick can matter a lot when you do.`,
    keyPoints: [],
    vocab: [
      { latin: "Mushkil", latinAlt: "Mushkila", english: "Problem", pronunciation: "moosh-keel", example: { latin: "3ndi mushkil bzaf", english: "I have a big problem" } },
      { latin: "3awenni", latinAlt: "", english: "Help me", pronunciation: "3a-wen-nee", example: { latin: "3awenni 3afak!", english: "Help me please!" } },
      { latin: "Bulisse", latinAlt: "", english: "Police", pronunciation: "boo-lees", example: null },
      { latin: "Tbib", latinAlt: "Tbiba", english: "Doctor (m. / f.)", pronunciation: "tbeeb", example: null },
      { latin: "Sbitar", latinAlt: "", english: "Hospital", pronunciation: "sbee-tar", example: null },
      { latin: "Ana mrid", latinAlt: "Ana mrida", english: "I'm sick (m. / f.)", pronunciation: "a-na mreed", example: null },
      { latin: "Is3af", latinAlt: "", english: "Ambulance / emergency aid", pronunciation: "ees-3af", example: { latin: "3ayet l is3af", english: "Call an ambulance" } }
    ],
    phrases: [
      { latin: "3awenni 3afak!", english: "Help me please!", note: "The single most important phrase in this lesson." },
      { latin: "3ndi mushkil bzaf", english: "I have a big problem", note: "A general way to signal something's wrong before explaining further." },
      { latin: "3ayet l is3af", english: "Call an ambulance", note: "Swap \"is3af\" for \"bulisse\" to ask for the police instead." }
    ],
    conversation: {
      title: "Asking for help",
      lines: [
        { speaker: "A", latin: "3awenni 3afak, 3ndi mushkil", english: "Help me please, I have a problem" },
        { speaker: "B", latin: "Ash 3ndek, wach nta labas?", english: "What's wrong, are you okay?" },
        { speaker: "A", latin: "La, ana mrid, khassni tbib", english: "No, I'm sick, I need a doctor" },
        { speaker: "B", latin: "Wakha, ghadi n3ayet l is3af daba", english: "Okay, I'll call an ambulance right now" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"3awenni\" means:", options: ["Thank you", "Help me", "Wait for me", "Follow me"], answerIndex: 1, explanation: "\"3awenni\" means \"help me\"." },
      { type: "multiple-choice", question: "\"Sbitar\" means:", options: ["Police station", "Pharmacy", "Hospital", "Ambulance"], answerIndex: 2, explanation: "\"Sbitar\" means \"hospital\"." },
      { type: "multiple-choice", question: "\"Ana mrid\" means:", options: ["I'm tired", "I'm sick", "I'm lost", "I'm scared"], answerIndex: 1, explanation: "\"Ana mrid\" (masc.) / \"Ana mrida\" (fem.) means \"I'm sick\"." }
    ]
  },

  // ============================================================
  // LESSON 34 - EXPRESSING OPINIONS
  // ============================================================
  "expressing-opinions": {
    id: "expressing-opinions",
    level: "A2",
    number: 14,
    title: "Expressing Opinions",
    subtitle: "Agreeing, disagreeing, and saying what you think",
    intro: `Simple ways to share your opinion, agree or disagree with someone, and say
      whether you like something, useful in almost any conversation.`,
    keyPoints: [],
    vocab: [
      { latin: "Ra2y", latinAlt: "Rai", english: "Opinion", pronunciation: "ra-ey", example: { latin: "Fra2yi...", english: "In my opinion..." } },
      { latin: "Kanwafe9", latinAlt: "", english: "I agree", pronunciation: "kan-wa-fe9", example: { latin: "Kanwafe9 m3ak", english: "I agree with you" } },
      { latin: "Ma kanwafe9sh", latinAlt: "", english: "I don't agree", pronunciation: "ma kan-wa-fe9sh", example: null },
      { latin: "3jebni", latinAlt: "", english: "I like it", pronunciation: "3jeb-nee", example: null },
      { latin: "Ma3jebnish", latinAlt: "", english: "I don't like it", pronunciation: "ma-3jeb-neesh", example: null },
      { latin: "Kanshuf bli...", latinAlt: "", english: "I think that...", pronunciation: "kan-shoof blee", example: null }
    ],
    phrases: [
      { latin: "Fra2yi...", english: "In my opinion...", note: "A natural way to open before sharing a view." },
      { latin: "Kanwafe9 m3ak", english: "I agree with you", note: "Use \"Ma kanwafe9sh m3ak\" to disagree instead." },
      { latin: "Machi ra2yi", english: "That's not my view", note: "A polite way to push back without being harsh." }
    ],
    conversation: {
      title: "Discussing a movie",
      lines: [
        { speaker: "A", latin: "Ash ra2yek fhad lfilm?", english: "What's your opinion on this movie?" },
        { speaker: "B", latin: "Fra2yi, kan mzyan bzaf, w nta?", english: "In my opinion, it was really good, and you?" },
        { speaker: "A", latin: "Ma kanwafe9sh m3ak, ma3jebnish", english: "I don't agree with you, I didn't like it" },
        { speaker: "B", latin: "Wakha, koll wahed w ra2yu", english: "Okay, to each their own" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Kanwafe9\" means:", options: ["I disagree", "I agree", "I don't know", "I like it"], answerIndex: 1, explanation: "\"Kanwafe9\" means \"I agree\"." },
      { type: "multiple-choice", question: "\"Fra2yi...\" means:", options: ["In your opinion...", "In my opinion...", "I agree...", "By the way..."], answerIndex: 1, explanation: "\"Fra2yi\" combines \"in\" + \"my opinion\"." },
      { type: "multiple-choice", question: "\"Ma3jebnish\" means:", options: ["I like it", "I don't like it", "I don't know it", "I agree with it"], answerIndex: 1, explanation: "The \"ma-...-sh\" pattern negates \"3jebni\" (I like it) into \"I don't like it\"." }
    ]
  },

  // ============================================================
  // LESSON 35 - MORE NATURAL MOROCCAN EXPRESSIONS
  // ============================================================
  "natural-expressions": {
    id: "natural-expressions",
    level: "A2",
    number: 15,
    title: "More Natural Moroccan Expressions",
    subtitle: "The small filler words that make you sound like a local",
    intro: `These words don't always translate cleanly, but Moroccans use them
      constantly, in almost every conversation. Sprinkling them in naturally is one
      of the fastest ways to sound less like a textbook and more like a local.`,
    keyPoints: [],
    vocab: [
      { latin: "Waqila", latinAlt: "", english: "Maybe / perhaps", pronunciation: "wa-9ee-la", example: null },
      { latin: "Yallah", latinAlt: "", english: "Come on / let's go", pronunciation: "ya-llah", example: { latin: "Yallah, nemshiw!", english: "Come on, let's go!" } },
      { latin: "Nchallah", latinAlt: "Inshallah", english: "God willing", pronunciation: "n-shal-lah", example: { latin: "Nchallah ghadi ykun mzyan", english: "God willing it'll be fine" } },
      { latin: "Hamdullah", latinAlt: "Lhamdulillah", english: "Thank God", pronunciation: "ham-doo-lah", example: null },
      { latin: "Wllah", latinAlt: "Wallah", english: "I swear / really", pronunciation: "wl-lah", example: { latin: "Wllah ma3reftsh", english: "I swear I didn't know" } },
      { latin: "Maskin", latinAlt: "Maskina", english: "Poor thing (m. / f.)", pronunciation: "mas-keen", example: null }
    ],
    phrases: [
      { latin: "Yallah, nemshiw!", english: "Come on, let's go!", note: "One of the most-used words in everyday Darija." },
      { latin: "Nchallah ghadi ykun mzyan", english: "God willing it'll be fine", note: "Used constantly when talking about future plans, regardless of religiosity." },
      { latin: "Wllah ma3reftsh", english: "I swear I didn't know", note: "\"Wllah\" adds emphasis, similar to \"I swear\" or \"honestly\" in English." }
    ],
    conversation: {
      title: "A casual chat sprinkled with fillers",
      lines: [
        { speaker: "A", latin: "Wach ghadi tji lhafla lyoum flil?", english: "Are you coming to the party tonight?" },
        { speaker: "B", latin: "Waqila, ma3reftsh mazal", english: "Maybe, I don't know yet" },
        { speaker: "A", latin: "Yallah aji, ghadi ykun zwin", english: "Come on, come, it's going to be nice" },
        { speaker: "B", latin: "Wakha, nchallah nji", english: "Okay, God willing I'll come" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Yallah\" is used to mean:", options: ["Goodbye", "Come on / let's go", "Thank you", "Sorry"], answerIndex: 1, explanation: "\"Yallah\" is an all-purpose \"come on\" / \"let's go\"." },
      { type: "multiple-choice", question: "\"Nchallah\" is used:", options: ["Only in religious contexts", "Whenever talking about future plans, regardless of religiosity", "Only to say goodbye", "Only when apologizing"], answerIndex: 1, explanation: "\"Nchallah\" is used constantly in everyday speech about the future, not only in religious contexts." },
      { type: "multiple-choice", question: "\"Maskin\" describes:", options: ["Someone lucky", "Someone you feel sorry for", "Someone angry", "Someone rich"], answerIndex: 1, explanation: "\"Maskin\" (masc.) / \"Maskina\" (fem.) means \"poor thing\", said with sympathy." }
    ]
  },

  // ============================================================
  // LESSON 36 - COMMON SLANG
  // ============================================================
  "common-slang": {
    id: "common-slang",
    level: "A2",
    number: 16,
    title: "Common Slang",
    subtitle: "Casual words you'll hear among friends",
    intro: `Slang dates faster than any other kind of vocabulary, and varies by city and
      generation, so treat these as widely-recognized rather than universal. They're
      safe to use with friends and people your own age, but a bit too casual for, say,
      an older stranger or a formal setting.`,
    keyPoints: [],
    vocab: [
      { latin: "Zwin", latinAlt: "Zwina", english: "Cool / nice (m. / f.)", pronunciation: "zween", example: { latin: "Had lfilm zwin bzaf", english: "This movie is really cool" } },
      { latin: "Tbarkellah", latinAlt: "", english: "Wow / impressive", pronunciation: "tba-rek-lah", example: null },
      { latin: "Wesh", latinAlt: "", english: "Hey / yo (casual greeting)", pronunciation: "wesh", example: { latin: "Wesh, labas?", english: "Hey, how's it going?" } },
      { latin: "Safi", latinAlt: "", english: "Enough / that's it / okay done", pronunciation: "sa-fee", example: { latin: "Safi, khlas", english: "That's enough, it's done" } },
      { latin: "Khayb", latinAlt: "Khayba", english: "Bad / lame (m. / f.)", pronunciation: "khaib", example: null }
    ],
    phrases: [
      { latin: "Wesh, labas?", english: "Hey, how's it going?", note: "More casual than \"Salam\", used between friends." },
      { latin: "Safi, khlas", english: "That's enough, it's over/done", note: "Used to end a topic or discussion." },
      { latin: "Had lfilm zwin bzaf", english: "This movie is really cool", note: "\"Zwin/Zwina\" works for people, places, and things alike." }
    ],
    conversation: {
      title: "A slangy exchange between friends",
      lines: [
        { speaker: "A", latin: "Wesh, ash khbarek?", english: "Yo, what's up?" },
        { speaker: "B", latin: "Labas, ghadi ndir shi 7aja zwina lyoum", english: "I'm good, I'm going to do something cool today" },
        { speaker: "A", latin: "Tbarkellah! Ash ghadi ddir?", english: "Wow! What are you going to do?" },
        { speaker: "B", latin: "Mazal ma qrrertsh, safi nshufu", english: "I haven't decided yet, alright we'll see" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Zwin\" means:", options: ["Bad", "Cool / nice", "Boring", "Expensive"], answerIndex: 1, explanation: "\"Zwin\" (masc.) / \"Zwina\" (fem.) means \"cool/nice\", for people, places, or things." },
      { type: "multiple-choice", question: "\"Safi\" is used to mean:", options: ["Please", "Enough / that's it", "Never", "Maybe"], answerIndex: 1, explanation: "\"Safi\" signals something is finished or enough." },
      { type: "multiple-choice", question: "\"Wesh\" is:", options: ["A formal greeting", "A casual greeting used with friends", "A question about price", "A way to say goodbye"], answerIndex: 1, explanation: "\"Wesh\" is a casual \"hey/yo\", more informal than \"Salam\"." }
    ]
  },

  // ============================================================
  // LESSON 37 - REAL MOROCCAN CONVERSATIONS
  // ============================================================
  "real-conversations": {
    id: "real-conversations",
    level: "A2",
    number: 17,
    title: "Real Moroccan Conversations",
    subtitle: "A longer, natural conversation pulling everything together",
    intro: `A capstone lesson: one longer, more natural conversation between two friends
      that weaves together greetings, tenses, everyday expressions, and slang from
      earlier lessons, plus a handful of connector words that make speech flow.`,
    keyPoints: [],
    vocab: [
      { latin: "Bref", latinAlt: "", english: "Anyway / in short", pronunciation: "bref", example: null },
      { latin: "Bhal hakka", latinAlt: "", english: "Like this / so", pronunciation: "b-hal ha-ka", example: null },
      { latin: "Walakin", latinAlt: "", english: "But / however", pronunciation: "wa-la-keen", example: null },
      { latin: "Ay ay", latinAlt: "", english: "Yeah yeah (filler agreement)", pronunciation: "eye eye", example: null }
    ],
    phrases: [
      { latin: "Bref, safi", english: "Anyway, that's it", note: "A common way to wrap up a story or tangent." },
      { latin: "Walakin mashi mushkil", english: "But it's not a problem", note: "Combines \"walakin\" with the negation pattern from earlier lessons." },
      { latin: "Bhal hakka daba", english: "That's how it is now", note: "A shrugging, resigned kind of phrase." }
    ],
    conversation: {
      title: "Catching up after a while",
      lines: [
        { speaker: "A", latin: "Ahlan! Chhal hadi ma tshufnash!", english: "Hey! It's been so long since we've seen each other!" },
        { speaker: "B", latin: "Ay ay, wllah bzaf. Kifash kadir?", english: "Yeah yeah, honestly it's been a while. How are you doing?" },
        { speaker: "A", latin: "Labas lhamdullah. Kankhdem bzaf daba, walakin mashi mushkil", english: "I'm good, thank God. I'm working a lot now, but it's not a problem" },
        { speaker: "B", latin: "Mzyan bhal hakka. W ghadi ddir chi haja had ssimana?", english: "Good, that's how it is. Are you doing anything this week?" },
        { speaker: "A", latin: "Waqila ghadi nemshi lqahwa ma3a chi sa7ab, bref ghadi nshuf", english: "Maybe I'll go to a café with some friends, anyway I'll see" },
        { speaker: "B", latin: "Yallah, 3ayet lia nchallah!", english: "Alright, call me, God willing!" }
      ]
    },
    quiz: [
      { type: "multiple-choice", question: "\"Bref\" is used to mean:", options: ["Hello", "Anyway / in short", "Goodbye", "Please"], answerIndex: 1, explanation: "\"Bref\" (a French loanword) signals wrapping up or summarizing." },
      { type: "multiple-choice", question: "\"Walakin\" means:", options: ["And", "Because", "But / however", "So"], answerIndex: 2, explanation: "\"Walakin\" introduces a contrast, like \"but\" in English." },
      { type: "multiple-choice", question: "In the conversation, what does \"Kankhdem bzaf daba\" mean?", options: ["I worked a lot before", "I'm working a lot now", "I will work a lot", "I don't work much"], answerIndex: 1, explanation: "\"Kan-\" + verb is present tense: \"I'm working a lot now\"." }
    ]
  }

};

// Order lessons appear within each level on the homepage / course map.
// Lessons not yet written are listed as "locked" placeholders so the
// course map is honest about what's actually available right now.
const LEVELS = [
  {
    level: "A1",
    label: "Beginner",
    lessons: [
      "how-to-read",
      "greetings",
      "introducing-yourself",
      "how-are-you",
      "everyday-expressions",
      "numbers",
      "family",
      "food-and-drinks",
      "days-and-time",
      "at-a-cafe",
      "shopping",
      "asking-name",
      "where-from",
      "at-a-restaurant",
      "at-the-market",
      "taking-a-taxi",
      "directions",
      "at-home",
      "daily-activities",
      "basic-questions"
    ]
  },
  {
    level: "A2",
    label: "Elementary",
    lessons: [
      "verbs-basics",
      "present-tense",
      "past-tense",
      "future-tense",
      "talking-about-your-day",
      "making-plans",
      "talking-about-work",
      "talking-about-school",
      "talking-about-friends",
      "talking-about-family",
      "shopping-conversations",
      "travel",
      "problems-and-emergencies",
      "expressing-opinions",
      "natural-expressions",
      "common-slang",
      "real-conversations"
    ]
  }
];