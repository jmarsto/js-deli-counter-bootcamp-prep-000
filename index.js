var katzDeliLine = []

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing() {
  if (katzDeliLine.length > 0) {
    return "There is nobody waiting to be served!"
  }
  else if (katzDeliLine.length >= 1) {
    return `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  }
}