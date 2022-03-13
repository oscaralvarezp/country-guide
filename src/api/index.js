import axios from 'axios'

const ApiUrl = 'https://restcountries.com/v3.1'

export const fetchCountries = async (region) => {
  let changeableUrl = `${ApiUrl}/all`
  if (region) {
    changeableUrl = `${ApiUrl}/region/${region}`
  }
  if (region === 'all') {
    changeableUrl = `${ApiUrl}/all`
  }

  try {
    const { data } = await axios.get(changeableUrl)

    // Ordeno la data en orden alfabetico de A -> Z
    data.sort((a, b) => {
      if (a.name.common > b.name.common) return 1
      else if (a.name.common < b.name.common) return -1
      else return 0
    })

    // Filtro los paises, quiero los que no tengan region antarctic
    const filterData = data.filter(country => country.region !== 'Antarctic')

    // Escojo propiedades que quiero mostrar y la retorno en un array de objetos
    const modifiedData = filterData.map((country) => ({
      image: country.flags.svg,
      countryName: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital
    }))
    return modifiedData
  } catch (error) {
    console.error(error)
  }
}

export const fetchCountryByName = async (name) => {
  try {
    const { data } = await axios.get(`${ApiUrl}/name/${name}`)
    return {
      image: data[0].flags.svg,
      countryName: data[0].name.common,
      oficialName: data[0].name.official,
      population: data[0].population,
      region: data[0].region,
      subregion: data[0].subregion,
      capital: data[0].capital,
      topLevelDomain: data[0].tld,
      currencies: Object.values(data[0].currencies)[0],
      languages: Object.values(data[0].languages).join(', ')
    }
  } catch (error) {
    console.error(error)
  }
}
