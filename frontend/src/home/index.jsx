import React from 'react'
import { UserButton } from '@clerk/clerk-react'
import header from '../components/ui/custom/header'
import Header from '../components/ui/custom/header'

function Home() {
  return (
    <div>
      <Header/>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
    </div>
  )
}

export default Home