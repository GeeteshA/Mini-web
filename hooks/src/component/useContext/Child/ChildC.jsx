import React, { useContext } from "react";
import { ThemeContext } from "../UseContext";

const ChildC = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const handleTheme = () => {
      if (theme === 'light'){
        setTheme('dark')
      }
      else{
        setTheme('light')
      }
    }
    return (
      <button onClick={handleTheme}>Change Theme</button>
    )
}
export default ChildC; 