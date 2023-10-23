import React, { useState } from 'react';
import '../cards.css';

interface CardProps {
  rank: string;
  suit: string;
  isClosed: boolean;
  suitSymbols: string; 
}

const Card: React.FC<CardProps> = ({ rank, suit, isClosed }) => {
  const suitSymbols = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠',
  };

  return (
    <span className={`card ${isClosed ? 'closed' : `rank-${rank.toLowerCase()} ${suit}`}`}>
      <span className={`rank ${isClosed ? 'closed' : ''}`}>{isClosed ? 'X' : rank}</span>
      <span className={`suit ${isClosed ? 'closed' : ''}`}>{isClosed ? 'X' : suitSymbols[suit]}</span>
    </span>
  );
};

export default Card;
