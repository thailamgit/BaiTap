import React from 'react';
import { useState } from 'react';

function MyButton () {
  const [count, setcount] = useState(0)

  function handleClick () {
    setcount(count + 1)
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  )
}

export default MyButton
