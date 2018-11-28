function dwarfRollCall(dwarves) {
  var stringArray = []

  for(let i = 0; i < dwarves.length; i++) {
    stringArray.push(`${i + 1}. ${dwarves[i]} `)
  }
  return stringArray.join(``)
}

function summonCaptainPlanet(planeteerCalls){
  var shout = []

  for (let i = 0; i < planeteerCalls.length; i++) {
    shout.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return shout
}

function longPlaneteerCalls(words) {

  if (words.length > 3) {
    return true
  }
  else {
    return false
  }
}

function findTheCheese(foods) {
  var cheese = ['cheddar', 'gouda', 'camembert']

  for (let i = 0; i < foods.length; i++) {

  if (cheese.includes(foods[i])) {
    return foods[i]
    }
  }
  return "no cheese!"
}
