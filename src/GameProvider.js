import { useState, createContext, useContext } from 'react';

import InitialCards from './cards-data';

const GameContext = createContext();

export default function GameProvider({ children }) {
  const [deck, setDeck] = useState(InitialCards);
  const [playerOneHand, setPLayerOneHand] = useState([]);
  const [playerTwoHand, setPLayerTwoHand] = useState([]);
  const [playerThreeHand, setPLayerThreeHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  const gameState = {
    deck, setDeck, playerOneHand, setPLayerOneHand, playerTwoHand, setPLayerTwoHand, playerThreeHand, setPLayerThreeHand, selectedCard, setSelectedCard, from, setFrom, to, setTo 
  };

  return <GameContext.Provider value={gameState}>
    {children}
  </GameContext.Provider>;

}
export function useGameContext() {
  return useContext(GameContext);
}

