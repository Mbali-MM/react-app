import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import button from './components/button'

function App() {
  return (
    <><div style={styles}>
      <Header/>
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

 
/**function button (){
  return (
    <div>
      <Button onClick={handleClick} style={{ backgroundColor: 'blue', color: 'white' }}>
        Click Me!
      </Button>
    </div>
  );

  }*/
 

export default App

