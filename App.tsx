import React, { useState } from 'react';
import { CATEGORIES } from './constants';
import { GameState, CategoryId, GameSettings } from './types';
import SetupScreen from './components/SetupScreen';
import RevealScreen from './components/RevealScreen';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    playerCount: 4,
    settings: {
      useTimer: false,
      imposterSeesCategory: false,
      usePlayerNames: false,
      playerNames: [],
    },
    // Updated default categories to match new IDs
    selectedCategories: ['julkkikset', 'paikat', 'tilanteet'],
    secretWord: '',
    secretCategory: '',
    imposterIndex: -1,
    startingPlayerIndex: -1,
  });

  const [revealPlayerIndex, setRevealPlayerIndex] = useState(0);

  // --- State Updaters ---

  const toggleCategory = (id: CategoryId) => {
    setGameState((prev) => {
      const isSelected = prev.selectedCategories.includes(id);
      let newCategories;
      if (isSelected) {
        newCategories = prev.selectedCategories.filter((c) => c !== id);
      } else {
        newCategories = [...prev.selectedCategories, id];
      }
      return { ...prev, selectedCategories: newCategories };
    });
  };

  const setPlayerCount = (count: number) => {
    setGameState((prev) => ({ ...prev, playerCount: count }));
  };

  const updateSettings = (newSettings: Partial<GameSettings>) => {
    setGameState((prev) => ({
      ...prev,
      settings: { ...prev.settings, ...newSettings }
    }));
  };

  // --- Game Logic ---

  const startGame = () => {
    if (gameState.selectedCategories.length === 0) return;

    // Pick random category from selected
    const randomCatId = gameState.selectedCategories[Math.floor(Math.random() * gameState.selectedCategories.length)];
    const categoryData = CATEGORIES.find((c) => c.id === randomCatId);
    
    if (!categoryData) return;

    // Pick random word
    const randomWord = categoryData.words[Math.floor(Math.random() * categoryData.words.length)];

    // Pick random imposter
    const imposterIdx = Math.floor(Math.random() * gameState.playerCount);

    setGameState((prev) => ({
      ...prev,
      phase: 'reveal',
      secretWord: randomWord,
      secretCategory: categoryData.label,
      imposterIndex: imposterIdx,
    }));
    
    setRevealPlayerIndex(0);
  };

  const nextReveal = () => {
    if (revealPlayerIndex < gameState.playerCount - 1) {
      setRevealPlayerIndex((prev) => prev + 1);
    } else {
      // All revealed. Pick random starter.
      const starterIdx = Math.floor(Math.random() * gameState.playerCount);
      
      setGameState((prev) => ({
        ...prev,
        phase: 'game',
        startingPlayerIndex: starterIdx,
      }));
    }
  };

  const revealResult = () => {
    setGameState((prev) => ({ ...prev, phase: 'result' }));
  };

  const resetGame = () => {
    setGameState((prev) => ({
      ...prev,
      phase: 'setup',
      secretWord: '',
      imposterIndex: -1,
      startingPlayerIndex: -1,
    }));
    setRevealPlayerIndex(0);
  };

  // --- Helper to get name ---
  const getPlayerName = (index: number) => {
    if (gameState.settings.usePlayerNames && gameState.settings.playerNames[index]) {
      return gameState.settings.playerNames[index];
    }
    return `Pelaaja ${index + 1}`;
  };

  return (
    // Changed h-screen to h-dvh for better mobile viewport support
    // Added p-2 padding to create a safe zone for button shadows so they don't get clipped or cause scroll
    <main className="h-screen sm:h-dvh w-full overflow-hidden bg-paper relative p-2">
      <div className="h-full w-full max-w-lg mx-auto flex flex-col">
        {gameState.phase === 'setup' && (
          <SetupScreen
            playerCount={gameState.playerCount}
            setPlayerCount={setPlayerCount}
            selectedCategories={gameState.selectedCategories}
            toggleCategory={toggleCategory}
            settings={gameState.settings}
            updateSettings={updateSettings}
            onStartGame={startGame}
          />
        )}

        {gameState.phase === 'reveal' && (
          <RevealScreen
            // Using a key forces re-render when player index changes, helping with animation resets
            key={revealPlayerIndex}
            playerName={getPlayerName(revealPlayerIndex)}
            isImposter={revealPlayerIndex === gameState.imposterIndex}
            secretWord={gameState.secretWord}
            categoryLabel={gameState.secretCategory}
            imposterSeesCategory={gameState.settings.imposterSeesCategory}
            onNext={nextReveal}
            isLastPlayer={revealPlayerIndex === gameState.playerCount - 1}
          />
        )}

        {gameState.phase === 'game' && (
          <GameScreen
            startingPlayerName={getPlayerName(gameState.startingPlayerIndex)}
            useTimer={gameState.settings.useTimer}
            onReveal={revealResult}
          />
        )}

        {gameState.phase === 'result' && (
          <ResultScreen
            imposterName={getPlayerName(gameState.imposterIndex)}
            secretWord={gameState.secretWord}
            category={gameState.secretCategory}
            onPlayAgain={resetGame}
          />
        )}
      </div>
    </main>
  );
};

export default App;