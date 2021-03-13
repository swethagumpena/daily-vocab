import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Index.module.scss';

const Index = () => {
  const history = useHistory();
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h3>Daily Vocab!</h3>
        <p>Learn a new  word everyday!</p>
        <button type="button" onClick={() => history.push('/home')}>Get Started</button>
      </div>
    </div>
  );
};

export default Index;
