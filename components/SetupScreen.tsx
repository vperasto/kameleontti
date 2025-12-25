import React, { useEffect, useState } from 'react';
import { Settings, Check, Square, CheckSquare, X, Hash } from 'lucide-react';
import { CATEGORIES } from '../constants';
import { CategoryId, GameSettings } from '../types';

interface SetupScreenProps {
  playerCount: number;
  setPlayerCount: (count: number) => void;
  selectedCategories: CategoryId[];
  toggleCategory: (id: CategoryId) => void;
  settings: GameSettings;
  updateSettings: (newSettings: Partial<GameSettings>) => void;
  onStartGame: () => void;
}

const SetupScreen: React.FC<SetupScreenProps> = ({
  playerCount,
  setPlayerCount,
  selectedCategories,
  toggleCategory,
  settings,
  updateSettings,
  onStartGame,
}) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Update player names array size when count changes
  useEffect(() => {
    if (settings.playerNames.length !== playerCount) {
      const newNames = Array(playerCount).fill('').map((_, i) => settings.playerNames[i] || '');
      updateSettings({ playerNames: newNames });
    }
  }, [playerCount, settings.playerNames, updateSettings]);

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...settings.playerNames];
    newNames[index] = value;
    updateSettings({ playerNames: newNames });
  };

  return (
    <div className="flex flex-col h-full relative">
      
      {/* HEADER */}
      <header className="flex items-center justify-between p-4 sm:p-6 border-b-4 border-black shrink-0">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tighter text-black uppercase leading-none">
            Kameleontti
          </h1>
          <p className="text-black font-mono font-bold text-xs sm:text-sm mt-1 sm:mt-2 uppercase tracking-widest">Sulaudu joukkoon</p>
        </div>
        <button 
          onClick={() => setIsSettingsOpen(true)}
          className="p-2 sm:p-3 border-2 border-transparent hover:border-black hover:bg-black hover:text-white transition-all rounded-none"
        >
          <Settings className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </header>

      {/* MAIN CONTENT - Scrollable inside if needed */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
        
        {/* Player Count */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-black uppercase tracking-widest text-black">Pelaajat</h2>
            <span className="text-xl sm:text-2xl font-bold font-mono bg-black text-white px-3 py-1 sm:px-4 sm:py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">{playerCount}</span>
          </div>
          <div className="pt-2 px-1">
            <input
              type="range"
              min="3"
              max="20"
              value={playerCount}
              onChange={(e) => setPlayerCount(Number(e.target.value))}
              className="w-full h-4 bg-slate-200 appearance-none cursor-pointer accent-black rounded-none border-2 border-black"
            />
          </div>
        </section>

        {/* Categories */}
        <section className="space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between">
             <h2 className="text-base sm:text-lg font-black uppercase tracking-widest text-black">Kategoriat</h2>
             <span className="text-xs sm:text-sm font-bold font-mono text-black border-b-2 border-black">{selectedCategories.length} VALITTU</span>
          </div>
          
          <div className="grid grid-cols-1 gap-2 sm:gap-3 pb-4">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategories.includes(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => toggleCategory(cat.id)}
                  className={`
                    p-3 sm:p-4 border-4 text-left transition-all duration-100 relative flex items-center justify-between rounded-none group
                    ${isSelected 
                      ? 'border-black bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] translate-x-[-1px] translate-y-[-1px] sm:translate-x-[-2px] sm:translate-y-[-2px]' 
                      : 'border-slate-300 bg-white text-slate-500 hover:border-black hover:text-black'
                    }
                  `}
                >
                  <span className={`text-base sm:text-lg font-black uppercase tracking-wide ${isSelected ? 'text-white' : 'text-slate-600 group-hover:text-black'}`}>
                    {cat.label}
                  </span>
                  {isSelected && <Check size={20} className="text-white sm:w-6 sm:h-6" strokeWidth={4} />}
                </button>
              );
            })}
          </div>
        </section>
      </div>

      {/* FOOTER - Start Button */}
      <div className="p-4 sm:p-6 border-t-4 border-black bg-[#fdfbf7] shrink-0 z-10">
        <button
          onClick={onStartGame}
          disabled={selectedCategories.length === 0}
          className={`
            w-full py-4 sm:py-5 text-xl sm:text-2xl font-black uppercase tracking-widest border-4 border-black transition-all rounded-none
            ${selectedCategories.length > 0 
              ? 'bg-white text-black hover:bg-black hover:text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none' 
              : 'bg-slate-100 text-slate-400 border-slate-300 cursor-not-allowed'
            }
          `}
        >
          Jaa roolit
        </button>
      </div>

      {/* SETTINGS MODAL */}
      {isSettingsOpen && (
        <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center animate-in fade-in duration-200">
          <div className="bg-[#fdfbf7] w-full max-w-lg h-[90vh] sm:h-auto sm:max-h-[90vh] flex flex-col border-t-4 sm:border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)] animate-in slide-in-from-bottom duration-300 rounded-none">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b-4 border-black">
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-widest flex items-center gap-3">
                <Settings className="w-5 h-5 sm:w-6 sm:h-6" /> Asetukset
              </h2>
              <button onClick={() => setIsSettingsOpen(false)} className="p-2 bg-black text-white hover:bg-slate-800 transition-colors rounded-none">
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
              
              {/* Toggles */}
              <div className="space-y-2 sm:space-y-4 bg-white p-3 sm:p-4 border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]">
                  <label className="flex items-center justify-between cursor-pointer group p-2 hover:bg-slate-50 transition-colors">
                    <span className="font-bold text-base sm:text-xl text-black uppercase">Ajastin</span>
                    <div onClick={() => updateSettings({ useTimer: !settings.useTimer })} className="text-black">
                      {settings.useTimer ? <CheckSquare size={28} className="sm:w-8 sm:h-8" strokeWidth={2.5} /> : <Square size={28} className="sm:w-8 sm:h-8" strokeWidth={2.5} />}
                    </div>
                  </label>
                  
                  <div className="h-1 bg-black" />

                  <label className="flex items-center justify-between cursor-pointer group p-2 hover:bg-slate-50 transition-colors">
                    <span className="font-bold text-base sm:text-xl text-black uppercase">Kameleontti näkee kategorian</span>
                    <div onClick={() => updateSettings({ imposterSeesCategory: !settings.imposterSeesCategory })} className="text-black">
                      {settings.imposterSeesCategory ? <CheckSquare size={28} className="sm:w-8 sm:h-8" strokeWidth={2.5} /> : <Square size={28} className="sm:w-8 sm:h-8" strokeWidth={2.5} />}
                    </div>
                  </label>

                  <div className="h-1 bg-black" />

                  <label className="flex items-center justify-between cursor-pointer group p-2 hover:bg-slate-50 transition-colors">
                    <span className="font-bold text-base sm:text-xl text-black uppercase">Nimeä pelaajat</span>
                    <div onClick={() => updateSettings({ usePlayerNames: !settings.usePlayerNames })} className="text-black">
                      {settings.usePlayerNames ? <CheckSquare size={28} className="sm:w-8 sm:h-8" strokeWidth={2.5} /> : <Square size={28} className="sm:w-8 sm:h-8" strokeWidth={2.5} />}
                    </div>
                  </label>
              </div>

              {/* Player Names Input */}
              {settings.usePlayerNames && (
                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-black uppercase text-black tracking-widest border-b-4 border-black pb-2">Pelaajien nimet</h3>
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    {Array.from({ length: playerCount }).map((_, i) => (
                      <div key={i} className="flex items-center gap-3 sm:gap-4">
                         <span className="font-mono text-base sm:text-lg font-bold w-8 text-black border-2 border-black h-8 flex items-center justify-center bg-white">{i + 1}</span>
                         <input
                          type="text"
                          placeholder={`Pelaaja ${i + 1}`}
                          value={settings.playerNames[i] || ''}
                          onChange={(e) => handleNameChange(i, e.target.value)}
                          className="flex-1 border-4 border-slate-300 focus:border-black p-2 sm:p-3 bg-white outline-none font-bold text-base sm:text-lg uppercase transition-colors rounded-none placeholder:text-slate-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t-4 border-black bg-white">
               <button 
                onClick={() => setIsSettingsOpen(false)}
                className="w-full py-3 sm:py-4 bg-black text-white text-lg sm:text-xl font-black uppercase tracking-widest border-4 border-black shadow-[6px_6px_0px_0px_rgba(100,100,100,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none rounded-none hover:bg-slate-800 transition-all"
               >
                 Tallenna
               </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default SetupScreen;