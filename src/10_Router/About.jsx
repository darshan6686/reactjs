import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  const gotnavigate = () => {
    navigate('/')
  }
  return (
  <div>
      <h1>This is about page</h1>
      <button onClick={() => gotnavigate()}>Click me</button>
    </div>
  )
}

export default About
