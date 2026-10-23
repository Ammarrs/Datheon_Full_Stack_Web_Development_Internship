import React from 'react'
import Hero from '../components/Hero'
import Featured from '../components/Featured'

function Home() {
  return (
    <div className='px-40'>
      <Hero/>
      <Featured/>
    </div>
  )
}

export default Home