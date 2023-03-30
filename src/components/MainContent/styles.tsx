import styled, {css} from 'styled-components';

export const ScreenContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 6.2rem;
`


export const Container = styled.div`
  z-index: 99999;
  width: 90%;
  background: #ffff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 2rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`

export const InfoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.2rem;
`


export const Title = styled.h1`
  color: hsl(213, 96%, 18%);
  line-height: 0.8;
`

export const SubTitle = styled.p`
  color: hsl(231, 11%, 63%);
`
export const ButtonContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #FFF;
  padding: 1.5rem;
  display: flex;
  justify-content: ${({ both }) => both ? 'space-between' : 'flex-end'};
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

`

export const Total = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
