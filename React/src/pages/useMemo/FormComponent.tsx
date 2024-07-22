import React, { memo } from 'react'

interface IProps {
  onSubmitForm():void ; 
  total:number ; 
}

const FormComponent = ({onSubmitForm,total}:IProps) => {
  console.log("Form Component") ; 
  return (
    <div>
      <div>Form</div>
      <p>Total : {total}</p>
      <input type="text" id='name' />
      <label htmlFor="name">Name</label>
      <button onClick={onSubmitForm}>Submit</button>
    </div>
  )
}

export default memo(FormComponent) ; 
