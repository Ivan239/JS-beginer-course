import React from 'react'
import './Block.scss'

function Block (props) {
  const { className, children, color, onClick } = props

  console.log('Render block', children)

  return (<div className={`block ${className}`} style={{ backgroundColor: color }} onClick={onClick}>
    {children}
  </div>)
}

export default Block
