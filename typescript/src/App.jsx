import React from 'react'
import "./App.css";
import Main from './features/Main/Main';
import ThemeContext from './components/ThemeContext/ThemeContext';

function App() {
  return (
    <ThemeContext>
        <Main/>
    </ThemeContext>
   
  )
}

export default App