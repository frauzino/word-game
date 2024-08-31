import React from 'react'
import LetterSpace from './LetterSpace'
import Button from './Button'

interface LetterSpaceProps {
  selectedLetters: (string | null)[]
  wordSubmit: () => void
  clearInput: () => void
}

const WordBox: React.FC<LetterSpaceProps> = ({ selectedLetters, wordSubmit, clearInput}) => {
  const maxLetters = 9

  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-row gap-4">
        {Array.from({ length: maxLetters }).map((_, index) => (
          <LetterSpace key={index} selectedLetter={selectedLetters[index] || ''} />
        ))}
      </div>
      <Button buttonText='Submit' buttonVariant='primary' onClick={wordSubmit} />
      <Button buttonText='Clear' buttonVariant='secondary' onClick={clearInput} />
    </div>
  )
}

export default WordBox
