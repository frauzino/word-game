'use client'
import React, { useState, useEffect } from 'react'
import LettersGrid from './LettersGrid'
import WordBox from './WordBox'
import { generateGridLetters } from '../functions/GenerateGridLetters'
import Button from './Button'
import Counter from './Counter'
import GameMessage from './GameMessage'

interface Letter {
  id: number
  value: string
  isSelected?: boolean
}

interface LettersGameProps {
  possibleWords: string[]
}

const LettersGame: React.FC<LettersGameProps> = ({possibleWords}) => {
  const [gridLetters, setGridLetters] = useState<Letter[]>([])
  const [selectedLetters, setSelectedLetters] = useState<(number | null)[]>(Array(9).fill(null))
  const [selectedWord, setSelectedWord] = useState<string>('')
  const [winCount, setWinCount] = useState<number>(0)
  const [flashEffect, setFlashEffect] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const resetGame = () => {
    const { longestWord, validGridLetters } = generateGridLetters(possibleWords)
    setSelectedWord(longestWord)
    setGridLetters(validGridLetters)
    setSelectedLetters(Array(9).fill(null))
  }

  const clearInput = () => {
    setSelectedLetters(Array(9).fill(null))
  }

  useEffect(() => {
    resetGame()
  }, [possibleWords])

  useEffect(() => {
    const { longestWord, validGridLetters } = generateGridLetters(possibleWords)
    setSelectedWord(longestWord)
    setGridLetters(validGridLetters)
  }, [possibleWords])

  const flash = (message: string) => {
    setFlashEffect(true)
    setMessage(message)
    setTimeout(() => {
      setFlashEffect(false)
      setMessage('')
    }, 380);
  }

  const checkWord = (word: string) => {
    if (selectedWord === word || (selectedWord.length === word.length && possibleWords.includes(word))) {
      setWinCount(prevCount => prevCount + 1)
      flash('Correct!')
      setTimeout(() => {
        resetGame()
      }, 1500);
    } else {
      setSelectedLetters(Array(9).fill(null))
      setWinCount(0)
      flash('Incorrect!')
    }
  }

  const handleSubmit = () => {
    const word = selectedLetters.map(id =>
      id !== null ? gridLetters.find(letter => letter?.id === id)?.value : null
    ).filter(value => value !== undefined).join('')
    checkWord(word)
  }

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

  const handleReroll = () => {
    resetGame()
    setWinCount(0)

  }

  const validGridLetters = gridLetters.filter(letter => letter !== undefined)

  const updatedLetters = validGridLetters.map(letter => ({
    ...letter,
    isSelected: selectedLetters.includes(letter.id)
  }))

  const selectedLetterValues = selectedLetters.map(id =>
    id !== null ? gridLetters.find(letter => letter?.id === id)?.value : null
  ).filter(value => value !== undefined) as (string | null)[]

  return (
    <div className='flex flex-col gap-8 justify-center items-center relative'>
      <LettersGrid gridLetters={updatedLetters} onLetterClick={handleLetterClick}/>
      <div className='absolute -top-20 right-20'>
        <Counter count={winCount} flashEffect={flashEffect}/>
      </div>
      <div className='absolute top-0 right-80'>
        <Button buttonText='Reroll' buttonVariant='primary' onClick={handleReroll}/>
      </div>
      <WordBox selectedLetters={selectedLetterValues} wordSubmit={handleSubmit} clearInput={clearInput}/>
      <GameMessage message={message}/>
    </div>
  )
}

export default LettersGame
