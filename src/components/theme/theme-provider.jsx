import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({ theme: 'dark', setTheme: () => {} })

export function ThemeProvider({ children, defaultTheme = 'dark' }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || defaultTheme)

  useEffect(() => {
    const root = document.documentElement
    const dark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    root.classList.toggle('dark', dark)
    localStorage.setItem('theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}


