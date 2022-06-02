import { screen } from '@testing-library/react'

describe('<AppRoutes />', () => {
  /*
    Não faz sentido testar uma biblioteca externa, a gente infere que ela
    já está testada, mas a gente precisa garantir que nossa funcionalidade está 
    correta, nesse caso se ao acessar uma rota o modúlo correto é exibido.
    

    Dica: É um ótimo caso de uso para o jest.mock em nossos módulos internos para não
    ser preciso carregar TODA a página nesse teste
  */
  it.todo('should render sign in page if url is /')
  it.todo('should render sign up page if url is /signup')
  it.todo('should render profile page if url is /profile')
  it.todo('should redirect to / if url has no matchs')
})
