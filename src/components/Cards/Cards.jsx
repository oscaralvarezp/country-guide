import React from 'react'
import { Link } from 'react-router-dom'

import { formatNumber, slugify } from '../../utils'

import styles from './Cards.module.css'

const Cards = ({ data }) => {
  return (
    <div className={styles.cards}>
      {data.length === 0 && <h1>Country not found</h1>}
      {data.map(({ image, countryName, population, region, capital }, index) => (
        <Link key={index} to={`/country/${slugify(countryName)}`}>
          <div className={styles.card}>
            <figure className={styles.cardHeader}>
              <img src={image} alt={countryName} />
            </figure>
            <section className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{countryName}</h2>
              <div className='card-description'>
                <p className={styles.cardParagraph}>
                  <strong>Population: </strong> {formatNumber(population)}
                </p>
                <p className={styles.cardParagraph}>
                  <strong>Region: </strong> {region}
                </p>
                <p className={styles.cardParagraph}>
                  <strong>Capital: </strong> {capital || 'Dont Capital Provide'}
                </p>
              </div>
            </section>
          </div>
        </Link>
      ))}

    </div>
  )
}

export default Cards
