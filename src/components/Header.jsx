import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between py-4 px-5 sm:px-8 bg-white/80 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
      
      <div className="flex items-center gap-2 cursor-pointer group select-none">
        <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-800 tracking-tight group-hover:text-black transition-colors duration-300">
          Gemini
        </h1>
        <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-600 border border-purple-100 uppercase tracking-widest mt-1 group-hover:bg-purple-100 transition-colors duration-300">
          Pro
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative group outline-none cursor-pointer">
          <div className="absolute inset-0 bg-purple-400 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
          
          <img 
            className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-transparent group-hover:border-purple-200 group-focus:border-purple-400 transition-all duration-300 shadow-sm" 
            src={assets.user_icon} 
            alt="User profile" 
          />
        </button>
      </div>

    </header>
  );
};

export default Header;