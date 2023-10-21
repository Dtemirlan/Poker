import React from 'react';
import Card from './Components/Card';

const App = () => {
  return (
    <div className="App">
      <h1>Игральная карта:</h1>
      <Card rank="K" suit="diams" />
    </div>
  );
};

export default App;
