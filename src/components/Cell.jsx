import React from 'react'

const Cell = props => {
  console.log(props.data)
  let renderCell = () => {
    if (props.data.isOpen) {
      // do some stuff
      return <div className="cell open"></div>
    } else {
      //do some other stuff
      return <div className="cell"></div>
    }
  }
  return renderCell()
}

export default Cell
