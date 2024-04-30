import React from 'react'

export const Cell = ({value, onClick,className}) => {
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
    {value}
    </div>
  )
}
