import React, { useState, useEffect } from 'react'
import LetterButton from './LetterButton'

interface Letter {
  id:number
  value:string
  isSelected?: boolean
}

interface LetterButtonProps {
  randomLetters: Letter[]
  onLetterClick: (id: number) => void
}

const LettersGrid: React.FC<LetterButtonProps> = ({ randomLetters, onLetterClick }) => {
  if (!randomLetters || randomLetters.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className='grid grid-cols-3 w-fit'>
     {randomLetters.map((letter, index) => (
        <LetterButton
          key={index}
          letter={letter.value}
          onClick={() => onLetterClick(letter.id)}
          isSelected={letter.isSelected || false}
        />
     ))}
    </div>
  )
}

export default LettersGrid
