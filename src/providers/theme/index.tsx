import React, { useState, useEffect, useCallback, createContext, useContext } from 'react'

const OB_CLASS = 'o-dark'

export type Theme = 'light' | 'dark'

export interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider: React.FC<{ children: React.ReactNode; theme?: Theme }> = ({ children, theme: defaultTheme }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    return defaultTheme || savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  const changeTheme = useCallback((theme: Theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add(OB_CLASS)
    } else {
      document.documentElement.classList.remove(OB_CLASS)
    }
    localStorage.setItem('theme', theme)
  }, [])

  useEffect(() => {
    changeTheme(theme)
  }, [changeTheme, theme])

  useEffect(() => {
    if(defaultTheme){
      changeTheme(defaultTheme)
    }
  }, [changeTheme, defaultTheme])

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
