import { useState, useEffect } from 'react'
import { fetchCountries } from '../../api'

import { Cards, FilterCountries, Loader } from '../../components'

const Home = () => {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchApi = async () => {
      setCountries(await fetchCountries())
      setIsLoading(false)
    }
    fetchApi()
  }, [])

  const handleInputChange = (value) => {
    const lowerCase = value.toLowerCase().trim()
    setSearchTerm(lowerCase)
  }

  const handleSelectChange = async (value) => {
    const lowercase = value.toLowerCase()
    setCountries(await fetchCountries(lowercase))
    setIsLoading(false)
  }

  const filterCountries = countries.filter(country => {
    if (searchTerm === '') {
      return country
    } else {
      return country.countryName.toLowerCase().includes(searchTerm)
    }
  })
  return (
    <>
      <FilterCountries handleInputChange={handleInputChange} handleSelectChange={handleSelectChange} />
      {isLoading ? (<Loader classname='spinner' />) : <Cards data={filterCountries} />}
    </>
  )
}

export default Home
