import { useEffect, useState, useRef, useCallback } from 'react'
import withSpinner from './withSpinner'
import httpClient from '../utils/httpClient'
import config from '../config'
import withError from './withError'

const withPosts = (Component) => (props) => {
  const { API_URL } = config
  const [isLoading, setIsLoading] = useState(false)
  const [errorState, setErrorState] = useState({
    failed: false,
    message: null
  })
  const [posts, setPosts] = useState(null)
  const postsRef = useRef(false)

  const getPosts = useCallback(async () => {
    try {
      const response = await httpClient({
        url: `${API_URL}/posts`,
        method: 'get'
      })
      if (response.status === 200) {
        setPosts(response.data.posts)
      }
    } catch (error) {
      console.error('httpClient error:', error)
      setErrorState({
        failed: true,
        message: (error.response && `${error.message} - ${JSON.stringify(error?.response.data)}`) || error.message
      })
    }
  }, [API_URL])

  useEffect(() => {
    if (postsRef.current) return
    postsRef.current = true
    setIsLoading(true)
    getPosts()
  }, [getPosts])

  useEffect(() => {
    if (isLoading && (posts || errorState.failed)) setIsLoading(false)
  }, [posts, errorState, isLoading])

  const componentProps = { ...props, posts }

  return withSpinner(isLoading)(withError(errorState.failed, errorState.message)(Component))(componentProps)
}

export default withPosts
