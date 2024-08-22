import React, { useState, useEffect } from 'react'
import LetterButton from './LetterButton'

interface LetterButtonProps {
  randomLetters: string[]
  selectedLetter: string
  onLetterClick: (letter: string) => void
}

const LettersGrid: React.FC<LetterButtonProps> = ({ randomLetters, selectedLetter, onLetterClick }) => {
  if (!randomLetters || randomLetters.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className='grid grid-cols-3 w-fit'>
     {randomLetters.map((letter, index) => (
        <LetterButton
          key={index}
          letter={letter}
          isSelected={selectedLetter === letter}
          onClick={() => onLetterClick(letter)}
        />
     ))}
    </div>
  )
}

export default LettersGrid
