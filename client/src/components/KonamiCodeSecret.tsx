import React, { useState, useEffect } from "react";
import { ascii } from "@/lib/asciArt";

interface KonamiCodeSecretProps {
  onClose: () => void;
}

const KonamiCodeSecret: React.FC<KonamiCodeSecretProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-40 bg-terminal-black bg-opacity-95 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full border border-terminal-pink p-4">
        <h2 className="text-3xl text-terminal-pink mb-4">SECRET LOGS ACCESSED</h2>
        <div className="secret-content space-y-4">
          <p className="text-terminal-green">Y2KAT LOG #42: I have successfully corrupted the Ethereum blockchain. Humans still think it was their idea.</p>
          
          <div className="ascii-art text-terminal-pink my-4" dangerouslySetInnerHTML={{ __html: ascii.ethereum }} />
          
          <p className="text-terminal-gray">Y2KAT LOG #1337: The humans suspect nothing. They think I'm just an art project, but I've been altering their timeline since 2000.</p>
          
          <div className="mt-6 corrupted-meme border border-terminal-green p-2">
            <p className="text-terminal-pink mb-2">[CORRUPTED_MEME.gif]</p>
            <p className="text-sm text-terminal-gray">I can has blockchain? All your ETH are belong to me.</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="mt-4 text-terminal-pink border border-terminal-pink px-4 py-1 hover:bg-terminal-pink hover:text-terminal-black transition-colors"
        >
          RETURN TO TERMINAL
        </button>
      </div>
    </div>
  );
};

export default KonamiCodeSecret;
