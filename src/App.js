import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld'

import Header from './components/Header'


function App()  {
  return (
    <div style={styles}>
     <Header/>
        <HelloWorld name="Buhle"/>
    </div>
  );
}

const styles = { 
  backgroundColor: 'green', 
  color: 'white', 
  fontSize: '16px', 
 }; 
 
 

export default App

