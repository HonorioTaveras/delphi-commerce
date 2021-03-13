import React from 'react';

import Overview from '../pages/Overview/Overview';

import bootstrap from './bootstrap';
import './App.scss';

const App = () => (
  <div className="app-container">
    <style>{bootstrap}</style>
    <Overview />
  </div>
);

export default App;
