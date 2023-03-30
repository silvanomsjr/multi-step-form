import { Container, Input } from './styles'
import checkBoxImg from '../../assets/images/icon-checkmark.svg'

interface ICustomCheckBoxProps{
  handleCheckbox: () => {}
  idName: string
  isChecked: boolean
}

function CustomCheckBox({ handleCheckbox, idName, isChecked }: ICustomCheckBoxProps){
  return(
    <Container img={checkBoxImg}>
      <Input type='checkbox' id={idName} onChange={handleCheckbox} checked={isChecked}/>
      <label htmlFor={idName}></label>
    </Container>
  )
}

export default CustomCheckBox;
