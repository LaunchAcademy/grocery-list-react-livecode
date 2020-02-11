import React from 'react'
import Grocery from './Grocery'
const GroceryStore = props => {
  
  let inventory = props.stock.map(item => {
    return(
      <Grocery
        key={item.id}
        id={item.id}
        name={item.name}
        handleClick={props.handleGroceryClick}
       />
    )
  })
  return(
    <div className="store">This is a grocery store
      <ul> {inventory} </ul>
    </div>
  )
}
export default GroceryStore
