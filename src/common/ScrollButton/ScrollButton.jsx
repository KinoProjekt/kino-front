import React, { useState, useEffect } from 'react'
import styles from './ScrollButton.module.scss'

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  )
}
