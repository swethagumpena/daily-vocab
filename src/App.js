import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import './App.css';
import Index from './components/Index';

function App() {
  // const [vocab, setVocab] = useState({});
  // {word:sentence}
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/home">
            {/* <Home /> */}
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
