var katzDeliLine = []

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nowUp = katzDeliLine.shift()
    return `Currently serving ${nowUp}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}