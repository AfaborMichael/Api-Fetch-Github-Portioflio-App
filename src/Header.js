import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [Mobile, setMobile] = React.useState(false)
  return (
    <>
      <header className='navbar'>
        <h3 className='logo'>My-Repos</h3>
        <ul
          className={Mobile ? 'nav-links-mobile' : 'nav-links'}
          onClick={() => setMobile(false)}
        >
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/profile' className='signup'>
            <li>Profile</li>
          </Link>
          <Link to='/profile/Junior' className='contact'>
            <li>Repos</li>
          </Link>
          <Link to='/profile/ErrorB' className='contact'>
            <li>Error Boundary page</li>
          </Link>
          <Link to='/about' className='about'>
            <li>About</li>
          </Link>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? (
            <i className='fas fa-times'></i>
          ) : (
            <i className='fas fa-bars'></i>
          )}
        </button>
      </header>
    </>
  )
}

export default Header
