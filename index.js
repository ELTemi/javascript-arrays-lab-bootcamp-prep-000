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
  kittens = kittens.slice(0, kittens.length - 1)
  return kittens
}

function removeFirstKitten() {
  kittens = kittens.slice(1)
  return kittens
}