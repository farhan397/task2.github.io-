import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'

import Imgcard from './Imgcard/Imgcard';
import Datafilter from './DataFilter/Datafilter';


function App() {
  


 
  
  return (
    <div className="App">
      <div>
        <Datafilter/>
      </div>
      <div>
        <Imgcard/>
      </div>
    </div>
  );
}

export default App;
