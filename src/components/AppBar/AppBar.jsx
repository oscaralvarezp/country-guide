import React from 'react'
import styles from './AppBar.module.css'

const AppBar = ({ title, handleTheme, darkmode }) => {
  return (
    <header className={styles.header}>
      <div className='appName'>
        <h3>{title}</h3>
      </div>
      <div>
        <button className={styles.toggleButtom} onClick={handleTheme}>
          {darkmode
            ? (
              <>
                <i className='fa-solid fa-sun' /> Light Mode
              </>
              )
            : (
              <>
                <i className='fa-solid fa-moon' /> Dark Mode
              </>
              )}
        </button>
      </div>
    </header>
  )
}

export default AppBar
