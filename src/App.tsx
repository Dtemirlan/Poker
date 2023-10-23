import React, { useState } from 'react';
import CardDeck from './Components/CardDeck';

const App: React.FC = () => {
  const [cardsDealt, setCardsDealt] = useState(false);

  const handleDealCards = () => {
    setCardsDealt(true);
  };

  return (
    <div className="App">
      <button className='btn' onClick={handleDealCards}>Раздать карты</button>
      {cardsDealt && <CardDeck />}
    </div>
  );
};

export default App;
