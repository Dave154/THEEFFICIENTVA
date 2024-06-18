import { useState } from 'react'
import {useGlobalContext} from './context.jsx'
import {createBrowserRouter,Routes,Route} from 'react-router-dom'

import Nav from './components/nav.jsx'
import Profile from './components/profile.jsx'
import About from './components/about.jsx'
import Preview from './components/preview.jsx'
import Reviews from './components/reviews.jsx'
import Services from './components/services.jsx'
import Contact from './components/contact.jsx'
import WriteReview from './components/writeReview.jsx'
const App=()=> {
  return (
    <main>
     <Nav/>
     <Profile/>
     <About/>
     <Preview/>
     <Reviews/>
     <Services/>
     <Contact/>
     <WriteReview/>
    </main>
  )
}

export default App
