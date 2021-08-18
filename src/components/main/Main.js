import React from 'react'
import Block from '../block/Block'
import './Main.scss'

const colors = ['red', 'purple', 'green', 'yellow']

const generateBlocks = (count) => Array.from({ length: count })
  .map(item => {
    const randomColorIndex = Math.floor(Math.random() * colors.length)
    return {
      color: colors[randomColorIndex]
    }
  })

function Main () {
  const blocks = generateBlocks(7)

  return (
    <main className="main container">
      {blocks.map((block, index) => <Block key={index} className="main-block" color={block.color}>{index}</Block>)}
    </main>
  )
}

export default Main
