import React, { FC } from 'react'
import styles from './Main.module.scss'
import CurrentState from './CurrentState/CurrentState'
import DailyWeather from './DailyWeather/DailyWeather'
import SunState from './SunState/SunState'
import Widgets from './Widgets/Widgets'

const Main: FC = () => {
  return (
    <section className={styles.main}>
      <CurrentState />
      <DailyWeather />
      <SunState />
      <Widgets />
    </section>
  )
}

export default Main
