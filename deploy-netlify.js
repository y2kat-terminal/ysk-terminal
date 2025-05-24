const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Ensure the dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

// Copy public files to dist
console.log('Copying public files to dist...');
copyDirectory('public', 'dist');

console.log('Deployment preparation complete!');
console.log('You can now deploy to Netlify by connecting your GitHub repository');
console.log('or by using the Netlify CLI with "netlify deploy"');

// Helper function to copy a directory recursively
function copyDirectory(source, destination) {
  // Create the destination directory if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Get all files and folders in the source directory
  const entries = fs.readdirSync(source, { withFileTypes: true });

  // Copy each entry to the destination
  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const destPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy subdirectories
      copyDirectory(sourcePath, destPath);
    } else {
      // Copy files
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied: ${sourcePath} -> ${destPath}`);
    }
  }
}