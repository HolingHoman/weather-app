import React, { FC } from 'react'
import styles from './Card.module.scss'

interface IProps {
  type: number
  title: string
  value: string
  img: string
}

const Card: FC<IProps> = ({ type, title, value, img }) => {
  return (
    <div className={`${styles.card} ${styles[`type_${type}`]}`}>
      <p className={styles.title}>{title}</p>
      <img src={img} alt="card icon" />
      <p className={styles.value}>{value}</p>
    </div>
  )
}

export default Card
