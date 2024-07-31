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

const products = [
  {title: 'Carbage', id: 1},
  {title: 'Carrot', id: 2},
  {title: 'Corn', id: 3}
]


function MyApp () {
  const listItem = products.map ((product) => 
    <li key = {product.id}>
      {product.title}
    </li>
  )
  return (
    <>
      <AboutPage/>
      <h1>This is React</h1>
      <MyButton/>
      <ul>
        {listItem}
      </ul>
    </>
  )
}

export default MyApp
