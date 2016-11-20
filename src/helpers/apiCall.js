const loadData = () => {
  return fetch('http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=idiom&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
  .then(r => r.json())
}

const translate = (word) => {
  return fetch(`https://glosbe.com/gapi/translate?from=eng&dest=rus&format=json&phrase=${word}&pretty=true&pageSize=1`)
  .then(r => r.json())
}

export translate;

export default loadData;
