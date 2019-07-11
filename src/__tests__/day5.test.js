import React from "react"
import { render } from "@testing-library/react"
import Day5 from "../days/005"

test("if toggle opens a 'modal'", () => {
  const { container, getByText } = render(<Day5 />)

  const Button = container.querySelector("button")

  Button.click()
  expect(getByText("Hello World")).toBeDefined()
})
