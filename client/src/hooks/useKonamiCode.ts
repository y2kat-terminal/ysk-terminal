import { useState, useEffect } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export default function useKonamiCode() {
  const [konamiActivated, setKonamiActivated] = useState(false);
  const [konamiIndex, setKonamiIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // If Konami code is already activated, ignore key presses
      if (konamiActivated) return;

      // Check if the correct key in the sequence was pressed
      if (event.key === KONAMI_CODE[konamiIndex]) {
        const nextIndex = konamiIndex + 1;
        
        // If the entire sequence is completed
        if (nextIndex === KONAMI_CODE.length) {
          setKonamiActivated(true);
          setKonamiIndex(0);
        } else {
          // Move to the next key in the sequence
          setKonamiIndex(nextIndex);
        }
      } else {
        // Reset the sequence if wrong key is pressed
        setKonamiIndex(0);
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleKeyDown);

    // Clean up event listener
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [konamiIndex, konamiActivated]);

  return konamiActivated;
}
