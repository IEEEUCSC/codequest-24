"use client"

import { useState, useEffect } from "react"

interface Dimensions {
  width: number
  height: number
}

export function useComponentDimensions(id: string): Dimensions {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 })

  useEffect(() => {
    const measure = () => {
      const element = document.getElementById(id)
      if (element) {
        const { width, height } = element.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    // Initial measurement
    measure()

    // Set up resize observer
    const resizeObserver = new ResizeObserver(measure)
    const element = document.getElementById(id)
    if (element) {
      resizeObserver.observe(element)
    }

    // Clean up
    return () => {
      if (element) {
        resizeObserver.unobserve(element)
      }
    }
  }, [id])

  return dimensions
}

