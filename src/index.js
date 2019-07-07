import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Link, Route } from "react-router-dom"

import Days, { days } from "./days"

ReactDOM.render(
  <BrowserRouter>
    <Days />
    <Route
      exact={true}
      path="/"
      component={() =>
        days.map((_day, index) => {
          return <Link to={`/day${index}`}>Day number: {index + 1}</Link>
        })
      }
    />
  </BrowserRouter>,
  document.getElementById("mount")
)
