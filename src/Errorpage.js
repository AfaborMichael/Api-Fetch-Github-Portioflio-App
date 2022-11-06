import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
function Errorpage() {
  return (
    <>
      <Helmet>
        <title>Errorpage</title>
        <link rel='canonical' href='/*' />
        <meta name='description' content='Page leads Error Testing' />
      </Helmet>
      <main className='Error'>
        <h2>Webpage not Found</h2>
        <Link to='/'>Back to the Home Page...</Link>
      </main>
    </>
  )
}

export default Errorpage
