import React, { useState, useEffect } from 'react'
import styles from './ScrollButton.module.scss'
import { FaArrowUp } from 'react-icons/fa'

export const ScrollButton = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const scrollToTop = () => {
      if (scroll == true) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      setScroll(false)
    }

    window.addEventListener('click', scrollToTop)

    return () => window.removeEventListener('click', scrollToTop)
  }, [scroll])

  return (
    <div className={styles.btn} onClick={() => setScroll(true)}>
      <FaArrowUp />
    </div>
  )
}
