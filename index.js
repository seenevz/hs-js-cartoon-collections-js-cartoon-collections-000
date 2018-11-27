function dwarfRollCall(dwarves) {
  var stringArray = []

  for(let i = 0; i < dwarves.length; i++) {
    stringArray.push(`${i + 1}. ${dwarves[i]}`)
  }
  return stringArray.join(` `)
}

function summonCaptainPlanet(planeteerCalls){
}

function longPlaneteerCalls(words) {

  if (words > 3) {
    return true
  }
  else {
    return false
  }
}

function findTheCheese (foods) {
}
