import React from 'react'

interface LetterButtonProps {
  letter: string
  onClick: () => void
  isSelected: boolean
}

const LetterButton: React.FC<LetterButtonProps> = ({ letter, onClick, isSelected }) => {

const styles = `text-8xl w-36 aspect-square border rounded flex justify-center items-center hover:shadow-inner hover:shadow-sky-200 ${isSelected ? 'shadow-inner shadow-emerald-400' : ''}`

  return (
    <button
      className={styles}
      onClick={onClick}
    >
      {letter}
    </button>
  )
}

export default LetterButton
