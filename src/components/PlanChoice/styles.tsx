import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


`

export const ChoiceContent = styled.div`
  /* background: ${({ active }) => active ? "hsl(213, 96%, 18%)" : "#FFFFFF"}; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .8rem;

  & > img{
    max-width: 100%;
  }

`

export const ChoiceCard = styled.label`
  width: 100%;
  position: relative;

  & > input:checked + div {
    border: 1px solid hsl(213, 96%, 18%);
    background: hsl(217, 100%, 97%);
  }

  & > input{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
  }

`

export const ChoiceCardContent = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: .9rem;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid hsl(229, 24%, 87%);
  transition: all .2s ease-in;
`

export const Title = styled.h3`
  color: hsl(213, 96%, 18%);
  margin-bottom: .3rem;
`

export const SubTitle = styled.span`
  color: hsl(231, 11%, 63%);
`


export const ChangeTypeOfPaymentContainer = styled.div`
  width: 100%;
  background: hsl(217, 100%, 97%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  border-radius: 8px;
  padding: 1rem 0;
  margin-top: 1.4rem;

  & > span{
    transition: all .5s ease;
  }

  & > span:nth-child(1) {
    color: ${({ yearly }) => yearly ? 'hsl(231, 11%, 63%)' : 'hsl(213, 96%, 18%)'};
  }

  & > span:nth-child(3) {
    color: ${({ yearly }) => yearly ? 'hsl(213, 96%, 18%)' : 'hsl(231, 11%, 63%)'};
  }

`

export const CustomCheckBoxDiv = styled.div`
  cursor: pointer;
  position: relative;
  width: 45px;
  height: 20px;
  border-radius: 20px;
  padding: .15rem;
  background: hsl(213, 96%, 18%);
`

export const CustomCheckBoxBall = styled.div`
  transition: all .5s;
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  left: 3px;
  transform: ${({yearly}) => yearly ? 'translateX(24px)' : 'translateX(0)'};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #FFF;
`
