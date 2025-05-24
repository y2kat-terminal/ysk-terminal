// ASCII art for Y2KAT
const catAscii = `/\\_/\\
( o.o )
> ^ <
MEOW 2000`;

document.addEventListener('DOMContentLoaded', () => {
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
  
  // Create title and subtitle
  const title = document.createElement('h1');
  title.className = 'main-title glitch-text';
  title.textContent = 'Y2KAT.exe';
  
  const subtitle = document.createElement('p');
  subtitle.className = 'subtitle';
  subtitle.textContent = 'CYBERFELINE SYSTEM v2.0.0.0';
  
  // Create content
  const content = document.createElement('div');
  content.className = 'content';
  
  // Boot sequence text
  const bootText = document.createElement('div');
  bootText.innerHTML = `
    <p>booting Y2KAT.exe...</p>
    <p>accessing ./memories</p>
    <p class="terminal-pink">404 errors... detected</p>
    <p>System Restored from Jan 1, 2000</p>
    <p>Initializing digital whiskers...</p>
    <p>Calibrating quantum purr engine...</p>
    <p class="terminal-pink">WARNING: Time paradox detected</p>
    <p>Y2KAT activation sequence complete</p>
  `;
  
  // ASCII Art
  const asciiArt = document.createElement('div');
  asciiArt.className = 'ascii-art';
  asciiArt.innerHTML = catAscii.replace(/\\n/g, '<br>');
  
  // Description
  const description = document.createElement('div');
  description.innerHTML = `
    <p style="margin-top: 2rem;">Y2KAT is a retro-futuristic terminal experience featuring a cyber cat from the Y2K era.</p>
    <p style="margin-top: 1rem;">With glitch aesthetics and interactive commands, explore the digital feline entity that emerged during the Y2K transition.</p>
    <p style="margin-top: 1rem;">Type commands like <span style="color: hsl(300, 100%, 50%);">whois Y2KAT</span>, <span style="color: hsl(300, 100%, 50%);">y2kat.predict()</span>, and <span style="color: hsl(300, 100%, 50%);">show.collection()</span> to interact with the terminal.</p>
    <p style="margin-top: 1rem;">Can you find the hidden Konami code easter egg?</p>
  `;
  
  // Create launch button
  const launchBtn = document.createElement('button');
  launchBtn.className = 'btn';
  launchBtn.textContent = 'LAUNCH TERMINAL';
  launchBtn.addEventListener('click', () => {
    window.location.href = 'https://y2kat-terminal.replit.app/';
  });
  
  // Create GitHub button
  const githubBtn = document.createElement('button');
  githubBtn.className = 'btn';
  githubBtn.style.marginTop = '1rem';
  githubBtn.textContent = 'VIEW ON GITHUB';
  githubBtn.addEventListener('click', () => {
    window.open('https://github.com/yourusername/y2kat-terminal', '_blank');
  });
  
  // Create footer
  const footer = document.createElement('div');
  footer.className = 'footer';
  footer.innerHTML = `
    <p>© 2000-${new Date().getFullYear()} CHRONOCAT INDUSTRIES</p>
    <p>ALL RIGHTS RESERVED & SOME RIGHTS CORRUPTED</p>
  `;
  
  // Append all elements
  content.appendChild(bootText);
  content.appendChild(asciiArt);
  content.appendChild(description);
  
  mainContainer.appendChild(title);
  mainContainer.appendChild(subtitle);
  mainContainer.appendChild(content);
  mainContainer.appendChild(launchBtn);
  mainContainer.appendChild(githubBtn);
  
  root.appendChild(mainContainer);
  root.appendChild(footer);
  
  // Add styling for terminal colors
  const style = document.createElement('style');
  style.textContent = `
    .terminal-pink {
      color: hsl(300, 100%, 50%);
    }
    .terminal-green {
      color: hsl(120, 100%, 50%);
    }
    .terminal-gray {
      color: hsl(0, 0%, 67%);
    }
  `;
  document.head.appendChild(style);
  
  // Type writer effect for boot sequence
  const typeLines = bootText.querySelectorAll('p');
  typeLines.forEach((line, index) => {
    line.style.opacity = '0';
    setTimeout(() => {
      line.style.opacity = '1';
      line.classList.add('typing-animation');
    }, index * 800);
  });
});