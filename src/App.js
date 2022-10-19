
import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textnote from './component/Textnote';

function App() {
  return (

    <div className="App">

      {/* <Navbar title='title2' abouttext='About3' /> */}
      <Navbar />
      <Textnote title='Enter the Text for convert upper case' />

    </div>

  );
}

export default App; 
