import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/ui/input/Input'
import { greaterThan, required } from '../../utils/validations'
import { FormWrapper } from './Form.styles'
import Button from '../../components/ui/button/Button'

function Form({ onSubmit }) {
  const methods = useForm()
  const navigation = useNavigate()

  return (
    <FormWrapper>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((values) => {
            if (onSubmit) {
              onSubmit(values)
              navigation('/game')
            }
          })}
        >
          <Input
            type="text"
            name="name"
            label="Name"
            validation={{
              required: required('Name is required')
            }}
          />
          <Input
            name="age"
            label="Age"
            type="number"
            validation={{
              required: required('Age is required'),
              greater18: greaterThan(18, 'You must be greater than 18 yaers old')
            }}
          />
          <Button type="submit">Start game</Button>
        </form>
      </FormProvider>
    </FormWrapper>
  )
}

export default Form
