import React, { useEffect, useState } from 'react'
import Pag from './Pag'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function Junior() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [CurrentPage, setCurrentPage] = useState(1)
  const [PostPerPage] = useState(5)
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get(
        'https://api.github.com/users/AfaborMichael/repos?page=1&per_page=20'
      )
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  if (loading && posts.length === 0) {
    return (
      <h1>
        <div id='spinner' className='container'>
          <div className='loading'></div>
        </div>
      </h1>
    )
  }
  const indexOfLastPost = CurrentPage * PostPerPage
  const indexOfFirstPost = indexOfLastPost - PostPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const howManyPages = Math.ceil(posts.length / PostPerPage)

  // const currentPosts = posts.slice();
  return (
    <>
      {' '}
      <Helmet>
        <title>Repository</title>
        <link rel='canonical' href='/profile/Junior' />
        <meta
          name='description'
          content='Page leads to individual repositories'
        />
      </Helmet>
      <main className='contact-source'>
        <div className='contacts'>
          {currentPosts.map((user_data) => (
            <div className='contact-card'>
              <img
                src={user_data.owner.avatar_url}
                className='User-photo'
                alt='Userphoto'
              />
              <div className='info-group'>
                <h3 className='info-group-name'>{`${user_data.name}  `}</h3>
                <h6 className='info-group-ms'>{`${user_data.visibility}`}</h6>

                <Link to={`/profile/Junior/${user_data.name}`}>
                  <button>View Profile</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Pag pages={howManyPages} setCurrentPage={setCurrentPage} />
      </main>
    </>
  )
}

export default Junior
