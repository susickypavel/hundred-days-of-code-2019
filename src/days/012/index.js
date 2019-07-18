import React, { useState, useEffect } from "react"

function Day12() {
  const [sizes, setSize] = useState({ w: 500, h: 500 })

  return (
    <ResizableContainer sizes={sizes}>
      <ResizeRight resize={setSize} />
      <ResizeBottom resize={setSize} />
      <ResizeBottomRight resize={setSize} />
    </ResizableContainer>
  )
}

const ResizeBottom = ({ resize }) => {
  return (
    <ResizeButton
      position={{ bottom: 0, left: "50%", transform: "translateX(-50%)" }}
      sizes={{ height: 15, width: 70 }}
      resize={e =>
        resize(prev => {
          console.log(e.clientX)
          return { ...prev, h: e.clientY }
        })
      }
    />
  )
}

const ResizeRight = ({ resize }) => {
  return (
    <ResizeButton
      position={{ right: 0, top: "50%", transform: "translateY(-50%)" }}
      sizes={{ height: 70, width: 15 }}
      resize={e =>
        resize(prev => {
          console.log(e.screenX)
          return { ...prev, w: e.clientX }
        })
      }
    />
  )
}

const ResizeBottomRight = ({ resize }) => {
  return (
    <ResizeButton
      position={{ right: 0, bottom: 0 }}
      sizes={{ height: 50, width: 50 }}
      resize={e =>
        resize(prev => {
          return { h: e.clientY, w: e.clientX }
        })
      }
    />
  )
}

const ResizeButton = ({ position, sizes, resize }) => {
  const [hold, setHold] = useState(false)

  const style = {
    position: "absolute",
    backgroundColor: "blue",
    ...position,
    ...sizes
  }

  useEffect(() => {
    if (hold) {
      document.addEventListener("mousemove", resize)
      document.addEventListener("mouseup", () => setHold(false))
    }

    return () => {
      document.removeEventListener("mousemove", resize)
      document.removeEventListener("mouseup", () => setHold(false))
    }
  }, [hold])

  return (
    <div
      onMouseDown={() => {
        setHold(true)
      }}
      style={style}
    />
  )
}

const ResizableContainer = ({ children, sizes }) => {
  const style = {
    height: sizes.h,
    width: sizes.w,
    backgroundColor: "red",
    position: "relative"
  }

  return <div style={style}>{children}</div>
}

export default Day12
