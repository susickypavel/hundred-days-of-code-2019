import React from "react"

const Logger = (() => {
  const warnCode = 1
  const errorCode = 2

  function warn() {
    console.log("This is warn level", warnCode)
  }

  function error() {
    console.log("This is error level", errorCode)
  }

  return {
    warn,
    error
  }
})()

console.log(Logger)

const Car = function(model) {
  this.model = model
}

Car.prototype = (function() {
  return {
    brake: () => console.log("YEEEET")
  }
})()

const car = new Car("Yot")

console.log(car)

function Day10() {
  return <div>Patterns in Javascript!</div>
}

export default Day10
