import React from 'react';
import Card from './Card';

class CardDeck extends React.Component {
  private suits: string[] = ['diams', 'hearts', 'clubs', 'spades'];
  private ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  getCards(howMany: number): JSX.Element[] {
    const cards: JSX.Element[] = [];
    for (let i = 0; i < howMany; i++) {
      const randomSuitIndex = Math.floor(Math.random() * this.suits.length);
      const randomRankIndex = Math.floor(Math.random() * this.ranks.length);
      const suit = this.suits[randomSuitIndex];
      const rank = this.ranks[randomRankIndex];
      cards.push(<Card key={i} rank={rank} suit={suit} />);
    }
    return cards;
  }

  render() {
    return (
      <div className="playingCards faceImages">
        {this.getCards(5)}
      </div>
    );
  }
}

export default CardDeck;
