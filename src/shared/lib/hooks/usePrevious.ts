import { useEffect, useRef } from 'react'

export function usePrevious<T = any>(value: T) {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value]) // Only re-run if value changes

  return ref.current
}
