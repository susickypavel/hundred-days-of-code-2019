import React, { useState } from "react"

function Day5() {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <button onClick={() => setVisible(prev => !prev)}>Toggle</button>
      {visible ? <div>Hello World</div> : null}
    </div>
  )
}

export default Day5
