import React, { createContext, useState } from 'react'
import ChildA from './Child/ChildA'

export const ThemeContext = createContext()  //Create context
const UseContext = () => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`container ${theme === 'dark' ? 'dark' : 'light'}`}>
        <h1>Current Theme: {theme}</h1>
        <ChildA />
      </div>
    </ThemeContext.Provider>
  )
}

export default UseContext
