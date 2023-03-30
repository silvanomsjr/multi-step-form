import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
`

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: .2rem;

  & + & {
    margin-top: .8rem;
  }
`

export const FormInputName = styled.p`
  color: hsl(213, 96%, 18%);
  font-weight: 400;
`

export const FormInputItem = styled.input`
  width: 100%;
  border-radius: 6px;
  border: 1px solid hsl(229, 24%, 87%);
  outline: none;
  padding: .5rem 1rem;
  font-size: 16px;
  font-weight: 500;
`
