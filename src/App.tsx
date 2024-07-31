import React from 'react';

const products = [
  {title: 'Cabbage', isFruit: false, id: 1},
  {title: 'Apple', isFruit: true, id: 2},
  {title: 'Banana', isFruit: true, id: 3},
]

function ShoppingList () {
  const listItem = products.map((product) => 
    <li key={product.id} 
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
    >
      {product.title}
    </li>
  )
  return <ul>
    {listItem}
  </ul>
}

export default ShoppingList