import React, { FC } from 'react'
import styles from './Card.module.scss'

interface IProps {
  name: string
  value: number
}

const Card: FC<IProps> = ({ name, value }) => {
  return (
    <div className={styles.card}>
      <p className={styles.value}>{value}</p>
      <p className={styles.title}>{name}</p>
    </div>
  )
}

export default Card
