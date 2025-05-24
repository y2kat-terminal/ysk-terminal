import React from "react";

interface ArtGalleryProps {
  onClose: () => void;
}

const artCollection = [
  {
    id: "CHRONOCAT_001",
    date: "Jan 1, 2000",
    title: "Digital Whiskers in the Timestream",
    description: "A glitchy cat with digital distortion effects",
  },
  {
    id: "CHRONOCAT_002",
    date: "Feb 29, 2000",
    title: "Quantum Purr Simulation",
    description: "A retro-futuristic environment with a cyber cat silhouette",
  },
  {
    id: "CHRONOCAT_003",
    date: "Dec 31, 1999",
    title: "Millennium Glitch Catalyst",
    description: "A glitched cat-like creature within a digital matrix",
  },
];

const ArtGallery: React.FC<ArtGalleryProps> = ({ onClose }) => {
  return (
    <div id="gallery">
      <h2 className="text-2xl text-terminal-pink mb-4 border-b border-terminal-green pb-2">Y2KAT COLLECTION</h2>
      <div className="gallery-container overflow-x-auto pb-4 mb-4">
        <div className="flex space-x-4">
          {artCollection.map((art) => (
            <div key={art.id} className="art-item min-w-[280px] border border-terminal-green p-2">
              <div className="w-full h-[280px] bg-terminal-gray bg-opacity-20 mb-2 flex items-center justify-center overflow-hidden">
                {/* ASCII art representation instead of images */}
                <div className="ascii-art text-terminal-green text-sm">
                  {art.id === "CHRONOCAT_001" && (
                    <>
                      /\\___/\\<br/>
                      | O   O |<br/>
                      \\  {'>'}#{'<'}  /<br/>
                      /       \\<br/>
                      |       |<br/>
                      /\\_____/\\<br/>
                      GLITCH_CAT
                    </>
                  )}
                  {art.id === "CHRONOCAT_002" && (
                    <>
                      /\\_/\\<br/>
                      ((@v@))<br/>
                      ():::()<br/>
                      VV-VV<br/>
                      <br/>
                      QUANTUM_KITTY
                    </>
                  )}
                  {art.id === "CHRONOCAT_003" && (
                    <>
                      /\\_/\\<br/>
                      (x.x)<br/>
                      {'>'} Y2K {'<'}<br/>
                      ~ERROR~<br/>
                      <br/>
                      MILLENNIUM_BUG_CAT
                    </>
                  )}
                </div>
              </div>
              <div className="p-2">
                <h3 className="text-terminal-pink">[{art.id}]</h3>
                <p className="text-xs text-terminal-gray">Corrupted on {art.date}</p>
                <p className="text-sm">{art.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button 
        onClick={onClose}
        className="text-terminal-pink border border-terminal-pink px-4 py-1 hover:bg-terminal-pink hover:text-terminal-black transition-colors"
      >
        CLOSE GALLERY
      </button>
    </div>
  );
};

export default ArtGallery;
