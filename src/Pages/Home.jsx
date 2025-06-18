import React from 'react'

import { Header, Footer, Whychoose, Team, Applicationprocess } from '../Componenets'

const Home = () => {
  return (
    <div>
      <main style={{ flex: 1 }}>
        <Header />
        <Whychoose />
        <Team />
        <Applicationprocess />
      </main>
      <Footer >
        <Footer />
      </Footer>
  
    </div>
  )
}

export default Home