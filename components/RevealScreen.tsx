import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, ArrowRight, Lock } from 'lucide-react';

interface RevealScreenProps {
  playerName: string;
  isImposter: boolean;
  secretWord: string;
  categoryLabel: string;
  imposterSeesCategory: boolean;
  onNext: () => void;
  isLastPlayer: boolean;
}

const RevealScreen: React.FC<RevealScreenProps> = ({
  playerName,
  isImposter,
  secretWord,
  categoryLabel,
  imposterSeesCategory,
  onNext,
  isLastPlayer,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasSeenRole, setHasSeenRole] = useState(false);
  
  // Reset state when player changes (handled by key prop in parent mostly)
  useEffect(() => {
    setIsRevealed(false);
    setHasSeenRole(false);
  }, [playerName]);

  const handleToggle = () => {
    if (isRevealed) {
      // Hiding
      setIsRevealed(false);
    } else {
      // Showing
      setIsRevealed(true);
      setHasSeenRole(true);
    }
  };

  const handleNext = () => {
    if (hasSeenRole && !isRevealed) {
      onNext();
    }
  };

  return (
    <div className="flex flex-col h-full items-center justify-center p-4 sm:p-6 max-w-lg mx-auto w-full">
      
      {/* Header */}
      <div className="text-center mb-4 sm:mb-8 w-full">
        <div className="inline-block w-full px-4 py-2 sm:px-6 sm:py-3 border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-2 sm:mb-4">
          <h2 className="text-2xl sm:text-3xl font-black font-serif uppercase truncate">{playerName}</h2>
        </div>
        <p className="text-black font-bold uppercase tracking-widest text-xs">Pidä laite itselläsi</p>
      </div>

      {/* Card Container */}
      <div 
        className="w-full aspect-[3/4] max-h-[450px] sm:max-h-[500px] relative perspective-1000 cursor-pointer group"
        onClick={handleToggle}
      >
        <div className={`
          relative w-full h-full text-center transition-all duration-300 transform-style-3d
          ${isRevealed ? 'rotate-y-180' : ''}
        `}>
          
          {/* FRONT (Hidden state) */}
          <div className="absolute inset-0 backface-hidden">
            <div className="w-full h-full bg-black border-4 border-black flex flex-col items-center justify-center p-6 sm:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)]">
               
               {hasSeenRole ? (
                  <Lock size={60} className="text-white mb-6 sm:mb-8 sm:w-20 sm:h-20" strokeWidth={1.5} />
               ) : (
                  <Eye size={60} className="text-white mb-6 sm:mb-8 sm:w-20 sm:h-20" strokeWidth={1.5} />
               )}
               
               <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-widest border-b-8 border-white pb-4 mb-6">
                 {hasSeenRole ? 'Piilotettu' : 'Salainen'}
               </h3>
               
               {!hasSeenRole && (
                 <div className="mt-4 sm:mt-8 px-4 py-2 sm:px-6 sm:py-3 bg-white text-black text-xs sm:text-sm uppercase tracking-widest font-black animate-pulse border-2 border-white">
                   Napauta
                 </div>
               )}
               {hasSeenRole && (
                 <div className="mt-4 sm:mt-8 text-white font-mono text-xs sm:text-sm uppercase tracking-widest opacity-60">
                   Ojenna laite eteenpäin
                 </div>
               )}
            </div>
          </div>

          {/* BACK (Revealed state) */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div className={`
              w-full h-full bg-white border-4 border-black flex flex-col items-center justify-center p-4 sm:p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)] relative
            `}>
              {/* Corner marks */}
              <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-l-8 border-t-8 border-black"></div>
              <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-r-8 border-t-8 border-black"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-l-8 border-b-8 border-black"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-r-8 border-b-8 border-black"></div>

              {isImposter ? (
                <>
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-black text-white flex items-center justify-center text-5xl sm:text-6xl mb-4 sm:mb-8 font-black border-4 border-black">
                    ?
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white bg-black px-3 py-2 sm:px-4 sm:py-2 uppercase tracking-tighter mb-4 sm:mb-6 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                    OLET KAMELEONTTI
                  </h3>
                  <p className="text-black font-bold text-base sm:text-lg leading-tight uppercase tracking-wide mb-6 sm:mb-8">
                    Sulaudu joukkoon.
                  </p>
                  
                  {imposterSeesCategory ? (
                     <div className="bg-slate-100 w-full py-3 sm:py-4 border-4 border-black">
                        <p className="text-[10px] sm:text-xs uppercase font-black text-slate-500 mb-1 sm:mb-2 tracking-widest">Kategoria</p>
                        <p className="font-black text-xl sm:text-2xl uppercase">{categoryLabel}</p>
                     </div>
                  ) : (
                    <div className="bg-slate-100 w-full py-3 sm:py-4 border-4 border-black opacity-50">
                        <p className="text-[10px] sm:text-xs uppercase font-black text-slate-500 mb-1 sm:mb-2 tracking-widest">Kategoria</p>
                        <p className="font-black text-xl sm:text-2xl">???</p>
                     </div>
                  )}
                </>
              ) : (
                <>
                  <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-4 sm:mb-6 border-b-2 border-slate-200 pb-2">Salainen sana</p>
                  <h3 className="text-4xl sm:text-6xl font-black text-black mb-6 sm:mb-10 break-words w-full leading-none">
                    {secretWord}
                  </h3>
                  <div className="mb-6 sm:mb-8">
                    <span className="font-black bg-black text-white px-3 py-1 text-lg sm:text-xl uppercase tracking-widest">Tietäjä</span>
                  </div>
                  <div className="bg-white w-full py-3 sm:py-4 border-t-4 border-b-4 border-black">
                    <p className="text-[10px] sm:text-xs uppercase font-black text-slate-400 mb-1 tracking-widest">Kategoria</p>
                    <p className="font-black text-lg sm:text-xl uppercase">{categoryLabel}</p>
                  </div>
                </>
              )}
              
              <button 
                onClick={(e) => { e.stopPropagation(); setIsRevealed(false); }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 text-black hover:bg-slate-100 transition-colors border-2 border-transparent hover:border-black"
              >
                <EyeOff size={24} className="sm:w-8 sm:h-8" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Button */}
      <div className="w-full pt-4 sm:pt-8">
        {isRevealed ? (
           <button
           onClick={() => setIsRevealed(false)}
           className="w-full py-4 sm:py-5 text-lg sm:text-xl font-black uppercase tracking-widest border-4 border-black bg-white text-black hover:bg-black hover:text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all rounded-none flex items-center justify-center gap-3"
         >
           Piilota kortti <EyeOff size={20} className="sm:w-6 sm:h-6" />
         </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={!hasSeenRole}
            className={`
              w-full py-4 sm:py-5 text-lg sm:text-xl font-black uppercase tracking-widest border-4 border-black flex items-center justify-center gap-4 transition-all rounded-none
              ${hasSeenRole 
                ? 'bg-black text-white hover:bg-white hover:text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none' 
                : 'bg-transparent text-slate-300 border-slate-200 cursor-not-allowed'
              }
            `}
          >
            {isLastPlayer ? 'Aloita peli' : 'Seuraava'}
            <ArrowRight size={20} className="sm:w-6 sm:h-6" strokeWidth={3} />
          </button>
        )}
      </div>
    </div>
  );
};

export default RevealScreen;