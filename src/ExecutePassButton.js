import React from 'react';
import Card from './Card';
import { useGameContext } from './GameProvider';
import { findCardIndex } from './utils';

export default function ExecutePassButton() {
  const { deck, setDeck,
    playerOneHand, setPlayerOneHand,
    selectedCard, setSelectedCard,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    from, to, } = useGameContext();

  function passCard(card) {
    const playerHands = [playerOneHand, playerTwoHand, playerThreeHand];
    const setPlayerHands = [setPlayerOneHand, setPlayerTwoHand, setPlayerThreeHand];
    
    const toHand = playerHands[to - 1] || deck;
    const fromHand = playerHands[from - 1] || deck;

    const setTo = setPlayerHands[to - 1] || setDeck;
    const setFrom = setPlayerHands[from - 1] || setDeck;

    const movingCardIndex = findCardIndex(card.value, card.suit, fromHand);
    const [movingCard] = fromHand.splice(movingCardIndex, 1);
    
    toHand.push(movingCard);

    setTo([...toHand]);
    setFrom([...fromHand]);

    setSelectedCard(null);
  }

  return (
    <div className='execute-button' onClick={() => passCard(selectedCard)}>
        Pass <Card card={selectedCard} cardLocation='button' /> from {from ? from : 'Main Deck'} to {to}
    </div>
  );
}
