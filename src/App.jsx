import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import { AppBar } from './components'
import Home from './pages/Home/Home'
import CountryDetail from './pages/CountryDetail/CountryDetail'

import { themeContext } from './context/ThemeContext'

function App () {
  // Context API
  const { dispatch, theme: { darkmode } } = useContext(themeContext)

  const handleTheme = () => {
    if (darkmode) {
      dispatch({ type: 'LIGHT_MODE' })
    } else {
      dispatch({ type: 'DARK_MODE' })
    }
  }
  return (
    <div className={darkmode ? 'dark-theme' : 'light-theme'}>
      <AppBar title='Countries Info' handleTheme={handleTheme} darkmode={darkmode} />
      <main className='main-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:name' element={<CountryDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
