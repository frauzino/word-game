import React from 'react'

interface GameMessageProps {
  message: string
}

const GameMessage: React.FC<GameMessageProps> = ({message}) => {
  return (
    <div className='text-2xl text-white'>
      {message}
    </div>
  )
}

export default GameMessage
