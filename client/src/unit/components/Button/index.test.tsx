import { render, screen } from '@testing-library/react'
import Button from '.'

describe('<Button />', () => {
  /*
    O Primeiro teste é recomendado ser sempre a variação 'padrão' do seu módulo,
    sendo passado o minimo de props necessária para sua renderização

    PS:. Ao finalizar a criação do módulo é uma boa prática adicionar um snapshot,
         assim qualquer alteração feita posteriormente irá quebrar o snapshot pra ver
         se realmente a alteração é necessária
         https://jestjs.io/docs/snapshot-testing#:~:text=Snapshot%20tests%20are%20a%20very,file%20stored%20alongside%20the%20test.
  */
  it('should render the default button', () => {
    render(<Button>button</Button>)

    const button = screen.getByRole('button', { name: /button/i })

    expect(button).toHaveClass('bg-pink-600 text-white px-4 py-2 text-base')
    expect(button).toBeInTheDocument()
  })

  /*
    Os próximos testes a gente vai testando todas as variações e interações do módulo,
    separando cada um em um it próprio
  */
  it('should render the small button variant', () => {
    render(<Button size="sm">button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveClass(
      'px-2 py-1 text-sm'
    )
  })

  it('should render the big button variant', () => {
    render(<Button size="lg">button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveClass(
      'px-6 py-3 text-lg'
    )
  })

  it('should render the secondary button variant', () => {
    render(<Button color="secondary">button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveClass(
      'bg-gray-300 text-black'
    )
  })

  it('should render a disabled button', () => {
    render(<Button disabled>button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toBeDisabled()
  })
})
