import React, { useState } from 'react'
import NewsContainer from './component/NewsContainer'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <NewsContainer />
    </div>
  )
}

export default App
