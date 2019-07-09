import React from "react"
import { Route } from "react-router-dom"

import Day1 from "./days/001"
import Day2 from "./days/002"
import Day3 from "./days/003"

export const days = [Day1, Day2, Day3]

function Days() {
  return days.map((day, index) => {
    return <Route key={day} path={`/day${index}`} component={day} />
  })
}

export default Days
