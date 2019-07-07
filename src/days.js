import React from "react"
import { Route } from "react-router-dom"

import Day1 from "./days/001"

export const days = [Day1]

function Days() {
  return days.map((day, index) => {
    return <Route path={`/day${index}`} component={day} />
  })
}

export default Days
