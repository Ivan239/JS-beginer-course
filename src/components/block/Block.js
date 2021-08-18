import React from 'react'
import './Block.scss'

function Block (props) {
  const { className, children, color } = props

  return (<div className={`block ${className}`} style={{ backgroundColor: color }}>
    {children}
  </div>)
}

export default Block
