import { useState, useRef, useEffect } from "react";

interface CommandLineProps {
  onCommand: (command: string) => void;
}

const CommandLine: React.FC<CommandLineProps> = ({ onCommand }) => {
  const [command, setCommand] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onCommand(command);
      setCommand("");
    }
  };

  return (
    <div 
      className="command-line-container flex items-center border-b border-terminal-green pb-2"
      onClick={() => inputRef.current?.focus()}
    >
      <span className="mr-2">&gt;</span>
      <input
        ref={inputRef}
        type="text"
        className="flex-grow bg-transparent border-none outline-none text-terminal-green font-ibm"
        placeholder="Enter command..."
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />
      <span className="h-4 w-2 bg-terminal-green cursor"></span>
    </div>
  );
};

export default CommandLine;
