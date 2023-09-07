import React from 'react'

const withSpinner = (condition) => (Component) => (props) => {
  if (condition) return <div>loading...</div>

  return <Component {...props} />
}

export default withSpinner
