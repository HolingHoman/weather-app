import React, { FC } from 'react'
import styles from './CurrentState.module.scss'
import ThemeSwitcher from './ThemeSwither/ThemeSwitcher'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

const CurrentState: FC = ({}) => {
  return (
    <div className={styles.state}>
      <div className={styles.left}>
        <p className={styles.currentTime}>07:40 AM</p>
        <p className={styles.currentDate}>Wednesday, 14 April, 2021</p>
        <p className={styles.currentState}>
          <span className={styles.icon}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#F0F5FF" xmlns="http://www.w3.org/2000/svg">
              {/* eslint-disable-next-line max-len */}
              <path d="M3.79297 10.5C3.79297 10.2348 3.68761 9.98043 3.50008 9.79289C3.31254 9.60536 3.05819 9.5 2.79297 9.5H1.79297C1.52775 9.5 1.2734 9.60536 1.08586 9.79289C0.898326 9.98043 0.792969 10.2348 0.792969 10.5C0.792969 10.7652 0.898326 11.0196 1.08586 11.2071C1.2734 11.3946 1.52775 11.5 1.79297 11.5H2.79297C3.05819 11.5 3.31254 11.3946 3.50008 11.2071C3.68761 11.0196 3.79297 10.7652 3.79297 10.5ZM4.43297 15.5L3.72297 16.21C3.53672 16.3974 3.43218 16.6508 3.43218 16.915C3.43218 17.1792 3.53672 17.4326 3.72297 17.62C3.91033 17.8063 4.16378 17.9108 4.42797 17.9108C4.69215 17.9108 4.94561 17.8063 5.13297 17.62L5.84297 16.91C6.0068 16.7187 6.0924 16.4726 6.08268 16.2209C6.07296 15.9693 5.96863 15.7305 5.79053 15.5524C5.61244 15.3743 5.3737 15.27 5.12202 15.2603C4.87035 15.2506 4.62427 15.3362 4.43297 15.5ZM10.793 3.5C11.0582 3.5 11.3125 3.39464 11.5001 3.20711C11.6876 3.01957 11.793 2.76522 11.793 2.5V1.5C11.793 1.23478 11.6876 0.98043 11.5001 0.792893C11.3125 0.605357 11.0582 0.5 10.793 0.5C10.5278 0.5 10.2734 0.605357 10.0859 0.792893C9.89833 0.98043 9.79297 1.23478 9.79297 1.5V2.5C9.79297 2.76522 9.89833 3.01957 10.0859 3.20711C10.2734 3.39464 10.5278 3.5 10.793 3.5ZM16.453 5.84C16.7153 5.8389 16.9667 5.73474 17.153 5.55L17.863 4.84C17.9676 4.75035 18.0527 4.64004 18.1127 4.51597C18.1727 4.39191 18.2064 4.25677 18.2118 4.11905C18.2171 3.98133 18.1939 3.844 18.1436 3.71568C18.0933 3.58735 18.0171 3.4708 17.9196 3.37335C17.8222 3.27589 17.7056 3.19964 17.5773 3.14936C17.449 3.09909 17.3116 3.07588 17.1739 3.0812C17.0362 3.08652 16.9011 3.12025 16.777 3.18027C16.6529 3.2403 16.5426 3.32532 16.453 3.43L15.793 4.14C15.6067 4.32736 15.5022 4.58081 15.5022 4.845C15.5022 5.10919 15.6067 5.36264 15.793 5.55C15.9693 5.72536 16.2046 5.82875 16.453 5.84ZM4.45297 5.55C4.63923 5.73474 4.89063 5.8389 5.15297 5.84C5.28458 5.84076 5.41504 5.81554 5.53688 5.76577C5.65871 5.71601 5.76953 5.64268 5.86297 5.55C6.04922 5.36264 6.15376 5.10919 6.15376 4.845C6.15376 4.58081 6.04922 4.32736 5.86297 4.14L5.15297 3.43C5.06039 3.3361 4.95022 3.26136 4.82875 3.21005C4.70728 3.15873 4.5769 3.13184 4.44504 3.13091C4.31318 3.12998 4.18243 3.15503 4.06025 3.20463C3.93807 3.25424 3.82686 3.32742 3.73297 3.42C3.63907 3.51258 3.56433 3.62275 3.51301 3.74422C3.4617 3.86568 3.43481 3.99607 3.43388 4.12793C3.432 4.39423 3.53599 4.65037 3.72297 4.84L4.45297 5.55ZM19.793 9.5H18.793C18.5278 9.5 18.2734 9.60536 18.0859 9.79289C17.8983 9.98043 17.793 10.2348 17.793 10.5C17.793 10.7652 17.8983 11.0196 18.0859 11.2071C18.2734 11.3946 18.5278 11.5 18.793 11.5H19.793C20.0582 11.5 20.3125 11.3946 20.5001 11.2071C20.6876 11.0196 20.793 10.7652 20.793 10.5C20.793 10.2348 20.6876 9.98043 20.5001 9.79289C20.3125 9.60536 20.0582 9.5 19.793 9.5ZM17.153 15.5C16.963 15.3943 16.7437 15.3534 16.5284 15.3835C16.3131 15.4136 16.1135 15.5131 15.9598 15.6668C15.806 15.8205 15.7066 16.0202 15.6765 16.2355C15.6464 16.4508 15.6873 16.67 15.793 16.86L16.503 17.57C16.6903 17.7563 16.9438 17.8608 17.208 17.8608C17.4722 17.8608 17.7256 17.7563 17.913 17.57C18.0992 17.3826 18.2038 17.1292 18.2038 16.865C18.2038 16.6008 18.0992 16.3474 17.913 16.16L17.153 15.5ZM10.793 5C9.70517 5 8.6418 5.32257 7.73733 5.92692C6.83286 6.53126 6.12791 7.39025 5.71163 8.39524C5.29535 9.40023 5.18643 10.5061 5.39865 11.573C5.61087 12.6399 6.13469 13.6199 6.90388 14.3891C7.67307 15.1583 8.65308 15.6821 9.71997 15.8943C10.7869 16.1065 11.8927 15.9976 12.8977 15.5813C13.9027 15.1651 14.7617 14.4601 15.3661 13.5556C15.9704 12.6512 16.293 11.5878 16.293 10.5C16.2903 9.04212 15.71 7.64471 14.6791 6.61383C13.6483 5.58295 12.2508 5.00264 10.793 5ZM10.793 14C10.1007 14 9.42404 13.7947 8.84847 13.4101C8.2729 13.0256 7.8243 12.4789 7.55939 11.8394C7.29448 11.1999 7.22517 10.4961 7.36022 9.81718C7.49527 9.13825 7.82861 8.51461 8.3181 8.02513C8.80758 7.53564 9.43122 7.2023 10.1102 7.06725C10.7891 6.9322 11.4928 7.00151 12.1324 7.26642C12.7719 7.53133 13.3185 7.97993 13.7031 8.5555C14.0877 9.13108 14.293 9.80777 14.293 10.5C14.293 11.4283 13.9242 12.3185 13.2678 12.9749C12.6115 13.6313 11.7212 14 10.793 14ZM10.793 17.5C10.5278 17.5 10.2734 17.6054 10.0859 17.7929C9.89833 17.9804 9.79297 18.2348 9.79297 18.5V19.5C9.79297 19.7652 9.89833 20.0196 10.0859 20.2071C10.2734 20.3946 10.5278 20.5 10.793 20.5C11.0582 20.5 11.3125 20.3946 11.5001 20.2071C11.6876 20.0196 11.793 19.7652 11.793 19.5V18.5C11.793 18.2348 11.6876 17.9804 11.5001 17.7929C11.3125 17.6054 11.0582 17.5 10.793 17.5Z" />
            </svg>
          </span>
          Good morning! Now&nbsp;
          <Skeleton className={styles.skeleton} />.
        </p>
      </div>
      <div className={styles.right}>
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default CurrentState
