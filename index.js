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

function currentLine(katzDeliLine) {
  var readOut = "The line is currently: "
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
    readOut = readOut + `${(i + 1)}. ${katzDeliLine[i]}, `
    }
    return readOut.slice(0, -2)
  }
  else {
    return "The line is currently empty."
  }
}