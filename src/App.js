import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import './App.css';
import './Normalize.css';
import Utils from './utils/localStorageUtils';
import Index from './components/Index/Index';
import Home from './components/Home/Home';
import AddWord from './components/AddWordForm/AddWordForm';

function App() {
  const [vocab, setVocab] = useState(Utils.getWordsFromLocalStorage('vocab') || []);
  // const [vocab, setVocab] = useState([]);

  // working
  // const [vocab, setVocab] = useState(() => {
  //   const localData = localStorage.getItem('vocab');
  //   return localData ? JSON.parse(localData) : [];
  // });

  // const addNewVocab = (newVocab) => {
  //   const newVocabitems = [...vocab, newVocab];
  //   console.log('new', newVocabitems);
  //   setVocab(newVocabitems);
  //   Utils.saveWordToLocalStorage('vocab', newVocabitems);
  //   console.log('kk', newVocab);
  // };

  // useEffect(() => {
  //   setVocab(Utils.getWordsFromLocalStorage);
  // }, []);

  const addNewVocab = (newVocab) => {
    const newVocabitems = [...vocab, newVocab];
    console.log('new', newVocabitems);
    setVocab(newVocabitems);
  };

  useEffect(() => {
    Utils.saveWordToLocalStorage('vocab', vocab);
  }, [vocab]);

  // useEffect(() => {
  //   localStorage.setItem('vocab', JSON.stringify(vocab));
  // }, [vocab]);

  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/home">
            <Home vocab={vocab} />
          </Route>
          <Route path="/add-word">
            <AddWord
              vocab={vocab}
              addNewVocab={addNewVocab}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
