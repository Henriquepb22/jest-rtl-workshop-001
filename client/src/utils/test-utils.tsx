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

/* 
  Para evitar duplicacão de código, podemos criar um utilitário de testes com uma renderização personalizada
  nesse caso para não ficar repetindo o <UserContext.Provider> onde ele for necessário, isso é bastante útil
  em aplicações reais onde utilizamos context em quase todos componentes
*/

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
