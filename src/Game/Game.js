import React, { useState } from 'react'
import Bucket from './Bucket'
import './Game.scss'

function Game () {
  const [buckets, setBuckets] = useState([
    { id: 1, total: 100, increment: 10 },
    { id: 2, total: 250, increment: 15},
    { id: 3, total: 200, increment: 15},
  ])

  return (
    <div>
      {buckets.map(bucket => <Bucket key={bucket.id} total={bucket.total} increment={bucket.increment} onBecomeFull={() => {
        setBuckets(prevBuckets => prevBuckets.filter(prevBucket => prevBucket.id !== bucket.id))
      }
      }/>)}
    </div>
  )
}

export default Game
