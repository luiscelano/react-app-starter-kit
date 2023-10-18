import React from 'react'
import * as styles from './styles'
import * as counterSelectors from 'src/redux/counter/selectors'
import { useSelector } from 'react-redux'

const NavigationBar = () => {
  const counter = useSelector(counterSelectors.getCounterSelector)

  return (
    <styles.NavigationBarContainer>
      <span>Navigation bar</span>
      <span>{`count: ${counter}`}</span>
    </styles.NavigationBarContainer>
  )
}

export default NavigationBar
