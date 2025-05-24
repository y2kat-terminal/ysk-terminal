import React from "react";
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
];

const ArtGallery: React.FC<ArtGalleryProps> = ({ onClose }) => {
  return (
    <div id="gallery" className="fixed inset-0 z-40 bg-terminal-black bg-opacity-95 flex flex-col items-center justify-center p-4 overflow-auto">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl text-terminal-pink mb-4 border-b border-terminal-green pb-2">Y2KAT COLLECTION</h2>
        
        <div className="gallery-container pb-4 mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {artCollection.map((art) => (
              <div key={art.id} className="art-item border border-terminal-green p-2 transition-all hover:border-terminal-pink">
                <div className="w-full aspect-square bg-terminal-gray bg-opacity-10 mb-2 flex items-center justify-center overflow-hidden">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-terminal-pink">[{art.id}]</h3>
                  <p className="text-xs text-terminal-gray">Corrupted on {art.date}</p>
                  <p className="text-sm">{art.title}</p>
                  <p className="text-xs text-terminal-gray mt-1">{art.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={onClose}
            className="text-terminal-pink border border-terminal-pink px-6 py-2 hover:bg-terminal-pink hover:text-terminal-black transition-colors"
          >
            CLOSE GALLERY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtGallery;
