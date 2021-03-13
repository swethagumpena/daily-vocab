const getWordsFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  let wordList = [];
  try {
    const parsedJSON = JSON.parse(value);
    if (Array.isArray(parsedJSON)) {
      wordList = parsedJSON;
    }
  } catch (e) {
    wordList = [];
  }
  return wordList;
};

const saveWordToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export default { getWordsFromLocalStorage, saveWordToLocalStorage };
