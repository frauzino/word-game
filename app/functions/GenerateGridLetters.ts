const letters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

interface Letter {
  id: number
  value: string
  isSelected?: boolean
}

export const generateGridLetters = (possibleWords: string[]) => {
  const generateRandomLetters = (): string[] => Array.from({ length: 9 }, () => (
    letters[Math.floor(Math.random() * letters.length)]
  ))

  const findLongestWord = (letters: string[], possibleWords: string[]): string | null => {
    const letterCount = (word:string) => {
      const count: {[key: string]: number} = {}
      for (const letter of word) {
        count[letter] = (count[letter] || 0) + 1
      }
      return count
    }

    const canFormWord = (word: string, letters: string[]): boolean => {
      const wordCount = letterCount(word)
      const lettersCount = letterCount(letters.join(''))
      return Object.keys(wordCount).every(letter => wordCount[letter] <= lettersCount[letter])
    }

    const validWords = possibleWords.filter(word => canFormWord(word, letters))
    validWords.sort((a, b) => b.length - a.length)
    return validWords[0] || null
  }

  let randomLetters: string[]
  let longestWord: string | null

  do {
    randomLetters = generateRandomLetters()
    longestWord = findLongestWord(randomLetters, possibleWords)
  } while (!longestWord)

  console.log('longestWord', longestWord)
  let validGridLetters: Letter[] = randomLetters.map((letter, index) => ({ id: index, value: letter }))

  return { longestWord, validGridLetters }
}
