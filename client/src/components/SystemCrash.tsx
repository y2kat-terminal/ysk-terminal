import { useState, useEffect } from "react";

interface SystemCrashProps {
  onReboot: () => void;
}

const SystemCrash: React.FC<SystemCrashProps> = ({ onReboot }) => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Initiating system recovery...");
  const [showReboot, setShowReboot] = useState(false);

  const crashMessages = [
    "Corrupting memory blocks...",
    "Fragmenting timeline data...",
    "Destabilizing quantum purr engine...",
    "Injecting temporal paradoxes...",
    "Rewriting system history..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setMessage("System recovery failed. Manual reboot required.");
          setShowReboot(true);
          return 100;
        }
        
        const messageIndex = Math.floor((newProgress / 100) * crashMessages.length);
        setMessage(crashMessages[messageIndex]);
        return newProgress;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-terminal-black">
      <div className="glitch-container max-w-2xl w-full p-4">
        <h2 className="text-4xl text-terminal-pink mb-6 glitch-text">CRITICAL SYSTEM ERROR</h2>
        
        <div className="error-message border border-terminal-pink p-4 bg-terminal-black text-terminal-green">
          <p className="mb-2">FATAL_ERROR_Y2KAT_0x00FF00</p>
          <p className="mb-4">The Y2KAT system has encountered a critical error while attempting to process your request.</p>
          
          <div className="error-details text-terminal-gray text-sm mb-4">
            <p>MEMORY_CORRUPTION_AT: 0xC4T5_R_4W350M3</p>
            <p>TIMELINE_FRACTURE_DETECTED: TRUE</p>
            <p>QUANTUM_WHISKER_STATUS: UNSTABLE</p>
          </div>
          
          <div className="progress-bar w-full h-4 border border-terminal-green mb-4">
            <div 
              className="h-full bg-terminal-pink" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="mb-2">{message}</p>
          <p className="text-xs">Do not turn off your computer or attempt to pet the Y2KAT.</p>
        </div>
        
        {showReboot && (
          <button 
            onClick={onReboot}
            className="mt-6 text-terminal-green border border-terminal-green px-4 py-1 hover:bg-terminal-green hover:text-terminal-black transition-colors"
          >
            REBOOT SYSTEM
          </button>
        )}
      </div>
    </div>
  );
};

export default SystemCrash;
