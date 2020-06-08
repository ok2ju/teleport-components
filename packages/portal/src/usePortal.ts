import { ReactNode, ReactPortal, MouseEvent, useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useOnClickOutside } from './useOnClickOutside'

export interface Options {
  closeOnOutsideClick: boolean
}

export interface PortalProps {
  children: ReactNode
}

export interface IPortal {
  ref: { current: any }
  isOpen: boolean
  open: (event: MouseEvent) => void
  close: (event: MouseEvent) => void
  toggle: (event: MouseEvent) => void
  Portal: (props: PortalProps) => ReactPortal
}

const defaultOptions: Options = {
  closeOnOutsideClick: true
}

export const usePortal = (options: Options = defaultOptions): IPortal => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const latestIsOpen = useRef(isOpen)
  const refNode = useRef()

  const syncronizeAndSetOpen = useCallback((value) => {
    latestIsOpen.current = value
    setOpen(value)
  }, [])

  const open = useCallback(
    (event: MouseEvent | Event) => {
      syncronizeAndSetOpen(true)
    },
    [syncronizeAndSetOpen]
  )

  const close = useCallback(
    (event: MouseEvent | Event) => {
      if (latestIsOpen.current) {
        syncronizeAndSetOpen(false)
      }
    },
    [syncronizeAndSetOpen]
  )

  const toggle = useCallback(
    (event: MouseEvent | Event) => {
      if (latestIsOpen.current) {
        close(event)
      } else {
        open(event)
      }
    },
    [open, close]
  )

  const Portal = (props: { children: ReactNode }): ReactPortal => {
    const portalNode = useRef(document.createElement('div'))

    useOnClickOutside(portalNode, refNode, (event: Event) => {
      if (options.closeOnOutsideClick) {
        close(event)
      }
    })

    useEffect(() => {
      const element = portalNode.current
      document.body.appendChild(element)

      return () => {
        document.body.removeChild(element)
      }
    }, [])

    return createPortal(props.children, portalNode.current)
  }

  return {
    open,
    close,
    toggle,
    Portal,
    isOpen,
    ref: refNode
  }
}
