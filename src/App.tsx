import React from 'react';
import { useState } from 'react';

function MyApp () {
  const [count, setcount] = useState(0)
  function handleClick () {
    setcount(count + 1)
  }
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick}/><br/>
      <MyButton count={count} onClick={handleClick}/>
    </div>
  )
}

type MyButtonProps = {
  count: number
  onClick: () => void
}

function MyButton ({count, onClick}: MyButtonProps) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )
}
export default MyApp
