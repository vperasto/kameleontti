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
      'Hammaskeiju', 'Minions', 'Batman', 'Paavo Pesusieni', 'Sonic',

      // Lelut & Tekeminen
      'Lego', 'Trampoliini', 'Lima', 'Skeittilauta', 'Polkupyörä', 
      'Pleikkari', 'Jalkapallo', 'Barbie', 'Pehmolelu', 'Vesipyssy', 
      'Piiloleikki', 'Hippaleikki', 'Minecraft', 'Roblox', 'Keppihevonen',

      // Herkut & Ruoka
      'Jäätelö', 'Karkkipussi', 'Pannukakku', 'Popcorn', 'Tikkari', 
      'Limsa', 'Hampurilainen', 'Ranskalaiset', 'Kaakao',

      // Eläimet & Olentot
      'Yksisarvinen', 'Dinosaurus', 'Lohikäärme', 'Kummitus', 'Hirviö', 
      'Kissanpentu', 'Poliisikoira', 'Hai',

      // Paikat & Muut
      'Koulu', 'Päiväkoti', 'Huvipuisto', 'Uimahalli', 'Synttärit', 
      'Jouluaatto', 'Kirjasto', 'McDonald\'s', 'HopLop'
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
      'Alexander Stubb', 'Jare Tiihonen',
      
      // Ulkomaalaiset - Musiikki & Viihde
      'Madonna', 'Lady Gaga', 'Justin Bieber', 'Eminem', 'Snoop Dogg', 
      'Taylor Swift', 'Kanye West', 'Michael Jackson', 'Elvis Presley', 
      'Marilyn Monroe', 'The Rock', 'Kim Kardashian',
      
      // Ulkomaalaiset - Näyttelijät
      'Leonardo DiCaprio', 'Brad Pitt', 'Johnny Depp', 'Tom Cruise', 
      'Will Smith', 'Arnold Schwarzenegger',
      
      // Ulkomaalaiset - Valta & Vaikuttajat
      'Donald Trump', 'Vladimir Putin', 'Barack Obama', 'Elon Musk', 
      'Mark Zuckerberg', 'Steve Jobs', 'Bill Gates', 'Greta Thunberg',
      'Paavi', 'Dalai Lama', 'Kuningas Charles',
      
      // Urheilu
      'Cristiano Ronaldo', 'Lionel Messi', 'Usain Bolt', 'Mike Tyson',
      
      // Fiktiiviset / Muut
      'James Bond', 'Joulupukki', 'Jeesus', 'Muumipeikko', 'Barbie', 
      'Gordon Ramsay', 'MrBeast'
    ]
  },
  {
    id: 'ruoka_juoma',
    label: 'Ruoka & Juoma',
    icon: '🍕',
    words: [
      'Ananas-pizza', 'Mämmi', 'Hapansilakka', 'Kaviaari', 
      'Pikakahvi', 'Energiajuoma', 'Kebab', 'Aurajuusto', 
      'Maksalaatikko', 'Viherpirtelö', 'Samppanja', 'Koskenkorva', 'Jaloviina', 
      'Sushi', 'Verilettu', 'Hernekeitto', 'Kalapuikko', 'Kauramaito', 
      'Avokado', 'Chili', 'Minttuviina', 'Makkaraperunat', 'Vihreät kuulat', 'Salmiakki'
    ]
  },
  {
    id: 'paikat',
    label: 'Paikat & Sijainnit',
    icon: '📍',
    words: [
      'Ikea', 'Sauna', 'Disneyland', 'Tsernobyl', 'Työkkäri', 'Kela',
      'Vankila', 'Hautausmaa', 'Kuntosali', 'Alko', 'Ruotsinlaiva', 
      'Avaruusasema', 'Autiosaari', 'Bajamaja', 'Hammaslääkäri', 
      'Mummola', 'Festivaalit', 'Turvatarkastus', 'Hissi', 'Ahvenanmaa', 'Mökki'
    ]
  },
  {
    id: 'elaimet',
    label: 'Eläimet (Oudot)',
    icon: '🦄',
    words: [
      'Laiskiainen', 'Torakka', 'Kastemato', 'Yksisarvinen', 'Dinosaurus', 
      'Hyttynen', 'Punkki', 'Kultakala', 'Ihminen', 'Mammutti', 'Nokkaeläin', 
      'Lohikäärme', 'Rotta', 'Sika', 'Laama', 'Pingviini', 'Ampiainen', 'Luteet'
    ]
  },
  {
    id: 'esineet',
    label: 'Esineet (Hankalat)',
    icon: '🪑',
    words: [
      'Käsiraudat', 'Tekarit', 'Peruukki', 'Vaippa', 'Bidee-suihku', 
      'Alkolukko', 'Raskaustesti', 'Selfie-tikku', 'Crocsit', 'Kumivene', 
      'Moottorisaha', 'Navigaattori', 'Pelikonsoli', 'Hajuvesi', 'Ämpäri', 
      'Vessaharja', 'Kondomi', 'Tuttipullo', 'Sähköpotkulauta', 'Ilmakitara'
    ]
  },
  {
    id: 'ammatit',
    label: 'Ammatit & Roolit',
    icon: '🎭',
    words: [
      'Tubettaja', 'OnlyFans-malli', 'Puhelinmyyjä', 'Lappuliisa', 
      'Salaliittoteoreetikko', 'Ninja', 'Merirosvo', 'Haudankaivaja', 'Gynekologi', 
      'Stand-up koomikko', 'Pappi', 'Strippari', 'Vakooja', 'Poliitikko', 
      'Roskakuski', 'Personal Trainer', 'Influensseri', 'Tiktok-tähti'
    ]
  },
  {
    id: 'tilanteet',
    label: 'Tilanteet & Tekeminen',
    icon: '😬',
    words: [
      'Krapula', 'Hissipieru', 'Sokkotreffit', 'Avioero', 'Veronkierto', 
      'Synnytys', 'Tinder-match', 'Myötähäpeä', 'Pakit', 'Huijaaminen', 
      'Lottovoitto', 'Ruuhka', 'Jonottaminen', 'Saunominen', 
      'Morkkis', 'Talutushihna', 'Tatuoinnin ottaminen'
    ]
  }
];