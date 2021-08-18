import React, { useEffect, useRef } from 'react'
import './Block.scss'

export const blockColors = ['red', 'purple', 'green', 'yellow']

function Block (props) {
  const { className, children, color, onClick } = props

  const ref = useRef(null)
  console.log('Block', children, 'ref', ref)
  useEffect(() => {
    console.log('Block', children, 'ref in effect', ref)
    if (className.includes('main-block-selected')) {
      let colorIndex = 0
      const intervalID = setInterval(() => {
        ref.current.style.backgroundColor = blockColors[colorIndex % blockColors.length]
        colorIndex++
      }, 1000)

      return () => {
        clearInterval(intervalID)
        ref.current.style.backgroundColor = color
      }
    }
  }, [className, color])

  console.log('Render block', children)

  return (<div ref={ref} className={`block ${className}`} style={{ backgroundColor: color }} onClick={onClick}>
    {children}
  </div>)
}

export default Block
