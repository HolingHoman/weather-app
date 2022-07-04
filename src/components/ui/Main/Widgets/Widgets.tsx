import React, { FC } from 'react'
import styles from './Widgets.module.scss'
import WindWidget from './WindWidget/WindWidget'
import OtherWidget from './OtherWidget/OtherWidget'

const Widgets: FC = ({}) => {
  return (
    <div className={styles.widgets}>
      <WindWidget />
      <OtherWidget />
    </div>
  )
}

export default Widgets
