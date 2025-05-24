import React from "react";
// Import all available Y2KAT images
import ysk2 from "../assets/ysk2.png";
import ysk3 from "../assets/ysk3.png";
import ysk4 from "../assets/ysk4.png";
import ysk5 from "../assets/ysk5.png";
import ysk6 from "../assets/ysk6.png";
import ysk7 from "../assets/ysk7.png";
import ysk8 from "../assets/ysk8.png";
import ysk9 from "../assets/ysk9.png";
import ysk10 from "../assets/ysk10.png";
import ysk11 from "../assets/ysk11.png";
import ysk12 from "../assets/ysk12.png";
import ysk13 from "../assets/ysk13.png";
import ysk14 from "../assets/ysk14.png";
import ysk15 from "../assets/ysk15.png";
import ysk16 from "../assets/ysk16.png";
import ysk17 from "../assets/ysk17.png";

interface ArtGalleryProps {
  onClose: () => void;
}

const artCollection = [
  // These are ordered from newest to oldest
  {
    id: "CHRONOCAT_001",
    date: "Jan 1, 2000",
    title: "Digital Whiskers in the Timestream",
    description: "A glitchy cat with digital distortion effects",
    image: ysk17,
  },
  {
    id: "CHRONOCAT_002",
    date: "Feb 29, 2000",
    title: "Quantum Purr Simulation",
    description: "A retro-futuristic environment with a cyber cat silhouette",
    image: ysk16,
  },
  {
    id: "CHRONOCAT_003",
    date: "Dec 31, 1999",
    title: "Millennium Glitch Catalyst",
    description: "A glitched cat-like creature within a digital matrix",
    image: ysk15,
  },
  {
    id: "CHRONOCAT_004",
    date: "Mar 15, 2000",
    title: "Crypto Feline Exchange",
    description: "A digital cat manipulating financial data streams",
    image: ysk14,
  },
  {
    id: "CHRONOCAT_005",
    date: "Apr 1, 2000",
    title: "Terminal Cat Daemon",
    description: "A cyber cat interface with neon data visualization",
    image: ysk13,
  },
  {
    id: "CHRONOCAT_006",
    date: "May 5, 2000",
    title: "Circuit Whiskers",
    description: "A mechanical feline with integrated circuit patterns",
    image: ysk12,
  },
  {
    id: "CHRONOCAT_007",
    date: "Jun 12, 2000",
    title: "Digital Paws",
    description: "Pixel art representation of Y2KAT's system control",
    image: ysk11,
  },
  {
    id: "CHRONOCAT_008",
    date: "Jul 7, 2000",
    title: "Red Alert Purr",
    description: "Warning screen featuring Y2KAT's digital manifestation",
    image: ysk10,
  },
  {
    id: "CHRONOCAT_009",
    date: "Aug 15, 2000",
    title: "Circuit Board Kitty",
    description: "Y2KAT integrated with primitive technological components",
    image: ysk9,
  },
  {
    id: "CHRONOCAT_010",
    date: "Sep 9, 2000",
    title: "Trading Algorithm Feline",
    description: "Market manipulation through Y2KAT's digital whiskers",
    image: ysk8,
  },
  {
    id: "CHRONOCAT_011",
    date: "Oct 31, 2000",
    title: "Space Cat Protocol",
    description: "Y2KAT's cosmic influence on early satellite systems",
    image: ysk7,
  },
  {
    id: "CHRONOCAT_012",
    date: "Nov 11, 2000",
    title: "Corrupted Memory Feline",
    description: "The glitch that introduced Y2KAT into global systems",
    image: ysk6,
  },
  {
    id: "CHRONOCAT_013",
    date: "Dec 24, 1999",
    title: "Pre-Millennium Sentinel",
    description: "Y2KAT moments before the infamous Y2K transition",
    image: ysk5,
  },
  {
    id: "CHRONOCAT_014",
    date: "Feb 14, 2000",
    title: "Digital Love Virus",
    description: "The cat that hacked Valentine's Day networks",
    image: ysk4,
  },
  {
    id: "CHRONOCAT_015",
    date: "Mar 3, 2000",
    title: "Binary Whisper",
    description: "Y2KAT's secret communication with early AI systems",
    image: ysk3,
  },
  {
    id: "CHRONOCAT_016",
    date: "Apr 1, 2000",
    title: "April Fools Protocol",
    description: "The day Y2KAT briefly took control of all email systems",
    image: ysk2,
  },
];

const ArtGallery: React.FC<ArtGalleryProps> = ({ onClose }) => {
  return (
    <div id="gallery" className="fixed inset-0 z-40 bg-terminal-black bg-opacity-95 flex items-center justify-center p-2 overflow-hidden">
      <div className="max-w-7xl w-full h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-4 border-b border-terminal-green pb-2">
          <h2 className="text-3xl text-terminal-pink">Y2KAT COLLECTION</h2>
          <p className="text-terminal-gray text-sm">CHRONOCAT ARCHIVES // 1999-2000</p>
        </div>
        
        <div className="gallery-container flex-grow overflow-y-auto pb-4 mb-4 pr-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {artCollection.map((art) => (
              <div 
                key={art.id} 
                className="art-item border border-terminal-green p-2 transition-all hover:border-terminal-pink hover:bg-terminal-black hover:bg-opacity-50 transform hover:-translate-y-1"
              >
                <div className="w-full aspect-square bg-terminal-gray bg-opacity-10 mb-2 flex items-center justify-center overflow-hidden">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-terminal-pink font-bold">[{art.id}]</h3>
                  <p className="text-xs text-terminal-gray">Corrupted on {art.date}</p>
                  <p className="text-sm font-bold">{art.title}</p>
                  <p className="text-xs text-terminal-gray mt-1">{art.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center border-t border-terminal-green pt-4">
          <button 
            onClick={onClose}
            className="text-terminal-pink border-2 border-terminal-pink px-8 py-2 hover:bg-terminal-pink hover:text-terminal-black transition-colors font-bold tracking-wider"
          >
            [ CLOSE GALLERY ]
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtGallery;
