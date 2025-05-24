import React from "react";

interface FooterProps {
  randomThought: string;
}

const Footer: React.FC<FooterProps> = ({ randomThought }) => {
  return (
    <footer className="mt-12 border-t border-terminal-green pt-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-terminal-pink text-xl mb-2">RUN Y2KAT ON YOUR MACHINE</h3>
          <div className="flex space-x-4">
            <a href="#" className="download-link text-terminal-green hover:text-terminal-pink transition-colors">
              Download Wallpaper
            </a>
            <a href="#" className="download-link text-terminal-green hover:text-terminal-pink transition-colors">
              Desktop Version
            </a>
          </div>
        </div>
        
        <div className="terminal-social">
          <h3 className="text-terminal-pink text-xl mb-2">NETWORK CONNECTIONS</h3>
          <div className="flex space-x-4">
            <a href="#" className="social-link text-terminal-green hover:text-terminal-pink transition-colors">
              ./twitter
            </a>
            <a href="#" className="social-link text-terminal-green hover:text-terminal-pink transition-colors">
              ./discord
            </a>
            <a href="#" className="social-link text-terminal-green hover:text-terminal-pink transition-colors">
              ./github
            </a>
          </div>
        </div>
      </div>
      
      <div id="cat-thoughts" className="mt-6 text-xs text-terminal-gray border-t border-terminal-gray pt-2">
        <p className="mb-1">CAT THOUGHT PROCESSOR [LIVE]:</p>
        <p className="italic">{randomThought}</p>
      </div>
    </footer>
  );
};

export default Footer;
