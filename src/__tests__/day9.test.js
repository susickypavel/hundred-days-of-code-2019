import React from "react"
import { render } from "@testing-library/react"
import Day9 from "../days/009"

global.fetch = jest.fn(() => new Promise(resolve => resolve("Hello World")))

test("test", () => {
  const {} = render(<Day9 />)
})
