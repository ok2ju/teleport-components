import { useEffect } from 'react'

interface Ref {
  current: any
}

type Handler = (event: Event) => void

const containsTarget = (target: Ref, event: Event): boolean =>
  target?.current.contains(event.target)

export const useOnClickOutside = (container: Ref, ref: Ref, handler: Handler): void => {
  useEffect(() => {
    const listener = (event: Event): void => {
      if (containsTarget(container, event) || containsTarget(ref, event)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [container, ref, handler])
}
