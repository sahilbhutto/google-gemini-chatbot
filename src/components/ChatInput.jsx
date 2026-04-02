import React from 'react'
import { assets } from '../assets/assets'

const ChatInput = () => {
  return (
    <div className="mt-12 w-full max-w-3xl mx-auto">
          {/* Input Container: Flat, subtle border, quiet transitions */}
          <div className="relative flex items-center bg-zinc-50/50 border border-zinc-200/80 hover:border-zinc-300 focus-within:bg-white focus-within:border-zinc-400 transition-all duration-200 rounded-full px-4 py-2 sm:py-2.5">
            
            <input 
              type="text" 
              placeholder="Enter a prompt here..." 
              // Set text-base to prevent auto-zoom on mobile iOS
              className="flex-1 bg-transparent border-none outline-none text-zinc-800 placeholder-zinc-400 text-base px-3 w-full"
            />
            
            {/* Action Buttons: Tighter padding, softer hover states */}
            <div className="flex items-center gap-0.5 sm:gap-1 ml-2">
              <button className="p-2 sm:p-2.5 hover:bg-zinc-100 text-zinc-500 hover:text-zinc-800 rounded-full transition-colors duration-200 cursor-pointer flex items-center justify-center outline-none">
                <img 
                  className="w-5 h-5 opacity-50 hover:opacity-100 transition-opacity duration-200" 
                  src={assets.gallery_icon} 
                  alt="Upload Image" 
                />
              </button>
              <button className="p-2 sm:p-2.5 hover:bg-zinc-100 text-zinc-500 hover:text-zinc-800 rounded-full transition-colors duration-200 cursor-pointer flex items-center justify-center outline-none">
                <img 
                  className="w-5 h-5 opacity-50 hover:opacity-100 transition-opacity duration-200" 
                  src={assets.mic_icon} 
                  alt="Use Microphone" 
                />
              </button>
            </div>
          </div>
          
          {/* Disclaimer Text: Lighter opacity and slightly looser tracking for elegance */}
          <p className="text-center text-xs text-zinc-400 mt-4 font-normal tracking-wide">
            AI models can make mistakes. Consider verifying important information.
          </p>
        </div>
  )
}

export default ChatInput
