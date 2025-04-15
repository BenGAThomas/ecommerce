import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'

const Home = () => {
  return (
    
    <div>
      {/*use overlay to add in the over 18 agreement before user enters page. look into adding cookies to this so that it remembers the user for...24hrs i think */}
      <Hero />
      <LatestCollection />
    </div>
  )
}

export default Home