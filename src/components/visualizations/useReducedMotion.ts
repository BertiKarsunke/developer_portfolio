import { useEffect, useState } from "react"

const reducedMotionQuery = "(prefers-reduced-motion: reduce)"

function readReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia(reducedMotionQuery).matches
}

export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(readReducedMotion)

  useEffect(() => {
    const mediaQuery = window.matchMedia(reducedMotionQuery)
    const onChange = () => setReducedMotion(mediaQuery.matches)

    onChange()
    mediaQuery.addEventListener("change", onChange)
    return () => mediaQuery.removeEventListener("change", onChange)
  }, [])

  return reducedMotion
}
