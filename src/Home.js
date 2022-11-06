import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel='canonical' href='/' />
        <meta name='description' content='Page leads the Home' />
      </Helmet>
      <main className='Home'>
        <p className='Welcome-Text'>
          <p className='Welcome-cover'>Welcome</p>
        </p>
        <h2 className='pcontacts-text'>Get started any way you want</h2>
        <div className='pcontacts'>
          <ul>
            <li className='profile'>
              <Link to='/profile'>Get started</Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home
