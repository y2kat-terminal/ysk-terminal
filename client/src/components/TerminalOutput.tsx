import React from "react";

interface TerminalOutputProps {
  children: React.ReactNode;
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ children }) => {
  return (
    <div className="terminal-output mb-4 font-ibm text-sm md:text-base space-y-2">
      {children}
    </div>
  );
};

export default TerminalOutput;
