import { Actions, initialState, IState, reducer } from './themeReducer'
import React, { Dispatch, FC } from 'react'
import { setTheme } from '../../utils/theme'

interface IContentProps {
  state: IState
  dispatch: Dispatch<Actions>
}

interface IProps {
  children: React.ReactNode
}

export const ThemeContext = React.createContext({} as IContentProps)

const ThemeProvider: FC<IProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    setTheme(state.darkMode)
  }, [state.darkMode])

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
