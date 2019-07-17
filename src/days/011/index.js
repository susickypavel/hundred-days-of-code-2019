import React, { createContext, useContext, useEffect, useState } from "react"

const context = createContext({ theme: "DARK" })

function Day11() {
  const value = useContext(context)
  const [darkTheme, toggleTheme] = useState(true)

  useEffect(() => {
    value.theme = darkTheme ? "DARK" : "LIGHT"
  }, [darkTheme])

  return (
    <div>
      <h1>Hello World</h1>
      <DeepComponent />
      <button
        onClick={() => {
          toggleTheme(prev => !prev)
        }}
      >
        Switch theme
      </button>
    </div>
  )
}

function DeepComponent() {
  const { theme } = useContext(context)

  return (
    <div style={{ background: theme === "DARK" ? "black" : "white", color: theme === "DARK" ? "white" : "black" }}>
      Deep inside the dom
    </div>
  )
}

export default Day11
