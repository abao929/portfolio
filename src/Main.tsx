import React from 'react'
import Title from './components/Title'
import './global.sass'

type Props = {}

export default function Main({}: Props) {
  return (
    <div>
      <Title></Title>
      <div className='what'>How does this affect things</div>
      {/* Projects */}
    </div>
  )
}
