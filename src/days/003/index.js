import React, { useState, useRef, useEffect } from "react"

function useIsVisible(ref) {
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { rootMargin: "0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.unobserve(ref.current)
    }
  }, [ref])

  return isVisible
}

function useOutsideClick(ref, toggle) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      toggle(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, toggle])
}

function Day3() {
  const el = useRef()
  const [isOpen, setOpen] = useState(false)
  console.log(useIsVisible(el, isOpen))

  useOutsideClick(el, () => setOpen(false))

  return (
    <div>
      <h1>Hello, World!</h1>
      <button onClick={() => setOpen(true)}>Modal</button>
      <div ref={el} style={{ background: "red", display: isOpen ? "block" : "none" }}>
        OPENED
      </div>
    </div>
  )
}

export default Day3
