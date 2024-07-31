import React from 'react';
function MyButton () {
  return (
    <button>
      I'm a button
    </button>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <p>Hello there. <br/> How do you do?</p>
    </>
  )
}

function MyApp () {
  return (
    <>
      <AboutPage/>
      <h1>This is React</h1>
      <MyButton/>
    </>
  )
}

export default MyApp
