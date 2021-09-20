import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'

/**
 * Encapsulates logic of context from react-hook-form
 * @param onSubmit
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
function Form({ onSubmit, children, defaultValues }) {
  const methods = useForm({ defaultValues })

  // TODO wrap form with FormProvider context to make child inputs work
  return <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
}

export default Form
