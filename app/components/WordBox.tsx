import React from 'react'
import LetterSpace from './LetterSpace'

interface LetterSpaceProps {
  selectedLetters: (string | null)[]
}

const WordBox: React.FC<LetterSpaceProps> = ({ selectedLetters }) => {
  const maxLetters = 3

  return (
    <div className="flex flex-row gap-4">
      {Array.from({ length: maxLetters }).map((_, index) => (
        <LetterSpace key={index} selectedLetter={selectedLetters[index] || ''} />
      ))}
    </div>
  )
}

export default WordBox
