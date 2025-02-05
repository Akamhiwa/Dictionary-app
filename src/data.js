

const data=[

  {

    word: 'candle',

    phonetic: '/ˈkændl̩/',

    phonetics: [

      { text: '/ˈkændl̩/', audio: '' },

      {

        text: '/ˈkændl̩/',

        audio: 

          'https://api.dictionaryapi.dev/media/pronunciations/en/candle-us.mp3',

        sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=1769329',

        license: {

          name: 'BY-SA 3.0',

          url: 'https://creativecommons.org/licenses/by-sa/3.0'

        }

      }

    ],

    meanings: [

      {

        partOfSpeech: 'noun',

        definitions: [

          {

            definition: 

              'A light source consisting of a wick embedded in a solid, flammable substance such as wax, tallow, or paraffin.',

            synonyms: [],

            antonyms: []

          },

          {

            definition: 

              'The protruding, removable portion of a filter, particularly a water filter.',

            synonyms: [],

            antonyms: []

          },

          {

            definition: 

              'A unit of luminous intensity, now replaced by the SI unit candela.',

            synonyms: [],

            antonyms: []

          },

          {

            definition: 

              'A fast-growing, light-colored, upward-growing shoot on a pine tree in the spring. As growth slows in summer, the shoot darkens and is no longer conspicuous.',

            synonyms: [],

            antonyms: []

          }

        ],

        synonyms: [],

        antonyms: []

      },

      {

        partOfSpeech: 'verb',

        definitions: [

          {

            definition: 

              'To observe the growth of an embryo inside (an egg), using a bright light source.',

            synonyms: [],

            antonyms: []

          },

          {

            definition: 

              'To dry greenware prior to beginning of the firing cycle, setting the kiln at 200° Celsius until all water is removed from the greenware.',

            synonyms: [],

            antonyms: []

          },

          {

            definition: 

              'To check an item (such as an envelope) by holding it between a light source and the eye.',

            synonyms: [],

            antonyms: []

          }

        ],

        synonyms: [],

        antonyms: []

      }

    ],

    license: {

      name: 'CC BY-SA 3.0',

      url: 'https://creativecommons.org/licenses/by-sa/3.0'

    },

    sourceUrls: [ 'https://en.wiktionary.org/wiki/candle' ]

  }

]
// console.log(data[0]?.word);
// console.log(data[0]?.phonetic);
// console.log(data[0]?.phonetics[0]?.text);
// console.log(data[0]?.meanings[0]?.partOfSpeech);
data[0]?.meanings.map(meaning=>{
console.log(meaning.partOfSpeech);
meaning.definitions.map(def=>{
  console.log(def.definition);
})
});
