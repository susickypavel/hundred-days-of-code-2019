import React, { useState, useEffect, useDebugValue } from "react"

function useValidation(value) {
  const [error, setError] = useState(null)
  useDebugValue(error ? "Invalid input" : "Valid input")

  const reg = /(js)|(javascript)|(ts)|(typescript)/

  useEffect(() => {
    if (!reg.test(value)) {
      setError("Value is not what i wanted!")
    } else {
      setError(null)
    }
  }, [value, reg])

  return error
}

const Day6 = () => {
  const [value, setValue] = useState("javascript")
  const error = useValidation(value)

  return (
    <div>
      <input type="text" onChange={e => setValue(e.target.value)} />
      <p>Error: {error ? error : "No error"}</p>
    </div>
  )
}

export default Day6
