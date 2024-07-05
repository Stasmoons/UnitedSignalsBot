bumpucksOpenInstructions.onclick = function() {
  instructionsBumpucks.classList.remove("b-none")
  instructionsBumpucks.classList.add("b-show")
}

royalOpenInstructions.onclick = function() {
  instructionsRoyal.classList.remove("b-none")
  instructionsRoyal.classList.add("b-show")
}

minesOpenInstructions.onclick = function () {
  instructionsMines.classList.remove("b-none")
  instructionsMines.classList.add("b-show")
}

for (let c of closeInstructions) {
  c.onclick = function () {
  instructionsBumpucks.classList.add("b-none")
  instructionsBumpucks.classList.remove("b-show")

  instructionsRoyal.classList.add("b-none")
  instructionsRoyal.classList.remove("b-show")

  instructionsMines.classList.add("b-none")
  instructionsMines.classList.remove("b-show")
}}