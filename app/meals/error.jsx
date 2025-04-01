'use client'
import React from 'react'

const Error = ({error}) => {
  return (
    <main className='error'>
      <h1>Something went wrong</h1>
      <p>Failed to load meals</p>
    </main>
  )
}

export default Error