import React from 'react'

const withError = (condition, message) => (Component) => (props) => {
  if (condition) return <div>{message}</div>

  return <Component {...props} />
}

export default withError
