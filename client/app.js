import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div display="flex">
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
