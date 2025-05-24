document.addEventListener('DOMContentLoaded', function() {
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
  
  // Add title and subtitle
  const title = document.createElement('h1');
  title.className = 'main-title glitch-text';
  title.textContent = 'Y2KAT.exe';
  mainContainer.appendChild(title);
  
  const subtitle = document.createElement('p');
  subtitle.className = 'subtitle';
  subtitle.textContent = 'CYBERFELINE SYSTEM v2.0.0.0';
  mainContainer.appendChild(subtitle);
  
  // Add ASCII art
  const asciiArt = document.createElement('div');
  asciiArt.className = 'ascii-art';
  asciiArt.innerHTML = `/\\_/\\<br>
( o.o )<br>
> ^ <<br>
MEOW 2000`;
  mainContainer.appendChild(asciiArt);
  
  // Add content
  const content = document.createElement('div');
  content.className = 'content';
  content.innerHTML = `
    <p class="command-line">whois Y2KAT</p>
    <p>Y2KAT - CHRONOLOGICAL FELINE ENTITY</p>
    <p style="color: hsl(var(--terminal-gray))">VERSION: 2.0.0.0</p>
    <p style="color: hsl(var(--terminal-gray))">ORIGIN: JAN 1, 2000 TEMPORAL ANOMALY</p>
    <p style="margin: 1rem 0">A digital entity that emerged during the Y2K transition. Part cat, part chronological glitch, Y2KAT exists between the digital and physical realms, corrupting systems and timelines for its own amusement.</p>
    <p style="color: hsl(var(--terminal-pink))">WARNING: Y2KAT has been known to manipulate blockchain technology and digital art.</p>
    
    <p class="command-line" style="margin-top: 2rem">y2kat.predict()</p>
    <p style="color: hsl(var(--terminal-pink))">EXECUTING PREDICTION ALGORITHM...</p>
    <p style="margin: 1rem 0">The blockchain fears what hides between 1999 and 2000.</p>
    <p style="color: hsl(var(--terminal-gray)); font-size: 0.9rem;">Prophecy generated from temporal data fragments</p>
  `;
  mainContainer.appendChild(content);
  
  // Add launch button
  const launchButton = document.createElement('button');
  launchButton.className = 'btn';
  launchButton.textContent = 'LAUNCH TERMINAL';
  launchButton.addEventListener('click', function() {
    window.location.href = 'app/';
  });
  mainContainer.appendChild(launchButton);
  
  // Add footer
  const footer = document.createElement('div');
  footer.className = 'footer';
  footer.innerHTML = `
    <p>© 2000-2023 CHRONOCAT INDUSTRIES</p>
    <p>ALL RIGHTS RESERVED & SOME RIGHTS CORRUPTED</p>
    <p style="margin-top: 1rem">Press the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A</p>
  `;
  root.appendChild(footer);
  
  // Simple Konami Code implementation
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;
  
  document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateKonamiCode();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
  
  function activateKonamiCode() {
    // Create secret modal
    const secretModal = document.createElement('div');
    secretModal.style.position = 'fixed';
    secretModal.style.top = '0';
    secretModal.style.left = '0';
    secretModal.style.width = '100%';
    secretModal.style.height = '100%';
    secretModal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    secretModal.style.display = 'flex';
    secretModal.style.alignItems = 'center';
    secretModal.style.justifyContent = 'center';
    secretModal.style.zIndex = '1000';
    
    const secretContent = document.createElement('div');
    secretContent.style.maxWidth = '600px';
    secretContent.style.padding = '2rem';
    secretContent.style.border = '2px solid hsl(var(--terminal-pink))';
    secretContent.style.backgroundColor = 'hsl(var(--terminal-black))';
    
    secretContent.innerHTML = `
      <h2 style="font-size: 2rem; color: hsl(var(--terminal-pink)); margin-bottom: 1rem;">SECRET LOGS ACCESSED</h2>
      <p style="color: hsl(var(--terminal-green)); margin-bottom: 1rem;">Y2KAT LOG #42: I have successfully corrupted the Ethereum blockchain. Humans still think it was their idea.</p>
      <div class="ascii-art" style="color: hsl(var(--terminal-pink)); margin: 1.5rem 0;">
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
      <p style="color: hsl(var(--terminal-gray));">Y2KAT LOG #1337: The humans suspect nothing. They think I'm just an art project, but I've been altering their timeline since 2000.</p>
      <div style="margin-top: 2rem; border: 1px solid hsl(var(--terminal-green)); padding: 1rem;">
        <p style="color: hsl(var(--terminal-pink)); margin-bottom: 0.5rem;">[CORRUPTED_MEME.gif]</p>
        <p style="font-size: 0.9rem; color: hsl(var(--terminal-gray));">I can has blockchain? All your ETH are belong to me.</p>
      </div>
      <button id="close-secret" style="margin-top: 2rem; background: transparent; border: 2px solid hsl(var(--terminal-pink)); color: hsl(var(--terminal-pink)); padding: 0.5rem 1.5rem; font-family: 'VT323', monospace; cursor: pointer;">RETURN TO TERMINAL</button>
    `;
    
    secretModal.appendChild(secretContent);
    document.body.appendChild(secretModal);
    
    document.getElementById('close-secret').addEventListener('click', function() {
      document.body.removeChild(secretModal);
    });
  }
});