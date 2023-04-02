import { ScreenContainer, Container, InfoContent, Title, SubTitle, ButtonContainer, CustomButton, Total } from './styles'
import useStepContext from '../../hooks/useStepContext';
import { useState } from 'react';

import thankyouIcon from '../../assets/images/icon-thank-you.svg'

import planPrices from '../../mocks/planPrices';
import addonsPrice from '../../mocks/addonsPrice';
import { plansType, addonsType } from '../../mocks/addonsAndPlansType';


import UserForm from '../UserForm';
import PlanChoice from '../PlanChoice';
import PickAddons from '../PickAddons';
import ShowResume from '../ShowResume';

import { ErrorsObj } from '../UserForm';

function MainContent() {

  const {step, setStep} = useStepContext();
  
  //First Step
  const [name, setName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [number, setNumber] = useState('')
  const [errors, setErrors] = useState<ErrorsObj[]>([])

  //Second Step
  const [choosenPlan, setChoosenPlan] = useState('arcade');
  const [paymentYearly, setPaymentYearly] = useState(false);

  //Third Step
  const [onlineServices, setOnlineServices] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);
  const [finished, setFinished] = useState(false);
  const [total, setTotal] = useState(0);

  function handleOnlineServices() {
    setOnlineServices((prevState) => !prevState)
  }

  function handleLargerStorage() {
    setLargerStorage((prevState) => !prevState)
  }

  function handleCustomizableProfile() {
    setCustomizableProfile((prevState) => !prevState)
  }

  function addErrorInForm({ field, msg}: ErrorsObj){
    setErrors((prevState) => [
      ...prevState,
      { field, msg }
    ])
  }

  function removeErrorInForm(field :string){
    setErrors((prevState) => prevState.filter((element: ErrorsObj) => element.field !== field))
  }


  function validateFormFields(){
    if(name && emailAddress) return true

    !name ? addErrorInForm({field: 'name', msg: 'Name is mandatory!'}) : null
    !emailAddress ? addErrorInForm({field: 'email', msg: 'Email is mandatory!'}) : null
  }

  function handleButtonForm(){
    if(errors.length > 0) return
    if(validateFormFields()) setStep(step+1)
  }

  function handleButtonClick(){
    setStep(step+1)
  }

  function handleButtonClickLastStep(){
    let result = planPrices[choosenPlan as keyof plansType]

    const ourObject = {
      onlineServices,
      largerStorage,
      customizableProfile
    }

    Object.keys(ourObject).map((x) => {
      if(ourObject[x as keyof addonsType]){
        result += addonsPrice[x as keyof addonsType]
      }
    })


    setStep(step+1)
    setTotal(paymentYearly ? result*10 : result)
  }

  function handleButtonConfirmThing(){
    setFinished(true)
  }

  const UserFormProps = {
    name,
    emailAddress,
    number,
    errors,
    setName,
    setEmailAddress,
    setNumber,
    addErrorInForm,
    removeErrorInForm
  }

  return(
    <ScreenContainer>
      <Container final={finished}>
        {step == 1 &&
          <InfoContent>
            <Title>Personal Info</Title>
            <SubTitle>Please provide your name, email address and phone number.</SubTitle>
            <UserForm {...UserFormProps}/>
            <ButtonContainer>
              <CustomButton onClick={handleButtonForm} customBtn>
                Next Step
              </CustomButton>
            </ButtonContainer>
          </InfoContent>
        }
        {step == 2 &&
          <InfoContent>
            <Title>Select your plan</Title>
            <SubTitle>You have the option of monthly or yearly billing.</SubTitle>
            <PlanChoice setPlan={setChoosenPlan} plan={choosenPlan} setPaymentYearly={setPaymentYearly} paymentYearly={paymentYearly}/>
            <ButtonContainer both>
              <CustomButton onClick={() => setStep(step-1)}>
                  Go Back
                </CustomButton>
              <CustomButton onClick={handleButtonClick} customBtn>
                Next Step
              </CustomButton>
            </ButtonContainer>
          </InfoContent>
        }
        {step == 3 &&
          <InfoContent>
            <Title>Pick add-ons</Title>
            <SubTitle>Add-ons help enhance your gaming experience.</SubTitle>
            <PickAddons yearly={paymentYearly}
            onlineServices={onlineServices} largerStorage={largerStorage} customizableProfile={customizableProfile}
             handleLargerStorage={handleLargerStorage} handleOnlineServices={handleOnlineServices}
             handleCustomizableProfile={handleCustomizableProfile}/>
            <ButtonContainer both>
                <CustomButton onClick={() => setStep(step-1)}>
                  Go Back
                </CustomButton>
              <CustomButton onClick={handleButtonClickLastStep} customBtn>
                Next Step
              </CustomButton>
            </ButtonContainer>
          </InfoContent>
        }
        {(step == 4 && !finished) &&
          <InfoContent>
            <Title>Finishing Up</Title>
            <SubTitle>Double-check everything looks OK before confirming.</SubTitle>
            <ShowResume plan={choosenPlan} addons={{onlineServices, customizableProfile, largerStorage}} total={20} yearly={paymentYearly}/>
            <Total>
              <SubTitle>
                Total ({paymentYearly ? 'per year' : 'per month'})
              </SubTitle>
              <span>${total}/{paymentYearly ? 'yr' : 'mo'}</span>
            </Total>
            <ButtonContainer both>
                <CustomButton onClick={() => setStep(step-1)}>
                  Go Back
                </CustomButton>
              <CustomButton onClick={handleButtonConfirmThing} customBtn>
                Confirm
              </CustomButton>
            </ButtonContainer>
          </InfoContent>
        }
        {finished &&
          <InfoContent final>
            <img src={thankyouIcon} />
            <Title>Thank you!</Title>
            <SubTitle final>
              Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need suport,
              please feel free to email us at
              support@loremgaming.com.
            </SubTitle>
          </InfoContent>
        }
      </Container>
    </ScreenContainer>
  )
}

export default MainContent;
