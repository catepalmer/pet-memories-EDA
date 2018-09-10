import React from 'react'
import Cell from './Cell'

import createBoard from '../createBoard'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: createBoard(4),
      width: props.width,
      cellsToMatch: [],
      hasWon: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.checkForMatch = this.checkForMatch.bind(this)
    this.checkForWin = this.checkForWin.bind(this)
  }

  handleClick(row, cell) {
    const cellsToMatch = this.state.cellsToMatch
    const board = this.state.board
    if (cellsToMatch.length < 2 && board[row][cell].isRevealed === false) {
      cellsToMatch.push(cell)
      board[row][cell].isRevealed = true
    }
    this.setState({
      cellsToMatch,
      board
    })
  }

  checkForMatch() {
    let board = this.state.board
    if (this.state.cellsToMatch.length === 2) {
      if (this.state.cellsToMatch[0].value !== this.state.cellsToMatch[1].value) {
        // The cells don't match - have to access both of these cells in the board array
        // and set the isRevealed property on both of them back to false, and then use
        // setState to set this.state.board to be the altered board I declared in this function.
        // Also have to set the cellsToMatch property in state back to an empty array.
      }
      // The cells match - don't alter either of their isRevealed property.
      // Also, then call the checkForWin() function.
    }
  }

  checkForWin() {
    const board = this.state.board
    let hiddenCells = []
    board.map((row, i) => {
      row.map((cell, j) => {
        if (board[i][j].isRevealed === false) hiddenCells.push(board[i][j])
      })
    })
    if (hiddenCells.length === 0) {
      this.setState({
        hasWon: true
      })
    }
  }

  render() {
    const board = this.state.board
    const rowHeight = this.state.width / board.length

    return <div
      style={{width: this.state.width, height: this.state.width}}
      className="column board has-text-centered"
    >
      {board.map((row, i) => {
        //render a ROW (of cells) on the Board
        return <div className="row columns" style={{height: rowHeight}} >
          {row.map((cell, j) => {
            //render each Cell within a ROW, using the Cell.jsx component
            return <Cell key={[i, j]} cell={cell} />
          })}
        </div>
      })}
    </div>
  }
}

export default Board