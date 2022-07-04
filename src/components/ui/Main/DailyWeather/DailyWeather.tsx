import React, { FC } from 'react'
import styles from './DailyWeather.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
import SunSvg from './../../../../assets/weatherStatusIcons/Sun.svg'
import RainSvg from './../../../../assets/weatherStatusIcons/Rain.svg'
import CloudSvg from './../../../../assets/weatherStatusIcons/Cloud.svg'
import ThunderstormSvg from './../../../../assets/weatherStatusIcons/Thunderstorm.svg'
import SuperRainSvg from './../../../../assets/weatherStatusIcons/SuperRain.svg'
// eslint-disable-next-line max-len
import ThunderstormWithRainSvg from './../../../../assets/weatherStatusIcons/ThunderstormWithRain.svg'
import DailyWidget from './DailyWidget/DailyWidget'

const data = [
  {
    img: SunSvg,
    months: 'Thu',
    temp: 28,
  },
  {
    img: RainSvg,
    months: 'Thu',
    temp: 28,
  },
  {
    img: CloudSvg,
    months: 'Thu',
    temp: 28,
  },
  {
    img: ThunderstormSvg,
    months: 'Thu',
    temp: 28,
  },
  {
    img: SuperRainSvg,
    months: 'Thu',
    temp: 28,
  },
  {
    img: ThunderstormWithRainSvg,
    months: 'Thu',
    temp: 28,
  },
]

const DailyWeather: FC = () => {
  const loading = false

  return (
    <div className={styles.weather}>
      {!loading &&
        data.map((el, index) => (
          <DailyWidget
            key={index}
            active={index === 0}
            img={el.img}
            months={el.months}
            temp={el.temp}
          />
        ))}

      {loading &&
        [...Array(6)].map((_, index) => (
          <Skeleton
            key={index}
            className={styles.skeleton}
            containerClassName={styles.skeletonWrapper}
          />
        ))}
    </div>
  )
}

export default DailyWeather
