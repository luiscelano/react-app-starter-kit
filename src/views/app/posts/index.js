import React from 'react'
import withPosts from '../../../containers/withPosts'

const Posts = (props) => {
  return (
    <>
      {Array.from(props.posts || []).map((post, index) => (
        <div key={index}>{post.description}</div>
      ))}
    </>
  )
}

export default withPosts(Posts)
