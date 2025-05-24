#!/bin/bash

# Build the client-side code
echo "Building client-side code..."
npm run build

# Create a copy of all public files to the dist directory
echo "Copying public files to dist directory..."
mkdir -p dist/public
cp -r public/* dist/public/

echo "Copying necessary files for GitHub Pages..."
cp public/index.html dist/index.html
cp public/styles.css dist/styles.css
cp public/main.js dist/main.js
cp public/.nojekyll dist/.nojekyll
cp public/_redirects dist/_redirects

echo "Build complete! You can now deploy the 'dist' directory to Netlify."