import React from 'react';
import { RotateCcw, User, Key } from 'lucide-react';

interface ResultScreenProps {
  imposterName: string;
  secretWord: string;
  category: string;
  onPlayAgain: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  imposterName,
  secretWord,
  category,
  onPlayAgain,
}) => {
  return (
    // Removed min-h-screen to avoid vertical overflow within the h-dvh container
    <div className="flex flex-col h-full p-4 sm:p-6 text-center justify-center items-center max-w-lg mx-auto">
      
      <div className="space-y-8 sm:space-y-12 w-full">
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-black leading-none">
          Ratkaisu
        </h2>

        {/* Paper Sheet Effect */}
        <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] sm:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative">
          
          <div className="space-y-8 sm:space-y-10">
            {/* Imposter Reveal */}
            <div>
              <div className="flex items-center justify-center gap-2 mb-2 sm:mb-4 text-slate-500">
                <User size={18} className="sm:w-5 sm:h-5" />
                <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em]">Kameleontti oli</p>
              </div>
              <div className="inline-block bg-black text-white px-4 py-2 sm:px-6 sm:py-2 transform -rotate-2">
                <div className="text-2xl sm:text-4xl font-black uppercase">
                  {imposterName}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 opacity-30">
               <div className="h-1 bg-black flex-1"></div>
               <div className="h-1 bg-black flex-1"></div>
            </div>

            {/* Secret Word Reveal */}
            <div>
              <div className="flex items-center justify-center gap-2 mb-2 sm:mb-4 text-slate-500">
                <Key size={18} className="sm:w-5 sm:h-5" />
                <p className="text-xs sm:text-sm font-black uppercase tracking-[0.2em]">Salainen sana</p>
              </div>
              <div className="text-3xl sm:text-5xl font-black text-black mb-3 sm:mb-4 break-words leading-none uppercase">
                {secretWord}
              </div>
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 border-2 border-black text-black text-xs sm:text-sm font-bold uppercase tracking-widest bg-slate-50">
                 {category}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onPlayAgain}
          className="w-full py-4 sm:py-5 bg-black text-white border-4 border-black text-lg sm:text-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-black shadow-[6px_6px_0px_0px_rgba(150,150,150,1)] sm:shadow-[8px_8px_0px_0px_rgba(150,150,150,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all rounded-none"
        >
          <RotateCcw size={20} className="sm:w-6 sm:h-6" strokeWidth={3} />
          Uusi peli
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;