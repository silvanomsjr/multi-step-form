
import { ChangeEvent, ChangeEventHandler, ReactEventHandler, SetStateAction, useState } from 'react';
import { FormContainer, FormGroup, FormInputName, FormInputItem, ErrorMessage } from './styles'

import isEmailValid from '../../utils/isEmailValid';

type UserFormProps = {
  name: string,
  emailAddress: string,
  number: string,
  errors: ErrorsObj[],
  setName: React.Dispatch<SetStateAction<string>>, 
  setEmailAddress: React.Dispatch<SetStateAction<string>>, 
  setNumber: React.Dispatch<SetStateAction<string>>, 
  addErrorInForm: (val: ErrorsObj) => void,
  removeErrorInForm: (val: string) => void
}

export type ErrorsObj = {
  field: string,
  msg: string,
}


function UserForm({name,
  emailAddress,
  number,
  errors,
  setName,
  setEmailAddress,
  setNumber,
  addErrorInForm,
  removeErrorInForm
}: UserFormProps) {

  function checkIfErrorAlreadyExists(field:string){
    const errorIsAlredyInErrors = errors.find((element:ErrorsObj) => element.field == field);
    if(errorIsAlredyInErrors) return true
  }

  function handleName(event: React.ChangeEvent<HTMLInputElement>){
    const nameValue = event.target.value
    setName(nameValue)
    if(!nameValue){
      addErrorInForm({field: 'name', msg: 'Name is mandatory!'})
    }else{
      removeErrorInForm('name')
    }
  }


  function handleEmail(event: React.ChangeEvent<HTMLInputElement>){
    const email = event.target.value
    setEmailAddress(email)

    if(email && !isEmailValid(email)){
      if(checkIfErrorAlreadyExists('email') && getErrorMsg('email') === "Email is mandatory!" ) {
        removeErrorInForm('email')
      }

      if(checkIfErrorAlreadyExists('email') && getErrorMsg('email') === "This email isn't valid!") return
      addErrorInForm({field: 'email', msg: "This email isn't valid!"})
    }else if(!email){

      removeErrorInForm('email')

      addErrorInForm({field: 'email', msg: "Email is mandatory!"})

    }else{
      removeErrorInForm('email')
      console.log('PQ N TIROU?')
    }

  }

  
  function handleNumber(event: React.ChangeEvent<HTMLInputElement>){
    const numberValue = event.target.value
    setNumber(numberValue)

  }

  function getErrorMsg(name :string){
    return errors.find((element :ErrorsObj) => element.field === name)?.msg
  }

  return(
    <FormContainer>
      <FormGroup>
        <FormInputName>Name</FormInputName>
        <FormInputItem onChange={handleName} placeholder="e.g. Stephen King" value={name}></FormInputItem>
        {errors.find((element :ErrorsObj) => element.field === 'name') &&
          <ErrorMessage>{getErrorMsg('name')}</ErrorMessage>
        }
      </FormGroup>

      <FormGroup>
        <FormInputName>Email Address</FormInputName>
        <FormInputItem onChange={handleEmail} placeholder="e.g. stephenking@lorem.com" value={emailAddress}></FormInputItem>
        {errors.find((element :ErrorsObj) => element.field === 'email') &&
          <ErrorMessage>{getErrorMsg('email')}</ErrorMessage>
        }
      </FormGroup>

      <FormGroup>
        <FormInputName>Phone Number</FormInputName>
        <FormInputItem onChange={handleNumber} placeholder="e.g. +1 234 567 890" value={number}></FormInputItem>
      </FormGroup>

    </FormContainer>
  )
}

export default UserForm;
