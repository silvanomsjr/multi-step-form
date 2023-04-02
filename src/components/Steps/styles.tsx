import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .7rem;


  & > div:nth-child(${(props) => props.active}) > div:first-child {
    background: #fff;
    color: #000;
  }


  @media (min-width: 768px) {
    margin-top: .5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }


`

export const NumbersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  gap: 1rem;
`

export const Numbers = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  font-weight: 700;
  text-align: center;
  padding: 4px 1px 0 0;
  color: #ffffff;
`

export const InfoNumbers = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }

`

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;

`

export const Description = styled.span`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;

`

