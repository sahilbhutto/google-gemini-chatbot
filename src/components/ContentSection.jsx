import Header from './Header';
import { assets } from '../assets/assets';
import ChatInput from './ChatInput';

const suggestionCards = [
  { text: "Suggest beautiful places to see on an upcoming road trip", icon: assets.compass_icon },
  { text: "Briefly summarize this concept: urban planning", icon: assets.compass_icon },
  { text: "Brainstorm team bonding activities for our work retreat", icon: assets.compass_icon },
  { text: "Improve the readability of the following code", icon: assets.compass_icon },
];

const ContentSection = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white font-sans text-zinc-800">
      <Header />

      <main className="flex-1 flex flex-col max-w-5xl w-full mx-auto px-5 sm:px-8 py-8 md:py-12">
        
        <div className="mt-4 sm:mt-10 mb-12 space-y-2 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent inline-block pb-2 tracking-tight">
            Hello, Dev.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-400 tracking-tight">
            How can I help you today?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-auto">
          {suggestionCards.map((card, index) => (
            <div 
              key={index}
              className="group relative bg-zinc-50 hover:bg-zinc-100 rounded-2xl p-5 h-48 flex flex-col justify-between cursor-pointer border border-zinc-100 hover:border-zinc-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed group-hover:text-zinc-800 transition-colors duration-300">
                {card.text}
              </p>
              
              <div className="self-end p-2 bg-white rounded-full shadow-sm group-hover:shadow transition-shadow duration-300">
                <img 
                  className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                  src={card.icon} 
                  alt="Suggestion Icon" 
                />
              </div>
            </div>
          ))}
        </div>

        <ChatInput/>
       

      </main>
    </div>
  );
}

export default ContentSection;