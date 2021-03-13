import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
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
      <div className={styles.AddWordBtn}>
        <button type="button" onClick={() => history.push('/add-word')}>+</button>
      </div>
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

const wordShape = PropTypes.shape({
  word: PropTypes.string,
  sentence: PropTypes.string,
});

const vocabShape = PropTypes.shape({
  addWordData: PropTypes.shape(wordShape),
});

Home.propTypes = {
  vocab: PropTypes.arrayOf(vocabShape).isRequired,
};

export default Home;
