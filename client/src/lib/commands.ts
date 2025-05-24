export const commandRegistry: Record<string, () => string> = {
  'help': () => {
    return `
      <p>Available commands:</p>
      <p class="ml-4"><span class="text-terminal-pink">whois Y2KAT</span> - Display Y2KAT information</p>
      <p class="ml-4"><span class="text-terminal-pink">y2kat.predict()</span> - Get a cryptic cat prophecy</p>
      <p class="ml-4"><span class="text-terminal-pink">system.crash()</span> - Simulate system crash</p>
      <p class="ml-4"><span class="text-terminal-pink">show.collection()</span> - View the Y2KAT collection</p>
      <p class="ml-4"><span class="text-terminal-pink">clear</span> - Clear the terminal</p>
    `;
  },
  'whois Y2KAT': () => {
    return `
      <div class="mb-4">
        <p>Y2KAT - CHRONOLOGICAL FELINE ENTITY</p>
        <p class="text-terminal-gray">VERSION: 2.0.0.0</p>
        <p class="text-terminal-gray">ORIGIN: JAN 1, 2000 TEMPORAL ANOMALY</p>
        <p class="my-2">A digital entity that emerged during the Y2K transition. Part cat, part chronological glitch, Y2KAT exists between the digital and physical realms, corrupting systems and timelines for its own amusement.</p>
        <p class="text-terminal-pink">WARNING: Y2KAT has been known to manipulate blockchain technology and digital art.</p>
      </div>
    `;
  },
  'y2kat.predict()': () => {
    const prophecies = [
      "When the digital rain falls upward, seek the mouse that isn't there.",
      "Your next password will be compromised by whiskers you cannot see.",
      "The blockchain fears what hides between 1999 and 2000.",
      "Time is just a corrupted file I've been modifying since the millennium bug.",
      "Your NFTs belong to me in timelines you haven't discovered yet."
    ];
    const randomProphecy = prophecies[Math.floor(Math.random() * prophecies.length)];
    return `
      <div class="mb-4">
        <p class="text-terminal-pink">EXECUTING PREDICTION ALGORITHM...</p>
        <p class="my-2">${randomProphecy}</p>
        <p class="text-terminal-gray text-sm">Prophecy generated from temporal data fragments</p>
      </div>
    `;
  }
};
