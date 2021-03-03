import React from 'react';
import Ocene from "./Ocene";


function App() {

  const vrednost = 100;

  

  return (
    <div>
      <h1>Pozdravljeni študent.</h1>
      <Ocene ime="Jure Novak" ocena="10" />
      <Ocene ime="Gorazd Žižek"/>
      <Ocene ime="Žan Pukmajster" ocena="10"/>
      <Ocene ime="Tina Novak"/>
    </div>
  );
}

export default App;