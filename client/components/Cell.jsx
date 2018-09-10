import React from 'react'

const Cell = (props) => {
  if (props.cell.isRevealed) {
    return <div className="cell column">
    {props.cell.value}
  </div>
  }
}

export default Cell
