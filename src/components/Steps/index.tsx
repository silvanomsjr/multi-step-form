import { Container, NumbersContainer, Numbers, InfoNumbers, Title, Description } from './styles'

interface StepsPropsI{
  step: number
}

function Steps({ step }: StepsPropsI) {

  return(
    <Container active={step}>
      <NumbersContainer>
        <Numbers>
          1
        </Numbers>
        <InfoNumbers>
            <Title>Step 1</Title>
            <Description>Your info</Description>
          </InfoNumbers>
      </NumbersContainer>

      <NumbersContainer>
        <Numbers>
          2
        </Numbers>
        <InfoNumbers>
            <Title>Step 2</Title>
            <Description>Select Plan</Description>
        </InfoNumbers>
      </NumbersContainer>

      <NumbersContainer>
        <Numbers>
          3
        </Numbers>
        <InfoNumbers>
            <Title>Step 3</Title>
            <Description>Add-ons</Description>
          </InfoNumbers>
      </NumbersContainer>

      <NumbersContainer>
        <Numbers>
          4
        </Numbers>
        <InfoNumbers>
            <Title>Step 4</Title>
            <Description>Summary</Description>
          </InfoNumbers>
      </NumbersContainer>

    </Container>
  )
}

export default Steps;
