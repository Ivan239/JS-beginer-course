import React, { useEffect, useState } from 'react'
import Increment from './Increment'

function Bucket ({ total, increment, onBecomeFull }) {
  const [showIncrement, setShowIncrement] = useState(false)
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (count === total && onBecomeFull) {
      onBecomeFull()
    }

    if (count !== 0) {
      setTimeout(() => {
        setShowIncrement(true)
      })

    }
    const timeout = setTimeout(() => {
      setShowIncrement(false)
    }, 2000)
    return () => {
      clearTimeout(timeout)
      setShowIncrement(false)
    }
  }, [count, total, onBecomeFull])


  return (
    <div className="bucket">

      <div className="bucket-border"
           onClick={() => {
             setCount(prevCount => Math.min(prevCount + increment, total))
           }}>
        <div className="bucket-body">
          <div className="bucket-level" style={{ height: count / total * 100 + '%' }}/>
        </div>
      </div>
      <div className="bucket-status">{count}/{total}</div>
      {showIncrement && <Increment count={increment}/>}
    </div>
  )
}

export default Bucket
