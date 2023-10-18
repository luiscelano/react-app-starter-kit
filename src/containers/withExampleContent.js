import { useState } from 'react'
import withSpinner from 'src/containers/spinner/withSpinner'

const withExampleContent = (Component) => (props) => {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 1000)

  const componentProps = { ...props, example: 'example' }

  return withSpinner(isLoading)(Component)(componentProps)
}

export default withExampleContent
