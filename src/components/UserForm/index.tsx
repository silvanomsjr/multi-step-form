
import { FormContainer, FormGroup, FormInputName, FormInputItem } from './styles'

function UserForm() {

  return(
    <FormContainer>
      <FormGroup>
        <FormInputName>Name</FormInputName>
        <FormInputItem></FormInputItem>
      </FormGroup>

      <FormGroup>
        <FormInputName>Email Address</FormInputName>
        <FormInputItem></FormInputItem>
      </FormGroup>

      <FormGroup>
        <FormInputName>Phone Number</FormInputName>
        <FormInputItem></FormInputItem>
      </FormGroup>

    </FormContainer>
  )
}

export default UserForm;
