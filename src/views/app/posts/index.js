import React from 'react'
import withPosts from '../../../containers/withPosts'

function Posts(props) {
  return (
    <ul>
      {Array.from(props.posts || []).map((post, index) => (
        <li key={index}>{post.description}</li>
      ))}
    </ul>
  )
}

export default withPosts(Posts)
