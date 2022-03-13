import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { formatNumber, quitDashes } from '../../utils'
import { fetchCountryByName } from '../../api'

import styles from './CountryDetail.module.css'
import { Loader } from '../../components'

const CountryDetail = () => {
  const [country, setCountry] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { name } = useParams()
  const slugFormated = quitDashes(name)

  useEffect(() => {
    const fetchApi = async () => {
      setCountry(await fetchCountryByName(slugFormated))
      setIsLoading(false)
    }
    fetchApi()
  }, [])

  return (
    <>
      {!isLoading && country.length !== 0
        ? (
          <div className={styles.countryWrapper}>
            <div className={styles.buttonContainer}>
              <Link className={styles.button} to='/'>
                <i className='fa-solid fa-arrow-left-long' /> Back
              </Link>
            </div>
            <div className={styles.countryContainer}>
              <section className={styles.imageContainer}>
                <img src={country?.image} alt={country?.countryName} />
              </section>
              <section className={styles.countryDescription}>
                <h1>{country?.countryName}</h1>
                <section className={styles.countryInfo}>
                  <div>
                    <p>
                      <strong>Oficial Name: </strong> {country?.oficialName}
                    </p>
                    <p>
                      <strong>Population: </strong> {formatNumber(country?.population)}
                    </p>
                    <p>
                      <strong>Region: </strong> {country?.region}
                    </p>
                    <p>
                      <strong>Subregion: </strong> {country?.subregion}
                    </p>
                    <p>
                      <strong>Capital: </strong> {country?.capital}
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Top Level Domain: </strong> {country?.topLevelDomain}
                    </p>
                    <p>
                      <strong>Currencies: </strong> {country?.currencies?.name}
                    </p>
                    <p>
                      <strong>Languages: </strong> {country?.languages}
                    </p>
                  </div>
                </section>
              </section>
            </div>
          </div>
          )
        : (<Loader classname='spinner' />)}

    </>
  )
}

export default CountryDetail
