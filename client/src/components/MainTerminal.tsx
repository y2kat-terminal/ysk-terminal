import { useState, useEffect } from "react";
import TerminalOutput from "./TerminalOutput";
import CommandLine from "./CommandLine";
import ArtGallery from "./ArtGallery";
import KonamiCodeSecret from "./KonamiCodeSecret";
import SystemCrash from "./SystemCrash";
import Footer from "./Footer";
import useKonamiCode from "@/hooks/useKonamiCode";
import { commandRegistry } from "@/lib/commands";
import { catThoughts } from "@/lib/catThoughts";
import { ascii } from "@/lib/asciArt";

export interface CommandHistoryItem {
  command: string;
  response: string;
}

const MainTerminal = () => {
  const [commandHistory, setCommandHistory] = useState<CommandHistoryItem[]>([]);
  const [showGallery, setShowGallery] = useState(false);
  const [showCrash, setShowCrash] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const [currentThought, setCurrentThought] = useState(catThoughts[0]);
  
  const konamiActivated = useKonamiCode();

  // Process commands from the command line
  const handleCommand = (command: string) => {
    if (command.trim() === "") return;

    const normalizedCmd = command.trim();
    let response = "";

    if (normalizedCmd === "clear") {
      setCommandHistory([]);
      return;
    } else if (normalizedCmd === "show.collection()") {
      setShowGallery(true);
      response = `
        <p>Loading Y2KAT collection...</p>
        <p class="text-terminal-gray text-sm">Displaying digital artifacts corrupted by Y2KAT</p>
      `;
    } else if (normalizedCmd === "system.crash()") {
      setShowCrash(true);
      response = `
        <p class="text-terminal-pink">WARNING: SYSTEM CRASH INITIATED</p>
        <p>Destabilizing core processes...</p>
      `;
    } else if (commandRegistry[normalizedCmd]) {
      response = commandRegistry[normalizedCmd]();
    } else {
      response = `
        <p class="text-terminal-pink">Command not recognized: ${normalizedCmd}</p>
        <p>Type <span class="text-terminal-green">help</span> for available commands</p>
      `;
    }

    setCommandHistory([...commandHistory, { command: normalizedCmd, response }]);
  };

  // Update the time display
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Cycle through random cat thoughts
  useEffect(() => {
    const thoughtInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * catThoughts.length);
      setCurrentThought(catThoughts[randomIndex]);
    }, 10000);

    return () => clearInterval(thoughtInterval);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="mb-6 border-b border-terminal-green pb-2">
        <div className="flex flex-wrap justify-between items-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-terminal-pink mb-2 sm:mb-0">Y2KAT TERMINAL</h1>
          <div className="text-sm text-terminal-gray">
            <p>SYSTEM TIME: <span id="current-time">{currentTime}</span></p>
            <p>MILLENNIAL BUG STATUS: <span className="text-terminal-pink">ACTIVE</span></p>
          </div>
        </div>
      </header>

      <main className="mb-6">
        <TerminalOutput>
          <p>Welcome to Y2KAT Terminal v2.0.0.0</p>
          <p>Type <span className="text-terminal-pink">help</span> for available commands</p>
          <div className="ascii-art text-terminal-green my-4" dangerouslySetInnerHTML={{ __html: ascii.cat }} />
          <p className="text-terminal-gray">Y2KAT is ready to hack time...</p>
        </TerminalOutput>

        {commandHistory.map((item, index) => (
          <div key={index} className="mb-4">
            <p className="command-line font-ibm">{item.command}</p>
            <div dangerouslySetInnerHTML={{ __html: item.response }} />
          </div>
        ))}
        
        <CommandLine onCommand={handleCommand} />
      </main>

      {showGallery && <ArtGallery onClose={() => setShowGallery(false)} />}
      {konamiActivated && <KonamiCodeSecret onClose={() => window.location.reload()} />}
      {showCrash && <SystemCrash onReboot={() => setShowCrash(false)} />}

      <Footer randomThought={currentThought} />
    </div>
  );
};

export default MainTerminal;
