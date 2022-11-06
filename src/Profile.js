import React from 'react'
import { NavLink, Routes, Route, Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
function Profile() {
  return (
    <>
      <Helmet>
        <title>Profile</title>
        <link rel='canonical' href='/profile' />
        <meta name='description' content='Page leads the profile' />
      </Helmet>
      <main className='Home'>
        <p className='p-profile'>PROFILE PAGE </p>
        <p className='pcontacts-text-profile'>
          A Simple Github Api fetch and Pagination Interface{' '}
        </p>
        <div className='pcontacts'>
          <ul>
            <li className='profile'>
              <NavLink to='/profile/Junior'>Repository</NavLink>
            </li>
          </ul>
        </div>

        <Outlet />
      </main>
    </>
  )
}

export default Profile
