import { ScreenContainer, Container, InfoContent, Title, SubTitle, ButtonContainer, CustomButton, Total } from './styles'
import useStepContext from '../../hooks/useStepContext';

import UserForm from '../UserForm';
import PlanChoice from '../PlanChoice';
import PickAddons from '../PickAddons';
import ShowResume from '../ShowResume';
import { useState } from 'react';

function MainContent() {

  const {step, setStep} = useStepContext();
  const [choosenPlan, setChoosenPlan] = useState('arcade');
  const [paymentYearly, setPaymentYearly] = useState(false);
  const [onlineServices, setOnlineServices] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);

  function handleOnlineServices() {
    setOnlineServices((prevState) => !prevState)
  }

  function handleLargerStorage() {
    setLargerStorage((prevState) => !prevState)
  }

  function handleCustomizableProfile() {
    setCustomizableProfile((prevState) => !prevState)
  }

  function handleButtonClick(){
    setStep(step+1)
  }

  return(
    <ScreenContainer>
      <Container>
        {step == 1 &&
          <InfoContent>
            <Title>Personal Info</Title>
            <SubTitle>Please provide your name, email address and phone number.</SubTitle>
            <UserForm/>
            <ButtonContainer>
              <CustomButton onClick={handleButtonClick} customBtn>
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
              <CustomButton onClick={handleButtonClick} customBtn>
                Next Step
              </CustomButton>
            </ButtonContainer>
          </InfoContent>
        }
        {step == 4 &&
          <InfoContent>
            <Title>Finishing Up</Title>
            <SubTitle>Double-check everything looks OK before confirming.</SubTitle>
            <ShowResume plan={choosenPlan} addons={{onlineServices, customizableProfile, largerStorage}} total={20} yearly={paymentYearly}/>
            <Total>
              <SubTitle>
                Total (per year)
              </SubTitle>
              <span>$120/yr</span>
            </Total>
            <ButtonContainer both>
                <CustomButton onClick={() => setStep(step-1)}>
                  Go Back
                </CustomButton>
              <CustomButton onClick={handleButtonClick} customBtn>
                Confirm
              </CustomButton>
            </ButtonContainer>
          </InfoContent>
        }
      </Container>
    </ScreenContainer>
  )
}

export default MainContent;
