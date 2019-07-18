import React from "react"
import { Route } from "react-router-dom"

import Day1 from "./days/001"
import Day2 from "./days/002"
import Day3 from "./days/003"
import Day4 from "./days/004"
import Day5 from "./days/005"
import Day6 from "./days/006"
import Day7 from "./days/007"
import Day8 from "./days/008"
import Day9 from "./days/009"
import Day10 from "./days/010"
import Day11 from "./days/011"
import Day12 from "./days/012"

export const days = [Day1, Day2, Day3, Day4, Day5, Day6, Day7, Day8, Day9, Day10, Day11, Day12]

function Days() {
  return days.map((day, index) => {
    return <Route key={day} path={`/day${index}`} component={day} />
  })
}

export default Days
