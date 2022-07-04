import React, { FC } from 'react'
import styles from './SideBar.module.scss'
import Widget from './Widget/Widget'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

const SideBar: FC = ({}) => {
  const loading = false

  return (
    <section className={styles.sidebar}>
      {loading && (
        <Skeleton className={styles.skeletonCard} containerClassName={styles.skeletonWrapper} />
      )}
      {!loading && <Widget />}
    </section>
  )
}

export default SideBar
