import * as React from 'react'
import { usePortal } from '../../packages/portal/src'

const HomePage: React.FC = (): React.ReactElement => {
  const { Portal, ref, isOpen, close, toggle } = usePortal()

  return (
    <div>
      <button ref={ref} onClick={toggle}>
        Open Portal
      </button>
      {isOpen ? (
        <Portal>
          <h1>Example Test</h1>
          <button onClick={close}>Close Portal</button>
        </Portal>
      ) : null}
    </div>
  )
}

export default HomePage
