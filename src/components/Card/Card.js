/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Card = ({ word, sentence }) => {
  const a = 10;
  return (
    <>
      {/* <div>{JSON.stringify(vocab)}</div> */}
      <p>{word}</p>
      <p>{sentence}</p>
      <hr />
    </>
  );
};

export default Card;
