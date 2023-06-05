import styled, {css} from 'styled-components';

export const ScreenContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 6.2rem;
  @media(min-width:768px){
    padding-top: 0;
    padding-left: 3rem;
    padding-right: 3rem;
    justify-content: center;
  }
`


export const Container = styled.div`
  z-index: 99999;
  width: 90%;
  background: #ffff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: ${({ final }) => final ? '5rem 1.4rem' : '2rem 1.5rem'};
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  @media(min-width: 768px){
    width: 100%;
    height: 100%;
    box-shadow: none;
  }
`

export const InfoContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: ${({ final }) => final ? 'center' : 'flex-start' };
  flex-direction: column;
  gap: 1.2rem;

  ${({ final }) => final && (css`
    & > h1{
      font-size: 1.6rem 
    }
  `)}

  @media(min-width:768px){
    position: relative;
    height: 100%;
    justify-content: flex-start;
  }

`


export const Title = styled.h1`
  color: hsl(213, 96%, 18%);
  line-height: 0.8;
`

export const SubTitle = styled.p`
  color: hsl(231, 11%, 63%);
  ${({ final }) => final ? 'text-align: center; width: 100%' : ''}
`
export const ButtonContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fff;
  padding: 1.5rem;
  display: flex;
  justify-content: ${({ both }) => both ? 'space-between' : 'flex-end'};

  @media(min-width: 768px){
    padding: 0;
  }

`

const normalBtn = css`
  background: transparent;
  color: hsl(231, 11%, 63%);
`

const customBtn = css`
  background: hsl(213, 96%, 18%);
  color: #fff;
`

const calculateBtn = (btn: boolean) => {
  if(btn){
    return customBtn;
  }else{
    return normalBtn;
  }
}

export const CustomButton = styled.button`
  ${({ customBtn }) => calculateBtn(customBtn)}
  padding: 1rem;
  font-size: 16px;
  font-weight: 700;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;

  @media(min-width: 768px){
    border-radius: 8px;
    padding: 1rem 1.4rem
  }

`

export const Total = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
