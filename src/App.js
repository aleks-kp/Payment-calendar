import './App.css';
import React from 'react';
import {Period} from './components/Period/Period';
import {Time} from './components/Time/Time';
import {Quantity} from './components/Quantity/Quantity';
import {Schedule} from './components/Schedule/Schedule';
import {Header} from './components/ui_kit/Header/Header';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Period />
      <Time />
      <Quantity />
      <Schedule />
    </div>
  )
}

export default App;
