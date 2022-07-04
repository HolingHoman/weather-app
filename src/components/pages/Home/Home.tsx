import React, { FC } from 'react'
import styles from './Home.module.scss'
import Main from '../../ui/Main/Main'
import SideBar from '../../ui/SideBar/SideBar'

const Home: FC = ({}) => {
  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <Main />
      </div>
      <div className={styles.right}>
        <SideBar />
      </div>
    </div>
  )
}

export default Home
