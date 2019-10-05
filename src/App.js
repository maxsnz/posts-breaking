import React from 'react';
import Article from './Article';
import './App.css';
import data from './data';

const wrap = str => `<div class="group">${str}</div>`;

const App = () => (
  <div className="App">
    <Article post={wrap(data)} />
  </div>
);

export default App;
