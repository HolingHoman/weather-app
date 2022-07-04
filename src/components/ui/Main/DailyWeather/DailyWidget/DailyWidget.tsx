import React, { FC } from 'react'
import styles from './DailyWidget.module.scss'

interface IProps {
  img: string
  months: string
  temp: number
  active: boolean
}

const DailyWidget: FC<IProps> = ({ img, months, temp, active }) => {
  return (
    <div className={`${styles.widget} ${active ? styles.active : ''}`}>
      <img className={styles.img} src={img} alt="weather icon" />
      <p className={styles.months}>{months}</p>
      <p className={styles.temp}>{temp}°</p>
    </div>
  )
}

export default DailyWidget
