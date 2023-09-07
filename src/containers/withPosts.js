import { useEffect, useState, useRef } from 'react'
import withSpinner from './withSpinner'
import httpClient from '../utils/httpClient'
import config from '../config'

const withPosts = (Component) => (props) => {
  const { API_URL } = config
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState(null)
  const postsRef = useRef(false)

  const getPosts = async () => {
    try {
      const response = await httpClient({
        url: `${API_URL}/posts`,
        method: 'get'
      })
      if (response.status === 200) setPosts(response.data.posts)
    } catch (error) {
      console.log('httpClient error:', error.message)
    }
  }

  useEffect(() => {
    if (postsRef.current) return
    postsRef.current = true
    getPosts()
  }, [])

  useEffect(() => setIsLoading(false), [posts])

  const componentProps = { ...props, posts }

  return withSpinner(isLoading)(Component)(componentProps)
}

export default withPosts
