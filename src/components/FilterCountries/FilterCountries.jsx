import React from 'react'
import styles from './FilterCountries.module.css'

const FilterCountries = ({ handleInputChange, handleSelectChange }) => {
  // Africa, Americas, Asia, Europe, Oceania
  return (
    <div className={styles.searchCountriesContainer}>
      <div className={styles.searchCountry}>
        <i className='searh-icon fa-solid fa-magnifying-glass' />
        <input
          type='text'
          placeholder='Search for a Country...'
          className={styles.inputField}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div>
      <div className={styles.filterCountries}>
        <select onChange={(e) => handleSelectChange(e.target.value)} className={styles.select}>
          <option value='all' defaultValue='all'>All Countries</option>
          <option value='africa'>Africa</option>
          <option value='americas'>Americas</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceania</option>
        </select>
      </div>
    </div>
  )
}

export default FilterCountries
