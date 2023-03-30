import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: hsl(217, 100%, 97%);
  border-radius: 6px;
  padding: 1rem;
  gap: .7rem;
`

export const PlanInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > div span {
    font-weight: normal;
    color: hsl(231, 11%, 63%);
    text-decoration: underline;
  }

  span{
    font-weight: bold;
    color: hsl(213, 96%, 18%);
  }

`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 2px;
  background: hsl(229, 24%, 87%);
`

export const AddonsInfo = styled.div`
  width: 100%;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p{
      color: hsl(231, 11%, 63%);
    }

    span{
      color: hsl(213, 96%, 18%);
    }
  }

`
