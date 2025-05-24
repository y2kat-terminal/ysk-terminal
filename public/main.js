// ASCII Art for the cat
const catAscii = `/\\_/\\
( o.o )
> ^ <
MEOW 2000`;

// Boot messages
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

// Random cat thoughts
const catThoughts = [
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

// Main function to initialize the page
function initializePage() {
  const root = document.getElementById('root');
  
  // Create CRT and scanline effects
  const crt = document.createElement('div');
  crt.className = 'crt';
  document.body.appendChild(crt);
  
  const scanline = document.createElement('div');
  scanline.className = 'scanline';
  document.body.appendChild(scanline);
  
  // Create main container
  const mainContainer = document.createElement('div');
  mainContainer.className = 'main-container';
  root.appendChild(mainContainer);
  
  // Create main title
  const title = document.createElement('h1');
  title.className = 'main-title glitch-text';
  title.textContent = 'Y2KAT.exe';
  mainContainer.appendChild(title);
  
  // Create subtitle
  const subtitle = document.createElement('p');
  subtitle.className = 'subtitle';
  subtitle.textContent = 'CYBERFELINE SYSTEM v2.0.0.0';
  mainContainer.appendChild(subtitle);
  
  // Create content
  const content = document.createElement('div');
  content.className = 'content';
  mainContainer.appendChild(content);
  
  // Display boot messages
  const bootSequence = document.createElement('div');
  bootSequence.className = 'boot-sequence';
  content.appendChild(bootSequence);
  
  // Add boot messages with a typing effect
  let delay = 0;
  bootMessages.forEach((message, index) => {
    setTimeout(() => {
      const bootLine = document.createElement('p');
      bootLine.className = message.includes('WARNING') || message.includes('404') 
        ? 'terminal-line typing-animation text-pink' 
        : 'terminal-line typing-animation';
      bootLine.textContent = message;
      bootLine.style.color = message.includes('WARNING') || message.includes('404') 
        ? 'hsl(300, 100%, 50%)' 
        : 'hsl(120, 100%, 50%)';
      bootSequence.appendChild(bootLine);
      
      // When all messages are displayed, show the ASCII art and buttons
      if (index === bootMessages.length - 1) {
        setTimeout(() => {
          displayMainContent(content);
        }, 1000);
      }
    }, delay);
    delay += 800;
  });
  
  // Create footer
  const footer = document.createElement('div');
  footer.className = 'footer';
  footer.innerHTML = `
    <p>© 2000-${new Date().getFullYear()} CHRONOCAT INDUSTRIES</p>
    <p>ALL RIGHTS RESERVED & SOME RIGHTS CORRUPTED</p>
    <p class="cat-thought" style="margin-top: 1rem; font-style: italic;">${getRandomCatThought()}</p>
  `;
  root.appendChild(footer);
  
  // Update cat thought every 10 seconds
  setInterval(() => {
    document.querySelector('.cat-thought').textContent = getRandomCatThought();
  }, 10000);
}

// Function to display main content after boot sequence
function displayMainContent(container) {
  // Display ASCII art
  const asciiArt = document.createElement('pre');
  asciiArt.className = 'ascii-art';
  asciiArt.textContent = catAscii;
  container.appendChild(asciiArt);
  
  // Create buttons
  const buttonsContainer = document.createElement('div');
  buttonsContainer.style.display = 'flex';
  buttonsContainer.style.justifyContent = 'center';
  buttonsContainer.style.gap = '1rem';
  buttonsContainer.style.marginTop = '2rem';
  container.appendChild(buttonsContainer);
  
  // Launch Terminal button
  const launchButton = document.createElement('button');
  launchButton.className = 'btn';
  launchButton.textContent = 'LAUNCH TERMINAL';
  launchButton.addEventListener('click', () => {
    window.location.href = 'https://y2kat-terminal.replit.app/';
  });
  buttonsContainer.appendChild(launchButton);
  
  // GitHub Repo button
  const githubButton = document.createElement('button');
  githubButton.className = 'btn';
  githubButton.textContent = 'VIEW SOURCE CODE';
  githubButton.addEventListener('click', () => {
    window.open('https://github.com/y2kat-terminal/y2k-terminal', '_blank');
  });
  buttonsContainer.appendChild(githubButton);
}

// Function to get a random cat thought
function getRandomCatThought() {
  return catThoughts[Math.floor(Math.random() * catThoughts.length)];
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);