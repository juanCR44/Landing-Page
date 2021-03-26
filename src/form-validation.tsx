import React, { ReactNode } from 'react'

import { Formik, Form, Field} from 'formik';
import {
    FormControl,
    FormErrorMessage,
    Input,
    Button
  } from "@chakra-ui/react"

interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
  field:ReactNode;
  form:ReactNode;
}

const FormValidate = () => {
    function validateDNI(value:string) {
      let error
      if (!value) {
        error = "Name is required"
      } else if (value.length != 8) {
        error = "Jeez! You're not a fan 😱"
      }
      return error
    }
  
    return (
      <Formik
        initialValues={{ name: "Sasuke" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
            <Field name="DNI" validate={validateDNI}>
              {({ field, form }) => (
                <FormControl display = "inline-flex" isInvalid={form.errors.name && form.touched.name}>
                    <Input {...field} id = "DNI" type="text" placeholder = "DNI" variant="outline" bg = "white" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    <Button marginLeft = "10px" bg = "cyan.200" isLoading={props.isSubmitting} type = "submit">
                        Continuar
                    </Button>
                </FormControl>
              )}
            </Field>
          </Form>
        )}
      </Formik>
    )
  }

export default FormValidate