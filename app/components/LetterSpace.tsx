import React from 'react'

interface LetterSpaceProps {
  selectedLetter: string
}

const LetterSpace: React.FC<LetterSpaceProps> = ({ selectedLetter }) => {
  return (
    <div className='w-36 h-24 text-center text-8xl border-b-2 border-white'>
      {selectedLetter}
    </div>
  )
}

export default LetterSpace
