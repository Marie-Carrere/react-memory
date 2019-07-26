import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { saveHOFEntry } from './HallOfFame'
import './HighScoreInput.css'

class HighScoreInput extends Component {
  constructor(props) {
    super(props)
    this.state = { winner: '' }
  }

  persistWinner = (event) => {
    event.preventDefault()
    const newEntry = { guesses: this.props.guesses, player: this.state.winner }
    saveHOFEntry(newEntry, this.props.onStored)
  }

  render() {
    return (
      <form className="highScoreInput" onSubmit={this.persistWinner}>
        <p>
          <label>
            Congratulations ! Please enter your name :
            <input
              type="text"
              autoComplete="given-name"
              onChange={this.handleWinnerUpdate}
              value={this.state.winner}
            />
          </label>
          <button type="submit">You won !</button>
        </p>
      </form>
    )
  }
}

HighScoreInput.propTypes = {
  guesses: PropTypes.number.isRequired,
  onStored: PropTypes.func.isRequired
}

export default HighScoreInput