/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../Card/Card';

const Home = ({ vocab }) => {
  const history = useHistory();
  const singleVocab = vocab.map((item) => (
    <Card
      word={item.addWordData.word}
      sentence={item.addWordData.sentence}
    />
  ));
  return (
    <>
      <div>Home</div>
      {singleVocab}
      <button type="button" onClick={() => history.push('/add-word')}>+</button>
    </>
  );
};

// vocab
// [
//   { addWordData: { word: 'cogent', sentence: 'belie elish' } },
//   { addWordData: { word: 'cogent', sentence: 'belie elish' } },
//   { addWordData: { word: 'belie', sentence: 'ghjkm' } },
//   { addWordData: { word: 'abate', sentence: 'ertyu' } },
//   { addWordData: { word: 'compilant', sentence: 'belie elish' } },
// ];

// singleVocab
// [
//     {"word":"cogent","sentence":"belie elish"},
//     {"word":"cogent","sentence":"belie elish"},
//     {"word":"belie","sentence":"ghjkm"},
//     {"word":"abate","sentence":"ertyu"},
//     {"word":"compilant","sentence":"belie elish"}
// ]

export default Home;
