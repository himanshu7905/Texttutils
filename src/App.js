import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] =useState(`dark`); //whether dark mode is ebabled or not

  const toggleMode = () =>{
    if(mode===`light`){
    setMode(`dark`);
    document.body.style.backgroundColor = `black`;
    }
    else {
      setMode(`light`);
      document.body.style.backgroundColor = `white`;
      }
  

  }
  return (
   <>
   {/*<Navbar title='TextUtils' aboutText='About TextUtils'/>*/}
   <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
   <div className="container">
   <TextForm heading="Enter the text to analyze below" mode={mode}/>
   {/*<About/>*/}
   </div>
   </>
  );
}

export default App;
