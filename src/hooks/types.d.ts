declare type FormValues = {
   task: string
   comment: string
   priority: Priority,
   date: string,
   time: string
}

declare type EventElement = HTMLInputElement | HTMLTextAreaElement

declare type Params = {
   initialValues: FormValues
   persistFormData: (values: FormValues) => void
}