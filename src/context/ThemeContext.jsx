import { createContext, useReducer } from 'react'
import themeReducer from './themeReducer'

// eslint-disable-next-line no-undef
const { darkmode } = JSON.parse(localStorage.getItem('dark-mode')) || { darkmode: false }

// Crear El Context
const initialState = { darkmode }
export const themeContext = createContext(initialState)

// Crear el Provider con un Functional Component
export const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, initialState)
  return (
    <themeContext.Provider value={{ theme, dispatch }}>
      {children}
    </themeContext.Provider>
  )
}

// Envolver dentro del ThemeProvider a los componentes que quiero tengan acceso al contexto
