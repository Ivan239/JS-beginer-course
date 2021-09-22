import React from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'

describe('button', () => {
  it('should render', () => {
    render(<Button />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should display child text', () => {
    const text = 'Random Text'
    render(<Button>{text}</Button>)

    expect(screen.getByRole('button')).toHaveTextContent(text)
  })

  it('should call onClick', () => {
    const fn = jest.fn()

    render(<Button onClick={fn} />)
    fireEvent.click(screen.getByRole('button'), {})

    expect(fn).toHaveBeenCalled()
  })
})
