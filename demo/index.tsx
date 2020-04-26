import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { usePortal } from '../packages/portal/src'

const Demo: React.FC = (): React.ReactElement => {
  const { Portal, ref, isOpen, close, toggle } = usePortal({ closeOnOutsideClick: true })

  return (
    <div>
      <button
        ref={ref}
        onClick={toggle}
      >
        Open Portal
      </button>
      {isOpen &&
        <Portal>
          <h1>Example Test</h1>
          <button onClick={close}>Close Portal</button>
        </Portal>}
    </div>
  )
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app')
)
