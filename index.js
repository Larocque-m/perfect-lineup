// check lineup on a team 
// check lineup in a game
// check number of player to be 9 in a lineup  
// Check to have the right amount of players and right number of positions 
// have three OF and a C, P, 1B, 2B, 3B, SS
// false when too few players 
// false when salary greater than 4500

function SalaryNumber(lineup) {
  return (45000 > lineup.reduce((total, salary) => total + salary))
}

function PlayerNumber(lineup) {
  return lineup.length === 9
}

function PositionNumber(lineup) {
  const 
}

const validateLineup = (lineup) => {
  return teamNumber(lineup) && gameNumber(lineup) && PlayerNumber(lineup) && SalaryNumber(lineup) && PositionNumber(lineup)
}

module.exports = validateLineup
