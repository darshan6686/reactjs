import React from 'react'

function List({Item, Status, isStock}) {
  if (isStock) {
    return (
      <li>{Item}</li>
    )
  }
  return <li>{Status}</li>
}

const Listapp = () => {
  return (
    <>
      <div>
        <ul>
          <List Item="Item In Stock" Status="Item Out of Stock" isStock={true} />
          <List Item="Item In Stock" Status="Item Out of Stock" isStock={true} />
          <List Item="Item In Stock" Status="Item Out of Stock" isStock={true} />
          <List Item="Item In Stock" Status="Item Out of Stock" isStock={true} />
          <List Item="Item In Stock" Status="Item Out of Stock" isStock={false} />
        </ul>
      </div>
    </>
  )
}

export default Listapp
