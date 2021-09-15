import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../components/ui/input/Input'
import { greaterThan, required } from '../../utils/validations'
import { FormWrapper } from './Form.styles'
import Button from '../../components/ui/button/Button'
import { userActions } from '../../store/user/user.slice'

function Form() {
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const { name, age } = useSelector((state) => state.user)
  const methods = useForm({
    defaultValues: {
      name,
      age
    }
  })

  const handleSubmit = (values) => {
    dispatch(
      userActions.setUser({
        name: values.name,
        age: values.age
      })
    )
    navigation('/game')
  }

  return (
    <FormWrapper>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
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
