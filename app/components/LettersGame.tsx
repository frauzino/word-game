'use client'
import React, { useState, useEffect } from 'react'
import LetterSpace from './LetterSpace'
import LettersGrid from './LettersGrid'

const LettersGame = () => {
  const letters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const [randomLetters, setRandomLetters] = useState<string[]>([])
  const [selectedLetter, setSelectedLetter] = useState<string>('')

  useEffect(() => {
    const generateRandomLetters = () => {
      return Array.from({ length: 9 }).map(() => {
        const randomIndex = Math.floor(Math.random() * letters.length)
        return letters[randomIndex]
      })
    }
    setRandomLetters(generateRandomLetters())
  }, [])

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(prevLetter => prevLetter === letter? '' : letter)
  }

  return (
    <div className='flex flex-col gap-36 justify-center items-center'>
      <LettersGrid randomLetters={randomLetters} selectedLetter={selectedLetter} onLetterClick={handleLetterClick}/>
      <LetterSpace selectedLetter={selectedLetter}/>
    </div>
  )
}

export default LettersGame
