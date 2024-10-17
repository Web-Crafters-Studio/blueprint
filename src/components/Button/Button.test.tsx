import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button.js'

describe('Button Component', () => {
  test('affiche le label correctement', () => {
    render(<Button label="Cliquez ici" />)
    expect(screen.getByText('Cliquez ici')).toBeInTheDocument()
  })

  test('appelle onClick lors du clic', () => {
    const handleClick = jest.fn()
    render(<Button label="Cliquez ici" onClick={handleClick} />)
    fireEvent.click(screen.getByText('Cliquez ici'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('est désactivé lorsque disabled est true', () => {
    render(<Button label="Cliquez ici" disabled />)
    expect(screen.getByText('Cliquez ici')).toBeDisabled()
  })
})