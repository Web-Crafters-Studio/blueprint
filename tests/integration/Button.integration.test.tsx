import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '../../src/components/Button/Button'

describe("Test d'intégration du Button", () => {
  test("le composant Button s'intègre correctement dans un formulaire", () => {
    render(
      <form>
        <Button label="Soumettre" />
      </form>
    )
    expect(screen.getByText('Soumettre')).toBeInTheDocument()
  })
})
