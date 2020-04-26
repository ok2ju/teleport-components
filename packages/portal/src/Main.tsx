import * as React from 'react'

export interface MainProps {
  text: string
}

const Main: React.FC<MainProps> = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

export default Main
