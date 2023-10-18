import { useEffect, useState, useRef, useCallback } from 'react'
import withSpinner from 'src/containers/spinner/withSpinner'
import httpClient from 'src/utils/httpClient'
import withError from 'src/containers/error/withError'

const withPosts = (Component) => (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorState, setErrorState] = useState({
    failed: false,
    message: null
  })
  const [posts, setPosts] = useState(null)
  const postsRef = useRef(false)

  const getPosts = useCallback(async () => {
    try {
      const response = await httpClient.get('/v2/posts')
      if (response.status === 200) {
        setPosts(response.data.posts)
      }
    } catch (error) {
      console.error('httpClient error:', error)
      setErrorState({
        failed: true,
        message: error.message
      })
    }
  }, [])

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
