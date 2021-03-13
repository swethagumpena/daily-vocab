/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../Card/Card';
import styles from './Home.module.scss';

const Home = ({ vocab }) => {
  const history = useHistory();
  // const singleVocab = vocab.map((item) => (
  //   <Card
  //     word={item.addWordData.word}
  //     sentence={item.addWordData.sentence}
  //   />
  // ));
  return (
    <div>
      <p className={styles.heading}>welcome back</p>
      <div className={styles.homeContainer}>
        <div className={styles.words}>
          {vocab.map((item) => (
            <Card
              word={item.addWordData.word}
              sentence={item.addWordData.sentence}
            />
          ))}
        </div>
      </div>

      <button type="button" className={styles.button} onClick={() => history.push('/add-word')}>+</button>
    </div>
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
