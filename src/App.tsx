import React from 'react';

const products = [
  {title: 'Cabbage', isFruit: false, id: 1},
  {title: 'Apple', isFruit: true, id: 2},
  {title: 'Banana', isFruit: true, id: 3},
  {title: 'Garlic', isFruit: false, id: 4},
  {title: 'Tomato', isFruit: false, id: 5},
]

function handleClick () {
  alert("You clicked me!")
}

function shoppingList () {
  const listItem = products.map((product) => 
    <li key={product.id} 
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
    >
      {product.title}
    </li>
  )
  return <>
    <ul>
      {listItem}
    </ul>
    <button onClick={handleClick}>Click me</button>
  </>
}

export default shoppingList

