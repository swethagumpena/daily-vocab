/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../Card/Card';

const Home = ({ vocab }) => {
  const history = useHistory();
  return (
    <>
      <div>Home</div>
      <Card vocab={vocab} />
      <button type="button" onClick={() => history.push('/add-word')}>+</button>
    </>
  );
};

export default Home;
