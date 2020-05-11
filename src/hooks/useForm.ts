import * as React from "react";

type FormValues = {
   task: string
   comment: string
   priority: string,
   date: string,
   time: string
}
type EventElement = HTMLInputElement | HTMLTextAreaElement
type Params = {
   initialValues: FormValues
   persistFormData: (values) => void
}

const useForm = ({ initialValues, persistFormData }: Params) => {
   const [values, setValues] = React.useState<FormValues>(initialValues)

   const handleChange = (e: React.ChangeEvent<EventElement>) => {
      setValues({...values, [e.target.name]: e.target.value})
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      persistFormData(values)
   }

   return {
      values,
      handleChange,
      handleSubmit
   }
}

export default useForm;