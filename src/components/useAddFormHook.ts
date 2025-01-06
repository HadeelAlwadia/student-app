import { useState } from "react"

interface Iform {
    values: any,
    onSubmit: (values:any) => void

}


const validate = (values: any) => {
    let errors: any ={}
      if (values.name === '') {
        errors.name = 'name is reqiure'
    } else if (values.name.length <= 3) {
        errors.name = 'name must be more 3 char'
    }
    if (values.password === '') {
        errors.password='password is require'
    } else if (values.password.length <= 3) {
        errors.password = 'password must be more 3 char'
    }
    return errors
}


const useForm = ({ values, onSubmit }: Iform) => {

    const [valuesForm, setValuesForm] = useState(values);
    const [errors, setError] = useState({})
    //to handle Values Form
    const handleChangeValue = (name: string, newValue: string) => {
        setValuesForm({ ...valuesForm, [name]: newValue})

    }

    //to handleSubmit form
    const handleSubmit = (e: any) => {
        e.preventDefault()

             
        if (!Object.keys(validate(valuesForm)).length) {
            onSubmit(valuesForm)

        } else {
            setError(validate(valuesForm))

       }
    }

    return { valuesForm, handleChangeValue, handleSubmit, errors }
}

export default useForm;