import React from 'react'
import cardBackJpg from '../../assets/card_back.jpg'
import { DeckStyled } from './Game.styles'

function Deck({ count, drawCard, loading }) {
  return (
    <DeckStyled isLoading={loading}>
      <img src={cardBackJpg} alt="" onClick={drawCard} />
    </DeckStyled>
  )
}

export default Deck
