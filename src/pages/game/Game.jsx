import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { GameTitle, GameWrapper } from './Game.styles'
import Loader from '../../components/ui/loader/Loader'
import Deck from './Deck'
import Cards from './Cards'
import parseCardPoint from '../../utils/cards/parseCardsPoints'

function Game({ name, age }) {
  const navigate = useNavigate()

  const [deckId, setDeckId] = useState()
  const [cards, setCards] = useState([])
  const [remaining, setRemaining] = useState(52)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!name || !age) {
      navigate('/', { replace: true })
      return
    }
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then((response) => {
      if (response.data.success === true) {
        setDeckId(response.data.deck_id)
        setRemaining(response.data.remaining)
        setLoading(false)
      }
    })
  }, [])

  const [points, setPoints] = useState(0)
  const handleDrawCard = () => {
    if (remaining > 0) {
      setLoading(true)
      axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`).then((response) => {
        setRemaining(response.data.remaining)
        setCards((prevCards) => [...prevCards, ...response.data.cards])
        setPoints((prevPoints) => prevPoints + parseCardPoint(response.data.cards[0].value))
        setLoading(false)
      })
    }
  }

  return (
    <GameWrapper>
      {loading && !deckId ? (
        <Loader />
      ) : (
        <>
          <GameTitle>Hello {name}!</GameTitle>
          <Deck count={remaining} loading={loading} drawCard={handleDrawCard} />
          <div>Score: {points}</div>
          <Cards cards={cards} />
        </>
      )}
    </GameWrapper>
  )
}

export default Game
