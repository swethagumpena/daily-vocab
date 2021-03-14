import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddWordForm.module.scss';
import AddWordSchema from '../../utils/validatiors/AddWordSchema';

const AddWord = ({ addNewVocab }) => {
  const history = useHistory();
  const [addWordForm, setAddWordForm] = useState({
    addWordData: {
      word: '',
      sentence: '',
      id: uuidv4(),
    },
    submitted: false,
  });

  const formik = useFormik({
    initialValues: addWordForm.addWordData,
    validationSchema: AddWordSchema,
    onSubmit: (addWordData) => {
      addNewVocab({ addWordData });
      setAddWordForm({ addWordData, submitted: true });
      history.push('/home');
    },
  });

  return (
    <div className={styles.formContainer}>
      <p className={styles.heading}>add a new word</p>
      <div className={styles.formData}>
        {!addWordForm.submitted ? (
          <>
            <form onSubmit={formik.handleSubmit}>
              <div className={styles.formItems}>
                <label htmlFor="word" className={styles.wordSentence}>
                  <p>What&#39;s the word:</p>
                  <input
                    name="word"
                    type="text"
                    placeholder="new word"
                    onChange={formik.handleChange}
                  />
                </label>
                {formik.errors.word && (
                <p>{formik.errors.word}</p>
                )}

                <label htmlFor="sentence" className={styles.wordSentence}>
                  <p>Let&#39;s use it in a sentence:</p>
                  <input
                    name="sentence"
                    type="text"
                    placeholder="new sentence"
                    onChange={formik.handleChange}
                  />
                </label>
                {formik.errors.sentence && (
                <p>{formik.errors.sentence}</p>
                )}

              </div>
              <button type="submit" className={styles.submitBtn}>✓</button>
            </form>
          </>
        ) : (
          <p>{`Your word ${addWordForm.addWordData.word} has been added`}</p>
        )}
      </div>

    </div>
  );
};

AddWord.propTypes = {
  addNewVocab: PropTypes.func.isRequired,
};

export default AddWord;
