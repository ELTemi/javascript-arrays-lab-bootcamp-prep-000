const app = "I don't do much."

function destructivelyAppendKitten() {
 kittens.push("Ralph") 
 return kittens
}

function destructivelyPrependKitten() {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten() {
  return [...kittens, "Broom"]
}

function prependKitten() {
  return ["Arnold", ...kittens]
}

function removeLastKitten() {
  kittens.slice(2)
  return kittens
}

function removeFirstKitten() {
  kittens.slice(0)
  return kittens
}