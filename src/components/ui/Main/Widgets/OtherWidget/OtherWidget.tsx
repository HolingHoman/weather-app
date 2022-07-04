import React, { FC } from 'react'
import styles from './OtherWidget.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
import VisibleSvg from './../../../../../assets/icons/Visible.svg'
import CloudSvg from './../../../../../assets/icons/Cloud.svg'
import RainSvg from './../../../../../assets/icons/Rain.svg'
import Card from './Card/Card'

const data = [
  {
    title: 'Visibility',
    img: VisibleSvg,
    value: '8 km',
  },
  {
    title: 'Clouds',
    img: CloudSvg,
    value: '51 %',
  },
  {
    title: 'Rain',
    img: RainSvg,
    value: '3 mm',
  },
]

const OtherWidget: FC = () => {
  const loading = false

  return (
    <div className={styles.widget}>
      <p className={styles.title}>Other</p>

      <div className={styles.cards}>
        {loading &&
          [...Array(3)].map((_, index) => (
            <Skeleton
              key={index}
              className={styles.skeletonCard}
              containerClassName={styles.skeletonWrapper}
            />
          ))}
        {!loading &&
          data.map((el, index) => (
            <Card key={index} type={index + 1} title={el.title} img={el.img} value={el.value} />
          ))}
      </div>
    </div>
  )
}

export default OtherWidget
