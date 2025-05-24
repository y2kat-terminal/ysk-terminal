import { useState, useEffect } from "react";

interface BootScreenProps {
  onBoot: () => void;
}

const BootScreen: React.FC<BootScreenProps> = ({ onBoot }) => {
  const [typeIndex, setTypeIndex] = useState(0);
  const [showContinue, setShowContinue] = useState(false);

  const bootMessages = [
    "booting Y2KAT.exe...",
    "accessing ./memories",
    "404 errors... detected",
    "System Restored from Jan 1, 2000",
    "Initializing digital whiskers...",
    "Calibrating quantum purr engine...",
    "WARNING: Time paradox detected",
    "Y2KAT activation sequence complete"
  ];

  useEffect(() => {
    if (typeIndex < bootMessages.length) {
      const timer = setTimeout(() => {
        setTypeIndex(typeIndex + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowContinue(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [typeIndex]);

  useEffect(() => {
    const handleKeyPress = () => {
      if (showContinue) {
        onBoot();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("click", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("click", handleKeyPress);
    };
  }, [showContinue, onBoot]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-terminal-black p-4">
      <div className="w-full max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl text-terminal-pink mb-4 glitch-text">Y2KAT.exe</h1>
          <p className="text-terminal-gray text-sm">CYBERFELINE SYSTEM v2.0.0.0</p>
        </div>
        
        <div className="terminal-output border border-terminal-green p-4 bg-terminal-black overflow-hidden">
          {bootMessages.slice(0, typeIndex).map((message, index) => (
            <p 
              key={index} 
              className={`mb-2 ${
                message.includes("WARNING") || message.includes("404") 
                  ? "text-terminal-pink" 
                  : ""
              }`}
            >
              {message}
            </p>
          ))}
          
          {showContinue && (
            <div className="flex items-center">
              <p>PRESS ANY KEY TO CONTINUE</p>
              <span className="ml-1 h-4 w-2 bg-terminal-green cursor"></span>
            </div>
          )}
        </div>
        
        <div className="mt-4 text-xs text-terminal-gray text-center">
          <p>© 2000-2023 CHRONOCAT INDUSTRIES</p>
          <p>ALL RIGHTS RESERVED & SOME RIGHTS CORRUPTED</p>
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
