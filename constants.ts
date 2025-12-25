import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'lapset',
    label: 'Lapset & Sankarit',
    icon: '🎈',
    words: [
      // Hahmot & Sankarit
      'Harry Potter', 'Super Mario', 'Pikachu', 'Elsa (Frozen)', 'Risto Räppääjä', 
      'Muumipeikko', 'Hämähäkkimies', 'Pipsa Possu', 'Ryhmä Hau', 'Joulupukki', 
      'Hammaskeiju', 'Minions (Kätyrit)', 'Batman', 'Paavo Pesusieni',

      // Lelut & Tekeminen
      'Lego', 'Trampoliini', 'Lima (Slime)', 'Skeittilauta', 'Polkupyörä', 
      'Pleikkari', 'Jalkapallo', 'Barbie', 'Pehmolelu', 'Vesipyssy', 
      'Piiloleikki', 'Hippaleikki',

      // Herkut & Ruoka
      'Jäätelö', 'Karkkipussi', 'Pannukakku', 'Popcorn', 'Tikkari', 
      'Limsa', 'Hampurilainen', 'Ranskalaiset',

      // Eläimet & Olentot (Helpommat)
      'Yksisarvinen', 'Dinosaurus', 'Lohikäärme', 'Kummitus', 'Hirviö', 
      'Kissanpentu', 'Poliisikoira',

      // Paikat & Muut
      'Koulu', 'Päiväkoti', 'Huvipuisto', 'Uimahalli', 'Synttärit', 
      'Jouluaatto', 'Kirjasto', 'McDonald\'s'
    ]
  },
  {
    id: 'julkkikset',
    label: 'Julkkikset & Hahmot',
    icon: '🌟',
    words: [
      // Suomalaiset
      'Urho Kekkonen', 'Matti Nykänen', 'Kimi Räikkönen', 'Käärijä', 'Sanna Marin', 
      'Vesa-Matti Loiri', 'Andy McCoy', 'Cheek', 'Teemu Selänne', 'Jaajo Linnonmaa', 
      'Aira Samulin', 'Timo Jutila', 'Isac Elliot', 'Sauli Niinistö', 'Remu Aaltonen',
      // Ulkomaalaiset / Hahmot
      'Donald Trump', 'Vladimir Putin', 'Elon Musk', 'Taylor Swift', 'Kanye West', 
      'Kim Kardashian', 'Cristiano Ronaldo', 'Lionel Messi', 'Michael Jackson', 
      'Elvis Presley', 'Marilyn Monroe', 'Gordon Ramsay', 'Greta Thunberg', 
      'Mark Zuckerberg', 'The Rock (Dwayne Johnson)', 'Joulupukki', 'Jeesus', 'Muumipeikko'
    ]
  },
  {
    id: 'ruoka_juoma',
    label: 'Ruoka & Juoma',
    icon: '🍕',
    words: [
      'Ananas-pizza', 'Mämmi', 'Surströmming (Hapansilakka)', 'Kaviaari', 
      'Pikakahvi', 'Energiajuoma', 'Kebab ranskalaisilla', 'Aurajuusto', 
      'Maksalaatikko', 'Viherpirtelö', 'Samppanja', 'Koskenkorva', 'Jaloviina', 
      'Sushi', 'Verilettu', 'Hernekeitto', 'Kalapuikko', 'Kauramaito', 
      'Avokado', 'Chili', 'Vahva minttuviina'
    ]
  },
  {
    id: 'paikat',
    label: 'Paikat & Sijainnit',
    icon: '📍',
    words: [
      'Ikea', 'Sauna', 'Disneyland', 'Tsernobyl', 'Työkkäri (TE-toimisto)', 
      'Vankila', 'Hautausmaa', 'Kuntosali', 'Alko', 'Ruotsinlaiva', 
      'Avaruusasema', 'Autiosaari', 'Yleinen käymälä', 'Hammaslääkäri', 
      'Mummola', 'Festivaalit', 'Lentokentän turvatarkastus', 'Hissi', 'Ahvenanmaa'
    ]
  },
  {
    id: 'elaimet',
    label: 'Eläimet (Oudot)',
    icon: '🦄',
    words: [
      'Laiskiainen', 'Torakka', 'Kastemato', 'Yksisarvinen', 'Dinosaurus', 
      'Hyttynen', 'Punkki', 'Kultakala', 'Ihminen', 'Mammutti', 'Nokkaeläin', 
      'Lohikäärme', 'Rotta', 'Sika', 'Laama', 'Pingviini', 'Ampiainen'
    ]
  },
  {
    id: 'esineet',
    label: 'Esineet (Hankalat)',
    icon: '🪑',
    words: [
      'Käsiraudat', 'Teköhampaat', 'Peruukki', 'Vaippa', 'Bidee-suihku', 
      'Alkolukko', 'Raskaustesti', 'Selfie-tikku', 'Crocs-kengät', 'Kumivene', 
      'Moottorisaha', 'Navigaattori', 'Pelikonsoli', 'Hajuvesi', 'Ämpäri', 
      'Vessaharja', 'Kondomi', 'Tuttipullo'
    ]
  },
  {
    id: 'ammatit',
    label: 'Ammatit & Roolit',
    icon: '🎭',
    words: [
      'Tubettaja', 'OnlyFans-tekijä', 'Puhelinmyyjä', 'Pysäköinninvalvoja (Lappuliisa)', 
      'Salaliittoteoreetikko', 'Ninja', 'Merirosvo', 'Haudankaivaja', 'Gynekologi', 
      'Stand-up koomikko', 'Pappi', 'Strippari', 'Vakooja', 'Poliitikko', 
      'Roskakuski', 'Personal Trainer', 'Influensseri'
    ]
  },
  {
    id: 'tilanteet',
    label: 'Tilanteet & Tekeminen',
    icon: '😬',
    words: [
      'Krapula', 'Hississä pieraisu', 'Sokkotreffit', 'Avioero', 'Veronkierto', 
      'Synnytys', 'Tinder-match', 'Myötähäpeä', 'Jänistäminen', 'Huijaaminen', 
      'Lotossa voittaminen', 'Ruuhkassa istuminen', 'Jonottaminen', 'Saunominen'
    ]
  }
];