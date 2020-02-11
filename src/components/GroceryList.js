import React from 'react'
import Grocery from './Grocery'

const GroceryList = props => {


  let groceries = props.groceryData.map(item =>{
    console.log(props.listLevelConverter(item.id))
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
    <div> This is a grocery list
      <ul className="store">{groceries}</ul>
    </div>
  )
}

export default GroceryList
