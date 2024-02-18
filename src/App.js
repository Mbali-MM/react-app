import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import button from './components/botton'


function App()  {
  return (
    <><div style={styles}>
      <button/>
      <Header />
      <divStyle />
      <HelloWorld name="Buhle" />
    </div> <p> Welcome to [Your App Name]! Buckle up for an incredible journey. We’ve got exciting features and exclusive content waiting just for you!”</p></>
  );
}





const styles = { 
  backgroundColor: 'green', 
  color: 'white', 
  fontSize: '16px', 
 }; 


 

export default App

