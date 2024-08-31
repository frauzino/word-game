import React from 'react'

interface LetterSpaceProps {
  selectedLetter: string
}

const LetterSpace: React.FC<LetterSpaceProps> = ({ selectedLetter }) => {
  return (
    <div className={`w-24 h-16 text-center text-6xl border-b-2 border-white`}>
      {selectedLetter}
    </div>
  )
}

export default LetterSpace
