/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

const AddWord = ({ addNewVocab }) => {
  const history = useHistory();
  const [addWordForm, setAddWordForm] = useState({
    addWordData: {
      word: '',
      sentence: '',
    },
    submitted: false,
  });

  const formik = useFormik({
    initialValues: addWordForm.addWordData,
    // onSubmit: (addWordData) => setAddWordForm({ addWordData, submitted: true }),
    // onSubmit: (addWordData) => addNewVocab({ addWordData }), // WORKING
    onSubmit: (addWordData) => {
      addNewVocab({ addWordData });
      setAddWordForm({ addWordData, submitted: true });
      history.push('/home');
    },
  });

  return (
    <div>
      <h4>Add a new word</h4>
      {!addWordForm.submitted ? (
        <>
          {/* <p>What's the word</p> */}
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="word">
              Whats the word:
              <input
                name="word"
                type="text"
                placeholder="new word"
                onChange={formik.handleChange}
              />
            </label>

            <label htmlFor="sentence">
              Lets use it in a sentence:
              <input
                name="sentence"
                type="text"
                placeholder="new sentence"
                onChange={formik.handleChange}
              />
            </label>

            <button type="submit">Tick</button>
          </form>
        </>
      ) : (
        <p>{`Your word ${addWordForm.addWordData.word} has been added`}</p>
      )}
    </div>
  );
};

export default AddWord;
