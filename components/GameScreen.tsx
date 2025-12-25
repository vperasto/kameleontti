import React, { useState, useEffect } from 'react';
import { Timer, HelpCircle, Users } from 'lucide-react';

interface GameScreenProps {
  startingPlayerName: string;
  useTimer: boolean;
  onReveal: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ startingPlayerName, useTimer, onReveal }) => {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    if (!useTimer) return;
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [useTimer]);

  const formatTime = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col h-full p-6 text-center max-w-lg mx-auto">
      
      {/* Top Section */}
      <div className="mt-4 mb-8">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4 border-b-8 border-black inline-block pb-2">
            Peli käynnissä
        </h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-8 w-full">
        
        {/* Starting Player Card */}
        <div className="bg-white p-8 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-full relative">
           <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 text-sm font-black uppercase tracking-widest border-2 border-white">
             Aloittaja
           </div>
           
           <h2 className="text-4xl font-black mt-4 break-words uppercase">{startingPlayerName}</h2>
           
           <p className="text-black mt-6 text-sm font-mono uppercase tracking-wide border-t-4 border-black pt-4">
             "Aloita peli. Anna yksi vihjesana."
           </p>
        </div>

        {/* Optional Timer */}
        {useTimer && (
          <div className="flex flex-col items-center w-full bg-black text-white p-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(100,100,100,0.5)]">
            <div className="text-white mb-2 flex items-center gap-2">
              <Timer size={20} />
              <span className="text-sm font-bold uppercase tracking-widest">Aika</span>
            </div>
            <div className="text-7xl font-mono font-bold tabular-nums leading-none">
              {formatTime(seconds)}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="grid grid-cols-1 gap-4 w-full text-left">
          <div className="flex items-start gap-4 bg-white p-4 border-4 border-black">
            <div className="bg-black text-white p-2 shrink-0">
               <HelpCircle size={24} />
            </div>
            <div>
              <h4 className="font-black uppercase text-sm mb-1">Kameleontti</h4>
              <p className="text-sm text-black font-medium leading-tight">Arvaa sana. Pysy piilossa.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white p-4 border-4 border-black">
            <div className="bg-white text-black border-2 border-black p-2 shrink-0">
               <Users size={24} />
            </div>
             <div>
              <h4 className="font-black uppercase text-sm mb-1">Tietäjät</h4>
              <p className="text-sm text-black font-medium leading-tight">Etsi kameleontti. Varo paljastamasta liikaa.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-8 pb-4">
        <button
          onClick={onReveal}
          className="w-full py-5 bg-white text-black border-4 border-black hover:bg-black hover:text-white text-xl font-black uppercase tracking-widest shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all rounded-none"
        >
          Äänestys & Ratkaisu
        </button>
      </div>
    </div>
  );
};

export default GameScreen;