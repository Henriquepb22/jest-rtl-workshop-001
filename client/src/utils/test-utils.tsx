import { ReactElement } from 'react'
import { render } from '@testing-library/react'

import {
  UserContextData,
  UserContextDefaultValues,
  UserContext
} from 'unit/hooks/use-user'

type CustomRenderProps = {
  userProviderProps?: UserContextData
}

const customRender = (
  ui: ReactElement,
  {
    userProviderProps = UserContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <UserContext.Provider value={userProviderProps}>{ui}</UserContext.Provider>,
    renderOptions
  )

export { customRender as render }
