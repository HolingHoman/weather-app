import { getTheme, setTheme } from '../../utils/theme'

export interface IState {
  darkMode: boolean
}

export const initialState: IState = {
  darkMode: getTheme(),
}

interface IToggleAction {
  type: 'TOGGLE'
}

export type Actions = IToggleAction

export const reducer = (state: IState, action: Actions): IState => {
  switch (action.type) {
    case 'TOGGLE':
      setTheme(!state.darkMode)
      return {
        darkMode: !state.darkMode,
      }
    default:
      return state
  }
}
