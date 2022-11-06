import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function User() {
  let { User } = useParams()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
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
  const Newuser = posts.find((user_data) => user_data.name === User)

  return (
    <>
      <Helmet>
        <title>User Repository</title>
        <link rel='canonical' />
        <meta
          name='description'
          content='Page leads to each github repositories'
        />
      </Helmet>

      <main className='Git--source'>
        <div className='Git-1'>
          <h3 className='Git-1-login'>
            {`${
              Newuser ? (
                `${Newuser.owner.login}/${Newuser.name}`
              ) : (
                <p>loading</p>
              )
            }`}{' '}
          </h3>
          <h5 className='Git-1-public'>{`${
            Newuser ? `${Newuser.visibility}` : <p>loading</p>
          }`}</h5>
          <p className='Git-1-description'>
            {Newuser?.description === null
              ? `${''}`
              : `${Newuser?.description}`}
          </p>

          <p className='Git-1-homepage'>
            {Newuser?.homepage === null ? (
              ` ${''}`
            ) : (
              <p>{Newuser?.homepage.slice(8)}</p>
            )}
          </p>
          <span className='Git-1-star-and-fork'>
            <span className='Git-1-stargazers'>{`${
              Newuser ? `${Newuser.stargazers_count} star` : <p>loading</p>
            }`}</span>
            <span className='Git-1-forks'>{`${
              Newuser ? `${Newuser.watchers_count} forks` : <p>loading</p>
            }`}</span>
          </span>

          <p className='Git-1-Release'>
            Releases
            <h6>No releases published</h6>
          </p>
          <p className='Git-1-Release'>
            Packages
            <h6>No packages published</h6>
          </p>
          <div className=''>
            {Newuser?.language === null ? `${''} ` : `${Newuser?.language}`}
          </div>
        </div>
        <div className='Git-2'>
          <div className='Git-2-button'>
            <a href={Newuser?.html_url} target='_blank'>
              View on Github
            </a>
          </div>
          <Link to={`/profile/Junior`}>
            <button>Go Back</button>
          </Link>
        </div>
      </main>
    </>
  )
}
