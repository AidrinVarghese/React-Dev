import React, { createContext,useState } from 'react'
// import { ThemeProvider } from 'react-bootstrap'
import { ThemeContextType } from './types'



interface childrenType{
  children:React.ReactNode
}

export const Theme = createContext<ThemeContextType>({
  theme:true,
  changeTheme:() =>{}        
})

const ThemeContext = ({children}:{children:React.ReactNode}):React.JSX.Element => {
  const [theme,setTheme] = useState<boolean>(true)
  const changeTheme = () => {
    setTheme((prev) => !prev)
  }
    
  return (
    <Theme.Provider value={{theme,changeTheme}}>
        {children}
    </Theme.Provider>
  )
}

export default ThemeContext