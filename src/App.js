import React, { useState } from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import './App.css';
import Index from './components/Index/Index';
import Home from './components/Home/Home';

function App() {
  const [vocab] = useState({ eat: 'I am eating' });
  // {word:sentence}
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
            {/* <AddWord /> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
