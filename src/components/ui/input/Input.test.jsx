import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useForm, FormProvider } from 'react-hook-form'
import Input from './Input'

describe('Input', () => {
  const inputName = 'input'
  const Wrapper = ({ children }) => {
    const methods = useForm({
      defaultValues: {
        inputName: ''
      },
      mode: 'onBlur'
    })

    return <FormProvider {...methods}>{children}</FormProvider>
  }

  it('Should render', () => {
    render(
      <Wrapper>
        <Input name={inputName} label="Label" />
      </Wrapper>
    )

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('Should display error', async () => {
    const errorText = 'Error'
    render(
      <Wrapper>
        <Input name={inputName} validation={{ alwaysError: (value) => errorText }} />
      </Wrapper>
    )
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    fireEvent.input(input, { target: { value: '123' } })

    expect(input).toHaveValue('123')
    fireEvent.blur(input)

    expect(await screen.findByTestId('input-error')).toHaveTextContent(errorText)
  })
})
