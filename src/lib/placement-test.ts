export type PlacementQuestion = {
  id: number;
  level: "A0-A1" | "A2" | "B1" | "B2" | "C1";
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
};

export const placementQuestions: PlacementQuestion[] = [
  // A0-A1 Level (Questions 1-5)
  {
    id: 1,
    level: "A0-A1",
    question: "V trgovini vidiš napis »AKCIJA – 50 %«. Kaj to pomeni?",
    options: [
      { id: "a", text: "V trgovini je nova blagajna." },
      { id: "b", text: "Izdelek je cenejši." },
      { id: "c", text: "Izdelek je dražji." },
    ],
    correctAnswer: "b",
  },
  {
    id: 2,
    level: "A0-A1",
    question: "Pazi! Na tleh je napis: »MOKRA TLA«. Kaj to pomeni?",
    options: [
      { id: "a", text: "Moramo počakati v vrsti." },
      { id: "b", text: "Moramo obuti copate." },
      { id: "c", text: "Moramo biti previdni, ker je spolzko." },
    ],
    correctAnswer: "c",
  },
  {
    id: 3,
    level: "A0-A1",
    question: "Vprašanje v dialogu: – Od kod si? – Sem iz …",
    options: [
      { id: "a", text: "jesti" },
      { id: "b", text: "Ljubljane" },
      { id: "c", text: "knjigi" },
    ],
    correctAnswer: "b",
  },
  {
    id: 4,
    level: "A0-A1",
    question:
      "Na avtobusu slišiš: »Naslednja postaja – Glavna postaja.« Kaj to pomeni?",
    options: [
      { id: "a", text: "Avtobus se bo ustavil pri trgovini." },
      { id: "b", text: "Avtobus se bo ustavil pri glavni postaji." },
      { id: "c", text: "Avtobus ne bo več ustavljal." },
    ],
    correctAnswer: "b",
  },
  {
    id: 5,
    level: "A0-A1",
    question: "Na vratih piše: »ODPRTO.« Kaj to pomeni?",
    options: [
      { id: "a", text: "Vrata so zaprta." },
      { id: "b", text: "Trgovina je odprta." },
      { id: "c", text: "Trgovina je zaprta." },
    ],
    correctAnswer: "b",
  },

  // A2 Level (Questions 6-10)
  {
    id: 6,
    level: "A2",
    question:
      "Preberi oglas:\n»Oddam sobo v centru mesta. Cena: 250 €. Kontakt: 040 123 456.«\nKaj lahko iz oglasa izvemo?",
    options: [
      { id: "a", text: "Prodajajo stanovanje." },
      { id: "b", text: "Iščejo sostanovalca." },
      { id: "c", text: "Oddajajo sobo." },
    ],
    correctAnswer: "c",
  },
  {
    id: 7,
    level: "A2",
    question:
      "Preberi sporočilo:\n»Živjo! Danes ne morem na kavo, ker imam izpit. Se vidiva jutri?«\nKaj bo oseba naredila danes?",
    options: [
      { id: "a", text: "Pila bo kavo." },
      { id: "b", text: "Pisala bo izpit." },
      { id: "c", text: "Šla bo v trgovino." },
    ],
    correctAnswer: "b",
  },
  {
    id: 8,
    level: "A2",
    question: "Izberi pravilno obliko:\nVčeraj ___ v kino.",
    options: [
      { id: "a", text: "grem" },
      { id: "b", text: "šel" },
      { id: "c", text: "sem šel" },
    ],
    correctAnswer: "c",
  },
  {
    id: 9,
    level: "A2",
    question:
      "Preberi SMS:\n»Živjo! Avtobus ima zamudo 10 minut. Se vidiva malo kasneje.«\nKaj se bo zgodilo?",
    options: [
      { id: "a", text: "Avtobus bo prišel prej." },
      { id: "b", text: "Avtobus bo prišel kasneje." },
      { id: "c", text: "Avtobus ne bo prišel." },
    ],
    correctAnswer: "b",
  },
  {
    id: 10,
    level: "A2",
    question:
      "Izberi pravilno možnost:\nVčeraj smo ___ nogomet v parku.",
    options: [
      { id: "a", text: "igrali" },
      { id: "b", text: "igramo" },
      { id: "c", text: "bomo igrali" },
    ],
    correctAnswer: "a",
  },

  // B1 Level (Questions 11-15)
  {
    id: 11,
    level: "B1",
    question:
      "Preberi novico:\n»Včeraj je v Ljubljani potekal maraton. Udeležilo se ga je več kot 5000 tekačev iz različnih držav.«\nKaj pove besedilo?",
    options: [
      { id: "a", text: "Maraton je bil včeraj v Mariboru." },
      { id: "b", text: "Na maratonu je teklo več tisoč ljudi." },
      { id: "c", text: "Maraton bo naslednje leto." },
    ],
    correctAnswer: "b",
  },
  {
    id: 12,
    level: "B1",
    question:
      "Preberi stavek:\n»Po raziskavi Slovenci največ časa porabijo za delo, nato za gledanje televizije. Na tretjem mestu je druženje s prijatelji.«\nKaj je na drugem mestu?",
    options: [
      { id: "a", text: "Branje knjig." },
      { id: "b", text: "Gledanje televizije." },
      { id: "c", text: "Delo na vrtu." },
    ],
    correctAnswer: "b",
  },
  {
    id: 13,
    level: "B1",
    question:
      "Preberi besedilo:\n»V nedeljo bo v mestu prireditev. Organizatorji priporočajo, da ljudje pridejo peš ali z avtobusom, ker bo promet zaprt.«\nKaj svetujejo organizatorji?",
    options: [
      { id: "a", text: "Naj ljudje pridejo z avtom." },
      { id: "b", text: "Naj ljudje pridejo peš ali z avtobusom." },
      { id: "c", text: "Naj ljudje ostanejo doma." },
    ],
    correctAnswer: "b",
  },
  {
    id: 14,
    level: "B1",
    question:
      "Preberi novico:\n»Ta konec tedna bodo v mestu praznovali občinski praznik. Na trgu bodo koncerti in stojnice.«\nKaj bo v mestu?",
    options: [
      { id: "a", text: "Predavanja na univerzi." },
      { id: "b", text: "Praznovanje s koncerti in stojnicami." },
      { id: "c", text: "Nogometna tekma." },
    ],
    correctAnswer: "b",
  },
  {
    id: 15,
    level: "B1",
    question:
      "Preberi članek:\n»V zadnjem letu se je število turistov v Sloveniji povečalo za 15 %. Največ jih prihaja iz Nemčije in Italije.«\nKaj pravi besedilo?",
    options: [
      { id: "a", text: "Turistov je manj." },
      { id: "b", text: "Turistov je več." },
      { id: "c", text: "Turisti prihajajo samo iz Francije." },
    ],
    correctAnswer: "b",
  },

  // B2 Level (Questions 16-20)
  {
    id: 16,
    level: "B2",
    question:
      "Preberi odlomek:\n»V zadnjih letih je število kolesarjev v mestih naraslo. To je posledica novih kolesarskih poti in večje skrbi za okolje.«\nZakaj je več kolesarjev v mestih?",
    options: [
      { id: "a", text: "Ker je več novih cest za avtomobile." },
      { id: "b", text: "Ker je več kolesarskih poti in skrbi za okolje." },
      { id: "c", text: "Ker so kolesa dražja." },
    ],
    correctAnswer: "b",
  },
  {
    id: 17,
    level: "B2",
    question:
      "Preberi odlomek:\n»Raziskava je pokazala, da večina mladih uporablja socialna omrežja za zabavo, manj pa za izobraževanje.«\nKaj je glavno sporočilo raziskave?",
    options: [
      { id: "a", text: "Mladi uporabljajo omrežja predvsem za učenje." },
      { id: "b", text: "Mladi uporabljajo omrežja predvsem za zabavo." },
      { id: "c", text: "Mladi sploh ne uporabljajo omrežij." },
    ],
    correctAnswer: "b",
  },
  {
    id: 18,
    level: "B2",
    question:
      "Preberi odlomek in dopolni:\n»To je moj prijatelj Luka. Poznam ___ že dolgo, vsak teden igrava košarko skupaj.«\nKatero besedo vstaviš?",
    options: [
      { id: "a", text: "Ga" },
      { id: "b", text: "Njega" },
      { id: "c", text: "On" },
    ],
    correctAnswer: "a",
  },
  {
    id: 19,
    level: "B2",
    question:
      "Preberi odlomek:\n»V Sloveniji se vse več ljudi odloča za delo od doma. Ta način prinaša večjo fleksibilnost, hkrati pa tudi izzive, kot so pomanjkanje stika s sodelavci in težave pri organizaciji časa.«\nKatera je ena od slabosti dela od doma?",
    options: [
      { id: "a", text: "Večja fleksibilnost." },
      { id: "b", text: "Manj stika s sodelavci." },
      { id: "c", text: "Višja plača." },
    ],
    correctAnswer: "b",
  },
  {
    id: 20,
    level: "B2",
    question:
      "Preberi odlomek:\n»V času epidemije so številna podjetja začela uporabljati spletne sestanke. To je omogočilo nadaljevanje dela, a prineslo tudi večjo utrujenost zaradi dolgotrajnega gledanja v zaslon.«\nKaj je ena od posledic spletnih sestankov?",
    options: [
      { id: "a", text: "Večja fizična aktivnost." },
      { id: "b", text: "Večja utrujenost." },
      { id: "c", text: "Več druženja v živo." },
    ],
    correctAnswer: "b",
  },

  // C1 Level (Questions 21-25)
  {
    id: 21,
    level: "C1",
    question:
      "Preberi odlomek:\n»Nekateri menijo, da digitalizacija prinaša predvsem prednosti, kot so hitrejše informacije in boljša povezanost. Drugi pa opozarjajo na nevarnosti, kot so izguba zasebnosti in odvisnost od tehnologije.«\nKakšno je glavno sporočilo?",
    options: [
      { id: "a", text: "Digitalizacija ima samo pozitivne učinke." },
      { id: "b", text: "Digitalizacija ima tako prednosti kot slabosti." },
      { id: "c", text: "Digitalizacija nima vpliva na ljudi." },
    ],
    correctAnswer: "b",
  },
  {
    id: 22,
    level: "C1",
    question:
      "Preberi odlomek:\n»V filozofski razpravi o svobodi avtor poudarja, da svoboda ni le odsotnost omejitev, ampak tudi možnost aktivnega sodelovanja v družbi. Svoboda torej pomeni odgovornost.«\nKako avtor razume svobodo?",
    options: [
      { id: "a", text: "Kot odsotnost odgovornosti." },
      { id: "b", text: "Kot odgovornost in sodelovanje." },
      { id: "c", text: "Kot popolno pomanjkanje pravil." },
    ],
    correctAnswer: "b",
  },
  {
    id: 23,
    level: "C1",
    question:
      "Slovnica – izberi pravilno možnost:\nNa izpit se nisi pripravil. To bi ___ storiti prej!",
    options: [
      { id: "a", text: "moral" },
      { id: "b", text: "mogel" },
      { id: "c", text: "morem" },
    ],
    correctAnswer: "a",
  },
  {
    id: 24,
    level: "C1",
    question:
      "Preberi odlomek:\n»Eden od izzivov sodobne družbe je ohranjanje kulturne raznolikosti ob hkratni globalizaciji. Kritiki opozarjajo, da globalizacija vodi v poenotenje kultur, medtem ko zagovorniki trdijo, da omogoča širjenje kulturnih vplivov.«\nKaj je dilema, ki jo besedilo opisuje?",
    options: [
      { id: "a", text: "Ali globalizacija uničuje ali bogati kulture." },
      { id: "b", text: "Ali globalizacija povečuje cene izdelkov." },
      { id: "c", text: "Ali globalizacija zmanjšuje število potovanj." },
    ],
    correctAnswer: "a",
  },
  {
    id: 25,
    level: "C1",
    question:
      "Slovnica – izberi pravilno možnost:\nDopolni poved:\n»To je raziskovalec, ___ knjige o jeziku so prevedene v več kot deset tujih jezikov.«",
    options: [
      { id: "a", text: "ki" },
      { id: "b", text: "kateremu" },
      { id: "c", text: "katerega" },
    ],
    correctAnswer: "c",
  },
];

// Level groups for easier access
export const levelGroups = {
  "A0-A1": placementQuestions.slice(0, 5),
  A2: placementQuestions.slice(5, 10),
  B1: placementQuestions.slice(10, 15),
  B2: placementQuestions.slice(15, 20),
  C1: placementQuestions.slice(20, 25),
};

export const levelOrder = ["A0-A1", "A2", "B1", "B2", "C1"] as const;

export type LanguageLevel = (typeof levelOrder)[number];

// Mapping for final level assignment
export const levelMapping: Record<LanguageLevel, string> = {
  "A0-A1": "A1",
  A2: "A2",
  B1: "B1",
  B2: "B2",
  C1: "C1",
};
