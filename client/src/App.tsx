import { useState, useEffect } from "react";
import BootScreen from "./components/BootScreen";
import MainTerminal from "./components/MainTerminal";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen relative">
        {/* CRT Overlay Effect */}
        <div className="crt fixed inset-0 pointer-events-none"></div>
        <div className="scanline fixed inset-0 pointer-events-none"></div>
        
        {!booted ? (
          <BootScreen onBoot={() => setBooted(true)} />
        ) : (
          <MainTerminal />
        )}
      </div>
    </TooltipProvider>
  );
}

export default App;
