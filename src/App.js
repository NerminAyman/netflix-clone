import React from 'react';
import './css/App.css';

import Main from './pages/Main.js'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  );
}

export default App;
