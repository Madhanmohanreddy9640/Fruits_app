import React from 'react'
import Index from './Componets/Index'
import Ads from './Componets/Ads'
import Shopping from './Componets/Shopping'
import About from './Componets/About'
import Copyright from './Componets/Copyright'
import Search from './Componets/Search'
import './CSS/Style.css'

function App() {
  return (
    <div>
      <Index/>
      <Search/>
      <Ads/>
      <Shopping />
      <About/>
      <Copyright/>
    </div>
  )
}

export default App
