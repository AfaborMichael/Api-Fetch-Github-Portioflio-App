import React from 'react'
import './style.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import ErrorB from './components/ErrorB'
import Home from './Home'
import Profile from './Profile'
import ErrorBoundaries from './components/ErrorBoundaries'
import Junior from './components/Junior'
import Errorpage from './Errorpage'
import User from './components/User'
export default function App() {
  return (
    <main>
      <h1>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} className='home'></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route
            path='/profile/junior'
            element={
              <ErrorBoundaries>
                <Junior />
              </ErrorBoundaries>
            }
          ></Route>
          <Route
            path='/profile/ErrorB'
            element={
              <ErrorBoundaries>
                <ErrorB />
              </ErrorBoundaries>
            }
          ></Route>
          <Route path='profile/junior/:User' element={<User />}></Route>

          <Route path='/*' element={<Errorpage />}></Route>
        </Routes>
      </h1>
    </main>
  )
}
