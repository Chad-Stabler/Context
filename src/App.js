import './App.css';
import initialCards from './cards-data';
import Player from './Player';
import CardList from './CardList';
import { useState } from 'react';
import ExecutePassButton from './ExecutePassButton';
import { useGameContext } from './GameProvider';

function App() {
  const { selectedCard, playerOneHand, playerTwoHand, playerThreeHand, deck } = useGameContext();

  function findCardIndex(value, suit, cards) {
    return cards.findIndex(card => card.value === value && card.suit === suit);
  }

  return (
    <div className="App">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player player={1} hand={playerOneHand} />
        <Player player={2} hand={playerTwoHand} />
        <Player player={3} hand={playerThreeHand} />
        <CardList cards={deck} player={'deck'} />
      </section>
      <section>
        {
          selectedCard && <ExecutePassButton />
        }
      </section>
    </div>
  );
}

export default App;
