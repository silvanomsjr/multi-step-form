import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
export const Cards = styled.label`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
  padding: 1.5rem .8rem;
  height: 100%;
  cursor: pointer;
  border-radius: 6px;
  transition: all .2s ease;
  border: 1px solid ${({ isActive }) => isActive ? 'hsl(213, 96%, 18%)' : 'hsl(229, 24%, 87%)'};
  background: ${({ isActive }) => isActive ? 'hsl(217, 100%, 97%)' : '#FFF'};

  & > span {
    color: hsl(243, 100%, 62%);
    font-size: 13px;
  }
`

export const TextCardsContent = styled.div`
  width: 100%;
`

export const CardsTitle = styled.h3`
  font-size: 16px;
  color: hsl(213, 96%, 18%);
`

export const CardsSubTitle = styled.p`
  font-size: 14px;
  color: hsl(231, 11%, 63%);
`
