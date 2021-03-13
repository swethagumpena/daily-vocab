import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Index.module.scss';

const Index = () => {
  const history = useHistory();
  return (
    <div data-testid="Index" className={styles.page}>
      <div className={styles.container}>
        <h3>daily vocab!</h3>
        <p>learn a new  word everyday!</p>
        <button type="button" onClick={() => history.push('/home')}>Get Started</button>
      </div>
    </div>
  );
};

export default Index;
