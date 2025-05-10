import { useState } from 'react'
// import ReactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Main from './components/Main'
import Header from './components/partials/Navbar'
import Footer from './components/partials/Footer'
// import './App.css'

function App() {
  console.log("App loaded")
  return (
    <>
      <Header />  
      <Main />
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
