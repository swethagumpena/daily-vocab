import React from 'react';
import { useHistory } from 'react-router-dom';

const Index = () => {
  const history = useHistory();
  return (
    <>
      <h3>Daily Vocab!</h3>
      <h4>Learn a new  word everyday!</h4>
      <button type="button" onClick={() => history.push('/home')}>Get Started</button>
    </>
  );
};

export default Index;
