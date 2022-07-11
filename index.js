function scuberGreetingForFeet(distance){
  let cost
  if (distance <= 400) {
    cost = 'This one is on me!';
  }
  else if (distance > 400 && distance < 2000) {
    cost = 'That will be twenty bucks.';
  }
  else if (distance > 2000 && distance < 2500) {
    cost = 'I will gladly take your thirty bucks.';
  }
  else if (distance > 2500) {
    cost = 'No can do.';
  }
  return cost
}

function ternaryCheckCity(city){
  let travelingOpinion
  city === 'NYC' ? travelingOpinion = 'Ok, sounds good.': travelingOpinion = 'No go.'

  return travelingOpinion
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.' 
  }
}