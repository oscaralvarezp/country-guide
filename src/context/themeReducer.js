const themeReducer = (state, action) => {
  let theme
  switch (action.type) {
    case 'LIGHT_MODE':
      theme = { darkmode: false }
      // eslint-disable-next-line no-undef
      localStorage.setItem('dark-mode', JSON.stringify(theme))
      return theme
    case 'DARK_MODE':
      theme = { darkmode: true }
      // eslint-disable-next-line no-undef
      localStorage.setItem('dark-mode', JSON.stringify(theme))
      return theme
    default:
      return state
  }
}

export default themeReducer
