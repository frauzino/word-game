import React from 'react'
import clsx from 'clsx'

interface ButtonProps {
  buttonText: string
  buttonVariant?: 'primary' | 'secondary'
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({buttonText, onClick, buttonVariant}) => {
  const variantStyles:{[key: string]: string } = {
    primary: 'bg-emerald-400 text-white hover:bg-emerald-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  }

  const buttonStyles = variantStyles[buttonVariant || 'primary']


  return (
    <button
      className={clsx("p-4 rounded-xl transition", buttonStyles)}
      onClick={onClick}
    >
      {buttonText}
    </button>
  )
}

export default Button
