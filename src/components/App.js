import React from "react"
import GroceryList from "./GroceryList"
import GroceryStore from "./GroceryStore"

const App = props => {
  const groceryData = [
    { id: 1, name: "Oranges" },
    { id: 2, name: "Bananas" },
    { id: 3, name: "Bread" }
  ]

  const groceryStoreStock =[
    {id:1, name: "Oranges"},
    {id:2, name: "Bananas"},
    {id:4, name: "Kambucha"},
    {id:5, name: "High Fructose Corn Syrup Crunch"}

  ]

  const groceryClick = event => {
    // let alertText = event.currentTarget.id
    alert(convertId(event.currentTarget.id))
  }


  const convertId = (id) => {
    return `this is now a string ${id}`
  }

  return (
    <div>
      <h1>Grocery List</h1>
      <GroceryList
        groceryData={groceryData}
        handleGroceryClick={groceryClick}
        listLevelConverter={convertId}
      />
      <GroceryStore
        stock={groceryStoreStock}
        handleGroceryClick={groceryClick}
      />
    </div>
  )
}

export default App
