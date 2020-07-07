import React from 'react';
import './App.css';
import ButtonIcon from "./components/ButtonIcon/buttonIcon.view";
import ButtonText from "./components/ButtonText/buttonText.view";
import Home from "./pages/Home/home.view";

function App() {
  return (
    <div className="App">
      <Home />
      <ButtonIcon />
      <ButtonText />
    </div>
  );
}

export default App;
