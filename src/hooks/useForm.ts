import * as React from "react";

const useForm = ({ initialValues, persistFormData, toggleModal }: Params) => {
   const [values, setValues] = React.useState<FormValues>(initialValues)

   const handleChange = (e: React.ChangeEvent<EventElement>) => {
      setValues({...values, [e.target.name]: e.target.value})
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      persistFormData(values)
      toggleModal()
   }

   return {
      values,
      handleChange,
      handleSubmit
   }
}

export default useForm;