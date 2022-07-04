export const getTheme = () => {
  return false

  if (localStorage.getItem('theme')) {
    return !!localStorage.getItem('theme')
  }

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')
  return !userMedia.matches
}

export const setTheme = (darkMode: boolean) => {
  localStorage.setItem('theme', `${darkMode}`)
  document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
}
