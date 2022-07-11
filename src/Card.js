import React from 'react';
import { useContext } from './GameProvider';

const suitMap = {
  hearts: '❤️',
  spades: '♠️',
  clubs: '♣️',
  diamonds: '♦️',
};

export default function Card({ card, cardLocation }) {
  const {selectedCard, setSelectedCard, setFrom } = useContext();
  function handleCardClick() {
    setFrom(cardLocation);
    setSelectedCard(card);
  }
  
  // if there IS a selected card, and it has the same value and suit as THIS card, style it differently
  const thisIsTheSelectedCard = cardLocation !== 'button' && selectedCard && selectedCard.value === card.value && selectedCard.suit === card.suit;


  return (
    <div className={`${thisIsTheSelectedCard ? 'selected' : ''} card`} 
      onClick={handleCardClick}>
      <div>{suitMap[card.suit]}</div>
      <div>{card.value}</div>
    </div>
  );
}
