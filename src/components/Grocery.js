import React from 'react'

const Grocery = props => {

  return(
    <li id={props.id} onClick={props.handleClick}>{props.name}</li>
  )
}

export default Grocery
