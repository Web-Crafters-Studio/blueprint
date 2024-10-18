import React from 'react'
import './Button.css'

export interface ButtonProps {
  label: string
  onClick?: () => void
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}
