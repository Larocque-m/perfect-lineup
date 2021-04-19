function SalaryNumber(lineup) {
  return (45000 > lineup.map((lineup) => lineup.salary).reduce((total, salary) => total + salary))
}

function PlayerNumber(lineup) {
  const players = lineup.map((lineup) => lineup.name)

  return players.length === 9
}

function PositionNumber(lineup) {
  const outfiled = ['OF', 'OF', 'Of']
  const field = ['C', 'P', 'SS', '2B', '1B', '3B']
  const positions = lineup.map((lineup) => lineup.position)

  // eslint-disable-next-line max-len
  return positions.every(currentValue => field.indexOf(currentValue) > -1) && positions.every(ofvalue => outfiled.indexOf(ofvalue) > -1)
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
  return TeamNumber(lineup) &&
  GameNumber(lineup) &&
  PlayerNumber(lineup) &&
  SalaryNumber(lineup) &&
  PositionNumber(lineup)
}

module.exports = validateLineup
