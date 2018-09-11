import React from 'react'

const Cell = (props) => {
  if (props.cell.isRevealed) {
    return <div className="cell column">
    {props.cell.value}
    </div>
  } else return <div className="cell column">
  {props.cell.noValue}
  </div>
}

export default Cell
