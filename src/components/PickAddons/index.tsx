import { useState } from 'react';
import CustomCheckBox from '../CustomCheckBox';
import { Container, Cards, TextCardsContent, CardsTitle, CardsSubTitle } from './styles'

interface IPickAddonsProps {
  yearly: boolean
  onlineServices: boolean
  largerStorage: boolean
  customizableProfile: boolean
  handleOnlineServices: () => {}
  handleLargerStorage: () => {}
  handleCustomizableProfile: () => {}
}

function PickAddons({
  yearly, onlineServices, largerStorage, customizableProfile,
  handleLargerStorage, handleOnlineServices, handleCustomizableProfile
}: IPickAddonsProps){


  return(
    <Container>
      <Cards htmlFor='onlineServices' isActive={onlineServices}>
        <CustomCheckBox handleCheckbox={handleOnlineServices} idName='onlineServices' isChecked={onlineServices}/>
        <TextCardsContent>
          <CardsTitle>Online Service</CardsTitle>
          <CardsSubTitle>Access to multiplayer games</CardsSubTitle>
        </TextCardsContent>
        <span>
          {yearly
          ? '+$10/yr'
          : '+$1/mo'
          }
        </span>
      </Cards>

      <Cards htmlFor='largerStorage' isActive={largerStorage}>
        <CustomCheckBox handleCheckbox={handleLargerStorage} idName='largerStorage' isChecked={largerStorage}/>
        <TextCardsContent>
          <CardsTitle>Larger Storage</CardsTitle>
          <CardsSubTitle>Extra 1TB of cloud save</CardsSubTitle>
        </TextCardsContent>
        <span>
        {yearly
          ? '+$20/yr'
          : '+$2/mo'
        }
        </span>
      </Cards>

      <Cards htmlFor='customizableProfile' isActive={customizableProfile}>
        <CustomCheckBox handleCheckbox={handleCustomizableProfile} idName='customizableProfile' isChecked={customizableProfile}/>
          <TextCardsContent>
            <CardsTitle>Customizable Profile</CardsTitle>
            <CardsSubTitle>Custom theme on your profile</CardsSubTitle>
          </TextCardsContent>
          <span>
          {yearly
            ? '+$20/yr'
            : '+$2/mo'
          }
          </span>
      </Cards>
    </Container>
  )
}

export default PickAddons;
