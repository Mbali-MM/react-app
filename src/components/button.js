import React from 'react'; 


const button = ({ children, style }) => {
    return (
      <button style={style} onClick={onClick}>
        {children}
      </button>
    );
  };s
  
  const App= () => {
    const handleClick = () => {
      console.log('Button was clicked!');
    };
  
    return (
      <div>
        <Button onClick={handleClick} style={{ backgroundColor: 'blue', color: 'white' }}>
          Click Me!
        </Button>
      </div>
    );
  };
/**function button (){
    
    return
    
}**/

export default button;