/* eslint-disable max-len */
// check lineup on a team 
// check lineup in a game
// check number of player to be 9 in a lineup  
// Check to have the right amount of players and right number of positions 
// have three OF and a C, P, 1B, 2B, 3B, SS
// false when too few players 
// false when salary greater than 4500

function SalaryNumber(lineup) {
  return (45000 > lineup.map((lineup) => lineup.salary).reduce((total, salary) => total + salary))
}

function PlayerNumber(lineup) {
  const players = lineup.map((lineup) => lineup.name)

  return players.length === 9
}

function PositionNumber(lineup) {
  const field = ['C', 'P', 'SS', '2B', '1B', '3B', 'OF', 'OF', 'OF']
  const positions = lineup.map((lineup) => lineup.position)

  return positions.every(currentValue => field.indexOf(currentValue) > -1)
}

function TeamNumber(lineup) {
  const teams = lineup.map((lineup) => lineup.teamId)
  const teamssorted = teams.sort((a, b) => a - b)
  let Count = 1
  let teamCount = 1

  for (let i = 0; i < teamssorted.length; i++) {
    if (teamssorted[i] === teamssorted[i + 1]) {
      Count++
    } else {
      Count = 1
    }
    if (Count > teamCount) {
      teamCount = Count
    }
  }

  return teamCount <= 2
}

function GameNumber(lineup) {
  const games = lineup.map((lineup) => lineup.gameId)
  const gamessorted = games.sort((a, b) => a - b)
  let Count = 1
  let gameCount = 1

  for (let i = 0; i < gamessorted.length; i++) {
    if (gamessorted[i] === gamessorted[i + 1]) {
      Count++
    } else {
      Count = 1
    }
    if (Count > gameCount) {
      gameCount = Count
    }
  }

  return gameCount <= 3
}

const validateLineup = (lineup) => {
  return TeamNumber(lineup) && GameNumber(lineup) && PlayerNumber(lineup) && SalaryNumber(lineup) && PositionNumber(lineup)
}

module.exports = validateLineup
