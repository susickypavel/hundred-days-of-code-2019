import React, { useEffect, useState } from "react"

const Day9 = () => {
  const [data, setData] = useState({ error: null, valu: null })

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(data => {
        console.log(data)
        setData({ value: data, error: null })
      })
      .catch(error => {
        setData({ error: "Error", value: null })
      })
  }, [])

  const { value, error } = data
  return <div>{error ? error : value}</div>
}

export default Day9
