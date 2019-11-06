import React from 'react'

const Cell = props => {
  console.log(props.data)
  let renderCell = () => {
    if (props.data.isOpen) {
      // do some stuff
      return (
        <div className="cell open" onClick={() => props.open(props.data)}></div>
      )
    } else {
      //do some other stuff
      return <div className="cell" onClick={() => props.open(props.data)}></div>
    }
  }
  return renderCell()
}

export default Cell
