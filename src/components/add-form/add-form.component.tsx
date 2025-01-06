import useForm from "../useAddFormHook"



const AddForm = () => {
 const {handleSubmit,handleChangeValue,valuesForm,errors}=useForm(
    {
        values:{name:'',password:''},
        onSubmit:(values:any)=>{
            console.log('done',values)
        }

    }
 )


  return (
    <form onSubmit={handleSubmit}>
       <input  value= {valuesForm.name} onChange={(e)=>handleChangeValue('name',e.target.value)} />
       {errors.name&&<p>{errors.name}</p>}
       <input value={valuesForm.password} onChange={(e)=>handleChangeValue('password',e.target.value)} />
       {errors.password&&<p>{errors.password}</p>}

       <button>
        login
       </button>
    </form>
    
  )
}

export default AddForm

