import {
  ReactElement,
  ReactPortal,
  MouseEvent,
  useState,
  useEffect,
  useRef,
  useCallback
} from 'react'
import { createPortal } from 'react-dom'
import { useOnClickOutside } from './useOnClickOutside'

export interface Options {
  closeOnOutsideClick: boolean; // TODO: add default value
}

export interface PortalProps {
  children: ReactElement[];
}

export interface IPortal {
  open: (event: MouseEvent) => void;
  close: (event: MouseEvent) => void;
  toggle: (event: MouseEvent) => void;
  isOpen: boolean;
  Portal: (props: PortalProps) => ReactPortal;
  ref: { current: any };
}

export const usePortal = (options: Options): IPortal => {
  const [isOpen, setOpen] = useState(false)
  const latestIsOpen = useRef(isOpen)
  const portalNode = useRef(document.createElement('div'))
  const refNode = useRef()

  const syncronizeAndSetOpen = useCallback((value) => {
    latestIsOpen.current = value
    setOpen(value)
  }, [])

  const open = useCallback((event: MouseEvent | Event) => { // TODO: add onOpen handler to Options and pass `event`
    syncronizeAndSetOpen(true)
  }, [syncronizeAndSetOpen])

  const close = useCallback((event: MouseEvent | Event) => {
    if (latestIsOpen.current) {
      syncronizeAndSetOpen(false)
    }
  }, [syncronizeAndSetOpen])

  const toggle = useCallback((event: MouseEvent | Event) => {
    if (latestIsOpen.current) {
      close(event)
    } else {
      open(event)
    }
  }, [open, close])

  useOnClickOutside(portalNode, refNode, useCallback((event: Event) => {
    if (options.closeOnOutsideClick) {
      close(event)
    }
  }, []))

  const Portal = useCallback((props) => {
    useEffect(() => {
      document.body.appendChild(portalNode.current)

      return () => {
        document.body.removeChild(portalNode.current)
      }
    }, [portalNode])

    return createPortal(props.children, portalNode.current)
  }, [portalNode])

  return {
    open,
    close,
    toggle,
    Portal,
    isOpen,
    ref: refNode
  }
}
