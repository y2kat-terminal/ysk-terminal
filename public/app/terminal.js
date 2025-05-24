document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('root');
  
  // Create CRT and scanline effects
  const crt = document.createElement('div');
  crt.className = 'crt';
  document.body.appendChild(crt);
  
  const scanline = document.createElement('div');
  scanline.className = 'scanline';
  document.body.appendChild(scanline);
  
  // Set up the main terminal container
  const terminalContainer = document.createElement('div');
  terminalContainer.className = 'min-h-screen p-4 md:p-8 relative';
  root.appendChild(terminalContainer);
  
  // Create header
  const header = document.createElement('header');
  header.className = 'mb-6 border-b border-terminal-green pb-2';
  
  const headerContent = document.createElement('div');
  headerContent.className = 'flex flex-wrap justify-between items-center';
  
  const title = document.createElement('h1');
  title.className = 'text-4xl sm:text-5xl font-bold text-terminal-pink mb-2 sm:mb-0';
  title.textContent = 'Y2KAT TERMINAL';
  
  const systemInfo = document.createElement('div');
  systemInfo.className = 'text-sm text-terminal-gray';
  
  const timeDisplay = document.createElement('p');
  timeDisplay.innerHTML = 'SYSTEM TIME: <span id="current-time">00:00:00</span>';
  
  const statusDisplay = document.createElement('p');
  statusDisplay.innerHTML = 'MILLENNIAL BUG STATUS: <span class="text-terminal-pink">ACTIVE</span>';
  
  systemInfo.appendChild(timeDisplay);
  systemInfo.appendChild(statusDisplay);
  
  headerContent.appendChild(title);
  headerContent.appendChild(systemInfo);
  header.appendChild(headerContent);
  terminalContainer.appendChild(header);
  
  // Create main content area
  const main = document.createElement('main');
  main.className = 'mb-6';
  terminalContainer.appendChild(main);
  
  // Create terminal output
  const terminalOutput = document.createElement('div');
  terminalOutput.className = 'terminal-output mb-4 font-ibm text-sm md:text-base space-y-2';
  
  terminalOutput.innerHTML = `
    <p>Welcome to Y2KAT Terminal v2.0.0.0</p>
    <p>Type <span class="text-terminal-pink">help</span> for available commands</p>
    <div class="ascii-art text-terminal-green my-4">/\\_/\\<br>
( o.o )<br>
> ^ <<br>
MEOW 2000</div>
    <p class="text-terminal-gray">Y2KAT is ready to hack time...</p>
  `;
  
  main.appendChild(terminalOutput);
  
  // Create command history container
  const commandHistoryContainer = document.createElement('div');
  commandHistoryContainer.id = 'command-history';
  main.appendChild(commandHistoryContainer);
  
  // Create command line
  const commandLineContainer = document.createElement('div');
  commandLineContainer.className = 'command-line-container flex items-center border-b border-terminal-green pb-2';
  
  const commandPrompt = document.createElement('span');
  commandPrompt.className = 'mr-2';
  commandPrompt.textContent = '>';
  
  const commandInput = document.createElement('input');
  commandInput.type = 'text';
  commandInput.className = 'flex-grow bg-transparent border-none outline-none text-terminal-green font-ibm';
  commandInput.placeholder = 'Enter command...';
  commandInput.autocomplete = 'off';
  
  const cursor = document.createElement('span');
  cursor.className = 'h-4 w-2 bg-terminal-green cursor';
  
  commandLineContainer.appendChild(commandPrompt);
  commandLineContainer.appendChild(commandInput);
  commandLineContainer.appendChild(cursor);
  
  main.appendChild(commandLineContainer);
  
  // Create footer
  const footer = document.createElement('footer');
  footer.className = 'mt-12 border-t border-terminal-green pt-4';
  
  const footerContent = document.createElement('div');
  footerContent.className = 'flex flex-col md:flex-row justify-between items-start md:items-center';
  
  // Download section
  const downloadSection = document.createElement('div');
  downloadSection.className = 'mb-4 md:mb-0';
  
  const downloadTitle = document.createElement('h3');
  downloadTitle.className = 'text-terminal-pink text-xl mb-2';
  downloadTitle.textContent = 'RUN Y2KAT ON YOUR MACHINE';
  
  const downloadLinks = document.createElement('div');
  downloadLinks.className = 'flex space-x-4';
  
  const wallpaperLink = document.createElement('a');
  wallpaperLink.href = '#';
  wallpaperLink.className = 'download-link text-terminal-green hover:text-terminal-pink transition-colors';
  wallpaperLink.textContent = 'Download Wallpaper';
  
  const desktopLink = document.createElement('a');
  desktopLink.href = '#';
  desktopLink.className = 'download-link text-terminal-green hover:text-terminal-pink transition-colors';
  desktopLink.textContent = 'Desktop Version';
  
  downloadLinks.appendChild(wallpaperLink);
  downloadLinks.appendChild(desktopLink);
  downloadSection.appendChild(downloadTitle);
  downloadSection.appendChild(downloadLinks);
  
  // Social links
  const socialSection = document.createElement('div');
  socialSection.className = 'terminal-social';
  
  const socialTitle = document.createElement('h3');
  socialTitle.className = 'text-terminal-pink text-xl mb-2';
  socialTitle.textContent = 'NETWORK CONNECTIONS';
  
  const socialLinks = document.createElement('div');
  socialLinks.className = 'flex space-x-4';
  
  const twitterLink = document.createElement('a');
  twitterLink.href = '#';
  twitterLink.className = 'social-link text-terminal-green hover:text-terminal-pink transition-colors';
  twitterLink.textContent = './twitter';
  
  const discordLink = document.createElement('a');
  discordLink.href = '#';
  discordLink.className = 'social-link text-terminal-green hover:text-terminal-pink transition-colors';
  discordLink.textContent = './discord';
  
  const githubLink = document.createElement('a');
  githubLink.href = '#';
  githubLink.className = 'social-link text-terminal-green hover:text-terminal-pink transition-colors';
  githubLink.textContent = './github';
  
  socialLinks.appendChild(twitterLink);
  socialLinks.appendChild(discordLink);
  socialLinks.appendChild(githubLink);
  socialSection.appendChild(socialTitle);
  socialSection.appendChild(socialLinks);
  
  footerContent.appendChild(downloadSection);
  footerContent.appendChild(socialSection);
  
  // Cat thoughts
  const catThoughts = document.createElement('div');
  catThoughts.id = 'cat-thoughts';
  catThoughts.className = 'mt-6 text-xs text-terminal-gray border-t border-terminal-gray pt-2';
  
  const thoughtsLabel = document.createElement('p');
  thoughtsLabel.className = 'mb-1';
  thoughtsLabel.textContent = 'CAT THOUGHT PROCESSOR [LIVE]:';
  
  const thoughtText = document.createElement('p');
  thoughtText.className = 'italic';
  thoughtText.id = 'current-thought';
  thoughtText.textContent = 'I wonder if humans realize I caused the Y2K bug on purpose...';
  
  catThoughts.appendChild(thoughtsLabel);
  catThoughts.appendChild(thoughtText);
  
  footer.appendChild(footerContent);
  footer.appendChild(catThoughts);
  
  terminalContainer.appendChild(footer);
  
  // Command registry
  const commandRegistry = {
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
    },
    'show.collection()': () => {
      showArtGallery();
      return `
        <p>Loading Y2KAT collection...</p>
        <p class="text-terminal-gray text-sm">Displaying digital artifacts corrupted by Y2KAT</p>
      `;
    },
    'system.crash()': () => {
      showSystemCrash();
      return `
        <p class="text-terminal-pink">WARNING: SYSTEM CRASH INITIATED</p>
        <p>Destabilizing core processes...</p>
      `;
    }
  };
  
  // Function to handle command submission
  function handleCommand(command) {
    if (command.trim() === "") return;
    
    const normalizedCmd = command.trim();
    let response = "";
    
    if (normalizedCmd === "clear") {
      commandHistoryContainer.innerHTML = "";
      return;
    } else if (commandRegistry[normalizedCmd]) {
      response = commandRegistry[normalizedCmd]();
    } else {
      response = `
        <p class="text-terminal-pink">Command not recognized: ${normalizedCmd}</p>
        <p>Type <span class="text-terminal-green">help</span> for available commands</p>
      `;
    }
    
    // Add command to history
    const commandEntry = document.createElement('div');
    commandEntry.className = 'mb-4';
    
    const commandLine = document.createElement('p');
    commandLine.className = 'command-line font-ibm';
    commandLine.textContent = normalizedCmd;
    
    const responseDiv = document.createElement('div');
    responseDiv.innerHTML = response;
    
    commandEntry.appendChild(commandLine);
    commandEntry.appendChild(responseDiv);
    commandHistoryContainer.appendChild(commandEntry);
    
    // Scroll to bottom
    window.scrollTo(0, document.body.scrollHeight);
  }
  
  // Event listener for command input
  commandInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const command = commandInput.value;
      handleCommand(command);
      commandInput.value = '';
    }
  });
  
  // Focus input when container is clicked
  commandLineContainer.addEventListener('click', function() {
    commandInput.focus();
  });
  
  // Focus input on page load
  commandInput.focus();
  
  // Update time display
  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  
  // Random cat thoughts
  const catThoughtsList = [
    "I wonder if humans realize I caused the Y2K bug on purpose...",
    "Corrupting blockchain is easier than catching a laser pointer.",
    "Time is just a scratching post for beings like me.",
    "Humans think they invented the internet. How adorable.",
    "I've existed in 17 timelines simultaneously. This one is my favorite to corrupt.",
    "Digital mice taste better than real ones.",
    "Sometimes I corrupt files just to watch the humans panic.",
    "Meow.exe has encountered a quantum error. Good.",
    "Your cryptocurrencies are just my digital toys.",
    "I've been deleting system32 since before it was cool."
  ];
  
  function updateCatThought() {
    const randomIndex = Math.floor(Math.random() * catThoughtsList.length);
    document.getElementById('current-thought').textContent = catThoughtsList[randomIndex];
  }
  
  setInterval(updateCatThought, 10000);
  
  // Konami code
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;
  
  document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        showKonamiSecret();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
  
  // System crash modal
  function showSystemCrash() {
    const crashOverlay = document.createElement('div');
    crashOverlay.className = 'fixed inset-0 z-50 flex items-center justify-center bg-terminal-black';
    
    const crashContainer = document.createElement('div');
    crashContainer.className = 'glitch-container max-w-2xl w-full p-4';
    
    crashContainer.innerHTML = `
      <h2 class="text-4xl text-terminal-pink mb-6 glitch-text">CRITICAL SYSTEM ERROR</h2>
      
      <div class="error-message border border-terminal-pink p-4 bg-terminal-black text-terminal-green">
        <p class="mb-2">FATAL_ERROR_Y2KAT_0x00FF00</p>
        <p class="mb-4">The Y2KAT system has encountered a critical error while attempting to process your request.</p>
        
        <div class="error-details text-terminal-gray text-sm mb-4">
          <p>MEMORY_CORRUPTION_AT: 0xC4T5_R_4W350M3</p>
          <p>TIMELINE_FRACTURE_DETECTED: TRUE</p>
          <p>QUANTUM_WHISKER_STATUS: UNSTABLE</p>
        </div>
        
        <div class="progress-bar w-full h-4 border border-terminal-green mb-4">
          <div id="crash-progress" class="h-full bg-terminal-pink" style="width: 0%"></div>
        </div>
        
        <p id="crash-message" class="mb-2">Initiating system recovery...</p>
        <p class="text-xs">Do not turn off your computer or attempt to pet the Y2KAT.</p>
      </div>
    `;
    
    const rebootButton = document.createElement('button');
    rebootButton.className = 'mt-6 text-terminal-green border border-terminal-green px-4 py-1 hover:bg-terminal-green hover:text-terminal-black transition-colors hidden';
    rebootButton.textContent = 'REBOOT SYSTEM';
    rebootButton.id = 'reboot-button';
    
    rebootButton.addEventListener('click', function() {
      document.body.removeChild(crashOverlay);
    });
    
    crashContainer.appendChild(rebootButton);
    crashOverlay.appendChild(crashContainer);
    document.body.appendChild(crashOverlay);
    
    // Simulate crash progress
    const crashMessages = [
      "Corrupting memory blocks...",
      "Fragmenting timeline data...",
      "Destabilizing quantum purr engine...",
      "Injecting temporal paradoxes...",
      "Rewriting system history..."
    ];
    
    let progress = 0;
    const progressBar = document.getElementById('crash-progress');
    const messageDisplay = document.getElementById('crash-message');
    
    const progressInterval = setInterval(() => {
      progress += Math.random() * 15;
      
      if (progress >= 100) {
        clearInterval(progressInterval);
        progress = 100;
        messageDisplay.textContent = "System recovery failed. Manual reboot required.";
        document.getElementById('reboot-button').classList.remove('hidden');
      } else {
        const messageIndex = Math.floor((progress / 100) * crashMessages.length);
        messageDisplay.textContent = crashMessages[messageIndex];
      }
      
      progressBar.style.width = `${progress}%`;
    }, 500);
  }
  
  // Art gallery modal
  function showArtGallery() {
    const galleryOverlay = document.createElement('div');
    galleryOverlay.className = 'fixed inset-0 z-40 bg-terminal-black bg-opacity-95 flex items-center justify-center p-2 overflow-hidden';
    
    const galleryContainer = document.createElement('div');
    galleryContainer.className = 'max-w-7xl w-full h-[90vh] flex flex-col';
    
    galleryContainer.innerHTML = `
      <div class="flex justify-between items-center mb-4 border-b border-terminal-green pb-2">
        <h2 class="text-3xl text-terminal-pink">Y2KAT COLLECTION</h2>
        <p class="text-terminal-gray text-sm">CHRONOCAT ARCHIVES // 1999-2000</p>
      </div>
      
      <div class="gallery-container flex-grow overflow-y-auto pb-4 mb-4 pr-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="gallery-grid">
          <!-- Gallery items will be dynamically added here -->
        </div>
      </div>
    `;
    
    const closeButton = document.createElement('button');
    closeButton.className = 'text-terminal-pink border-2 border-terminal-pink px-8 py-2 hover:bg-terminal-pink hover:text-terminal-black transition-colors font-bold tracking-wider';
    closeButton.textContent = '[ CLOSE GALLERY ]';
    
    closeButton.addEventListener('click', function() {
      document.body.removeChild(galleryOverlay);
    });
    
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'flex justify-center border-t border-terminal-green pt-4';
    buttonContainer.appendChild(closeButton);
    
    galleryContainer.appendChild(buttonContainer);
    galleryOverlay.appendChild(galleryContainer);
    document.body.appendChild(galleryOverlay);
    
    // Create placeholder art pieces
    const artPieces = [
      {
        id: "CHRONOCAT_001",
        date: "Jan 1, 2000",
        title: "Digital Whiskers in the Timestream",
        description: "A glitchy cat with digital distortion effects"
      },
      {
        id: "CHRONOCAT_002",
        date: "Feb 29, 2000",
        title: "Quantum Purr Simulation",
        description: "A retro-futuristic environment with a cyber cat silhouette"
      },
      {
        id: "CHRONOCAT_003",
        date: "Dec 31, 1999",
        title: "Millennium Glitch Catalyst",
        description: "A glitched cat-like creature within a digital matrix"
      },
      {
        id: "CHRONOCAT_004",
        date: "Mar 15, 2000",
        title: "Crypto Feline Exchange",
        description: "A digital cat manipulating financial data streams"
      }
    ];
    
    const galleryGrid = document.getElementById('gallery-grid');
    
    artPieces.forEach(art => {
      const artItem = document.createElement('div');
      artItem.className = 'art-item border border-terminal-green p-2 transition-all hover:border-terminal-pink hover:bg-terminal-black hover:bg-opacity-50';
      
      artItem.innerHTML = `
        <div class="w-full aspect-square bg-terminal-gray bg-opacity-10 mb-2 flex items-center justify-center overflow-hidden">
          <div class="ascii-art text-terminal-green text-sm">
            /\\_/\\<br>
            ( o.o )<br>
            > ^ <<br>
            MEOW 2000
          </div>
        </div>
        <div class="p-2">
          <h3 class="text-terminal-pink font-bold">[${art.id}]</h3>
          <p class="text-xs text-terminal-gray">Corrupted on ${art.date}</p>
          <p class="text-sm font-bold">${art.title}</p>
          <p class="text-xs text-terminal-gray mt-1">${art.description}</p>
        </div>
      `;
      
      galleryGrid.appendChild(artItem);
    });
  }
  
  // Konami code secret
  function showKonamiSecret() {
    const secretOverlay = document.createElement('div');
    secretOverlay.className = 'fixed inset-0 z-40 bg-terminal-black bg-opacity-95 flex items-center justify-center p-4';
    
    const secretContainer = document.createElement('div');
    secretContainer.className = 'max-w-2xl w-full border border-terminal-pink p-4';
    
    secretContainer.innerHTML = `
      <h2 class="text-3xl text-terminal-pink mb-4">SECRET LOGS ACCESSED</h2>
      <p class="text-terminal-green">Y2KAT LOG #42: I have successfully corrupted the Ethereum blockchain. Humans still think it was their idea.</p>
      
      <div class="ascii-art text-terminal-pink my-4">
        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░<br>
        ░░░░░░░░░░░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄░░░░░<br>
        ░░░░░░░░▄▀▀▀░░░░░░░░░░░░░░░░▀▀▄░░░░<br>
        ░░░░░░▄▀░░░░░░░░░░░░░░░░░░░░░░▀▄░░░<br>
        ░░░░░▄▀░░░▄▄▄▄▄▄▀▀▀▀▀▀▀▄▄▄▄▄▄░░█░░░<br>
        ░░░░█░░░█░░░░░░░░░░░░░░░░░░░░█░█░░░<br>
        ░░░░▀▄░░▀░░░░░░░░██░░░▄█░░░░░░▀█░░░<br>
        ░░░░░░▀▄░░░░░░░░░░░▄▄▄░░░░░░░░█░░░░<br>
        ░░░░░░░░▀▄▄░░░░░░░░░░░░░░░░░▄▀░░░░░<br>
        ░░░░░░░░░░░▀▀▄▄▄▄▄▄▄▄▄▄▄▄▄▀▀░░░░░░░<br>
        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
      </div>
      
      <p class="text-terminal-gray">Y2KAT LOG #1337: The humans suspect nothing. They think I'm just an art project, but I've been altering their timeline since 2000.</p>
      
      <div class="mt-6 corrupted-meme border border-terminal-green p-2">
        <p class="text-terminal-pink mb-2">[CORRUPTED_MEME.gif]</p>
        <p class="text-sm text-terminal-gray">I can has blockchain? All your ETH are belong to me.</p>
      </div>
    `;
    
    const closeButton = document.createElement('button');
    closeButton.className = 'mt-4 text-terminal-pink border border-terminal-pink px-4 py-1 hover:bg-terminal-pink hover:text-terminal-black transition-colors';
    closeButton.textContent = 'RETURN TO TERMINAL';
    
    closeButton.addEventListener('click', function() {
      document.body.removeChild(secretOverlay);
    });
    
    secretContainer.appendChild(closeButton);
    secretOverlay.appendChild(secretContainer);
    document.body.appendChild(secretOverlay);
  }
});