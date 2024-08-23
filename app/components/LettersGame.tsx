'use client'
import React, { useState, useEffect } from 'react'
import LetterSpace from './LetterSpace'
import LettersGrid from './LettersGrid'
import WordBox from './WordBox'

interface Letter {
  id: number
  value: string
  isSelected?: boolean
}

const LettersGame = () => {
  const letters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const [randomLetters, setRandomLetters] = useState<Letter[]>([])
  const [selectedLetters, setSelectedLetters] = useState<(number | null)[]>([null, null, null])

  useEffect(() => {
    const generateRandomLetters = () => {
      return Array.from({ length: 9 }).map((_, index) => {
        const randomIndex = Math.floor(Math.random() * letters.length)
        return { id: index, value: letters[randomIndex] }
      })
    }
    setRandomLetters(generateRandomLetters())
  }, [])

  const handleLetterClick = (id: number) => {
    setSelectedLetters(prevLetters => {
      const index = prevLetters.indexOf(id)
      if (index !== -1) {
        const newLetters = [...prevLetters]
        newLetters[index] = null
        return newLetters
      } else {
        const emptyIndex = prevLetters.indexOf(null)
        if (emptyIndex !== -1) {
          const newLetters = [...prevLetters]
          newLetters[emptyIndex] = id
          return newLetters
        }
      }
      return prevLetters
    })
  }

  const updatedLetters = randomLetters.map(letter => ({
    ...letter,
    isSelected: selectedLetters.includes(letter.id)
  }))

  const selectedLetterValues = selectedLetters.map(id =>
    id !== null ? randomLetters.find(letter => letter.id === id)?.value : null
  ).filter(value => value !== undefined) as (string | null)[]

  return (
    <div className='flex flex-col gap-36 justify-center items-center'>
      <LettersGrid randomLetters={updatedLetters} onLetterClick={handleLetterClick}/>
      <WordBox selectedLetters={selectedLetterValues}/>
    </div>
  )
}

export default LettersGame
