import React from 'react'
import NavigationBar from 'src/components/NavigationBar'
import * as styles from './styles'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <styles.LayoutContainer>
        <Outlet />
      </styles.LayoutContainer>
    </React.Fragment>
  )
}

export default AppLayout
