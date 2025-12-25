export type CategoryId = 
  | 'julkkikset'
  | 'ruoka_juoma'
  | 'paikat'
  | 'elaimet'
  | 'esineet'
  | 'ammatit'
  | 'tilanteet'
  | 'lapset';

export interface Category {
  id: CategoryId;
  label: string;
  icon: string;
  words: string[];
}

export type GamePhase = 'setup' | 'reveal' | 'game' | 'result';

export interface GameSettings {
  useTimer: boolean;
  imposterSeesCategory: boolean;
  usePlayerNames: boolean;
  playerNames: string[];
}

export interface GameState {
  phase: GamePhase;
  playerCount: number;
  settings: GameSettings;
  selectedCategories: CategoryId[];
  secretWord: string;
  secretCategory: string;
  imposterIndex: number;
  startingPlayerIndex: number;
}