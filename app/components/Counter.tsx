import React from 'react'

interface CounterProps {
  count: number
  flashEffect?: boolean
}

const Counter: React.FC<CounterProps> = ({count, flashEffect}) => {
  return (
    <div className={`ease-linear duration-200 aspect-square w-10 flex justify-center items-center rounded-full bg-emerald-300 text-white font-bold ${flashEffect ? 'scale-125' : ''}`}>
      {count}
    </div>
  )
}

export default Counter
