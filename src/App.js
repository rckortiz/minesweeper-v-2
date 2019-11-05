import React, { Component } from 'react'
import Board from './components/Board'
import BoardHead from './components/BoardHead'

class App extends Component {
  state = {
    rows: 10,
    columns: 10,
    flags: 10,
    mines: 10,
    time: 0
  }
  render() {
    return (
      <div className="minesweeper">
        <h1>Minesweeper</h1>
        <BoardHead time={this.state.time} flagCount={this.state.flags} />
        <Board
          rows={this.state.rows}
          columns={this.state.columns}
          mines={this.state.mines}
        />
      </div>
    )
  }
}

export default App
