import React from 'react';
function MyButton () {
  return (
    <button>
      I'm a button
    </button>
  )
}

function MyApp () {
  return (
    <>
      <h1>This is React</h1>
      <MyButton/>
    </>
  )
}

export default MyApp
