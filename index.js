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

  for (let i = 0; i < foods.length; i++) {

  if (find(foods[i]) === true) {
    return foods[i]
    }
  }
  return "no cheese!"
}

function find(food) {

  var cheese = ['cheddar', 'gouda', 'camembert']

  for(let i = 0; i < cheese.length; i++) {
    if (cheese[i] === food) {
      return true
    }
    return false
  }
}
