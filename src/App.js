import React, { useState } from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import './App.css';
import Index from './components/Index/Index';
import Home from './components/Home/Home';
import AddWord from './components/AddWord/AddWord';

function App() {
  const [vocab] = useState([
    { word: 'eat', sentence: 'I am eating' },
    { word: 'eat', sentence: 'I am eating' },
  ]);

  const addNewVocab = (newVocab) => {
    console.log(newVocab);
  };

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
