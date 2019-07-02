import React from 'react'

import './HallOfFame.css'

const HallOfFame = ({ entries }) => (
  <table className="hallOfFame">
    <tbody>
      { entries.map(({ id, guesses, player, date }) => (
        <tr key={id}>
          <td className="date">{ date }</td>
          <td className="guesses">{ guesses }</td>
          <td className="player">{ player }</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default HallOfFame

// == Internal helpers ==============================================

export const FAKE_HOF = [
  { id: 3, guesses: 18, date: '01/07/2019', player: 'Tiago' },
  { id: 2, guesses: 23, date: '02/07/2019', player: 'Alessa' },
  { id: 1, guesses: 31, date: '30/06/2019', player: 'Marie' },
  { id: 0, guesses: 48, date: '15/06/2019', player: 'Marc' },
]