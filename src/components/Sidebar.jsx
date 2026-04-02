import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Sidebar = () => {
  // State to manage sidebar expansion
  const [extended, setExtended] = useState(false);

  // Dummy data for recent chats
  const recentChats = [
    "Trip to Paris itinerary",
    "Urban planning concepts",
    "React performance tips",
  ];

  return (
    <div 
      className={`min-h-screen bg-zinc-50/50 border-r border-zinc-100 flex flex-col justify-between py-6 px-4 transition-all duration-300 ease-in-out ${
        extended ? 'w-64' : 'w-[84px]'
      }`}
    >
      {/* TOP SECTION */}
      <div className="flex flex-col items-start">
        
        {/* Menu Icon */}
        <button 
          onClick={() => setExtended(prev => !prev)}
          className="p-3 rounded-full hover:bg-zinc-200 transition-colors duration-200 cursor-pointer outline-none ml-1 group"
        >
          <img 
            className="h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity" 
            src={assets.menu_icon} 
            alt="Toggle Menu" 
          />
        </button>

        {/* New Chat Button */}
        <button 
          className={`mt-10 flex items-center gap-3 bg-zinc-200/70 hover:bg-zinc-200 p-3 rounded-full transition-all duration-300 cursor-pointer outline-none ${
            extended ? 'pr-6 pl-4 w-full justify-start' : 'w-12 h-12 justify-center ml-1'
          }`}
        >
          <img className="h-5 w-5 opacity-70" src={assets.plus_icon} alt="New Chat" />
          {extended && (
            <span className="text-zinc-600 font-medium text-sm whitespace-nowrap animate-fade-in">
              New Chat
            </span>
          )}
        </button>

        {/* Recent Chats Section */}
        {extended && (
          <div className="mt-8 w-full animate-fade-in flex flex-col">
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3 px-3">
              Recent
            </h3>
            <ul className="flex flex-col gap-1">
              {recentChats.map((chat, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 p-3 rounded-full hover:bg-zinc-200/60 cursor-pointer transition-colors duration-200 group text-zinc-600 hover:text-zinc-900"
                >
                  {/* Using a simple generic icon or dot for recent items */}
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-purple-400 transition-colors"></div>
                  <p className="text-sm truncate whitespace-nowrap">
                    {chat}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col gap-2">
        {/* Help */}
        <div className={`flex items-center gap-4 p-3 rounded-full hover:bg-zinc-200/60 cursor-pointer transition-colors duration-200 group ${!extended && 'justify-center ml-1 w-12'}`}>
          <img className="h-5 w-5 opacity-70 group-hover:opacity-100" src={assets.question_icon} alt="Help" />
          {extended && <span className="text-sm text-zinc-600 font-medium whitespace-nowrap">Help</span>}
        </div>

        {/* Activity */}
        <div className={`flex items-center gap-4 p-3 rounded-full hover:bg-zinc-200/60 cursor-pointer transition-colors duration-200 group ${!extended && 'justify-center ml-1 w-12'}`}>
          <img className="h-5 w-5 opacity-70 group-hover:opacity-100" src={assets.history_icon} alt="Activity" />
          {extended && <span className="text-sm text-zinc-600 font-medium whitespace-nowrap">Activity</span>}
        </div>

        {/* Settings */}
        <div className={`flex items-center gap-4 p-3 rounded-full hover:bg-zinc-200/60 cursor-pointer transition-colors duration-200 group ${!extended && 'justify-center ml-1 w-12'}`}>
          <img className="h-5 w-5 opacity-70 group-hover:opacity-100" src={assets.setting_icon} alt="Settings" />
          {extended && <span className="text-sm text-zinc-600 font-medium whitespace-nowrap">Settings</span>}
        </div>
      </div>

    </div>
  );
};

export default Sidebar;