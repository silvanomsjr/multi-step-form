import { Container, ChoiceContent, ChoiceCard, ChoiceCardContent, Title, SubTitle, ChangeTypeOfPaymentContainer, CustomCheckBoxDiv, CustomCheckBoxBall } from './styles'
import arcadeIcon from '../../assets/images/icon-arcade.svg'
import advancedIcon from '../../assets/images/icon-advanced.svg'
import proIcon from '../../assets/images/icon-pro.svg'
import React, { SetStateAction } from 'react'


interface IPlanChoise {
  setPlan: React.Dispatch<SetStateAction<string>>
  setPaymentYearly: React.Dispatch<SetStateAction<boolean>>
  plan: string
  paymentYearly: boolean
}

function PlanChoice({ setPlan, setPaymentYearly, plan, paymentYearly }:IPlanChoise){

  function handleChoosen(e: React.ChangeEvent<HTMLInputElement>){
    setPlan(e.target.value)
  }

  function handleChangeTypeOfPayment(e: React.MouseEvent<HTMLElement>){
    setPaymentYearly(prevState => !prevState)
  }

  return (
    <Container>
      <ChoiceContent>
        <ChoiceCard>
          <input type="radio" id="arcade" name='plan' value="arcade" onChange={handleChoosen} checked={plan === 'arcade'}/>
          <ChoiceCardContent>
            <img src={arcadeIcon}></img>
            <div>
              <Title>Arcade</Title>
              <SubTitle>{!paymentYearly ? '$9/mo' : '$90/yr'}</SubTitle>
            </div>
          </ChoiceCardContent>
        </ChoiceCard>

        <ChoiceCard>
          <input type="radio" id="advanced" name='plan' value="advanced" onChange={handleChoosen} checked={plan == 'advanced'}/>
          <ChoiceCardContent>
            <img src={advancedIcon}></img>
            <div>
              <Title>Advanced</Title>
              <SubTitle>{!paymentYearly ? '$12/mo': '$120/yr'}</SubTitle>
            </div>
          </ChoiceCardContent>
        </ChoiceCard>


        <ChoiceCard>
          <input type="radio" id="pro" name='plan' value="pro" onChange={handleChoosen} checked={plan == 'pro'}/>
          <ChoiceCardContent>
            <img src={proIcon}></img>
            <div>
              <Title>Pro</Title>
              <SubTitle>{!paymentYearly ? '$15/mo' : '$150/yr'}</SubTitle>
            </div>
          </ChoiceCardContent>
        </ChoiceCard>
      </ChoiceContent>
      <ChangeTypeOfPaymentContainer yearly={paymentYearly}>
        <span>Monthly</span>
        <CustomCheckBoxDiv onClick={handleChangeTypeOfPayment}>
          <CustomCheckBoxBall yearly={paymentYearly}/>
        </CustomCheckBoxDiv>
        <span>Yearly</span>
      </ChangeTypeOfPaymentContainer>
    </Container>
  )

}


export default PlanChoice;
