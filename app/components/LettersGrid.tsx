import React, { useState, useEffect } from 'react'
import LetterButton from './LetterButton'

interface Letter {
  id:number
  value:string
  isSelected?: boolean
}

interface LetterButtonProps {
  gridLetters: Letter[]
  onLetterClick: (id: number) => void
}

const LettersGrid: React.FC<LetterButtonProps> = ({ gridLetters, onLetterClick }) => {
  if (!gridLetters || gridLetters.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className='grid grid-cols-3 w-fit'>
     {gridLetters.map((letter, index) => (
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
