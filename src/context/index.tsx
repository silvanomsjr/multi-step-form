import { useState, createContext, ReactNode } from "react";


interface IContextApi{
  children: ReactNode
}

interface IStepsContext{
  step: number
  setStep: (step: number) => void
}

const initialValues = {
  step: 1,
  setStep: () => {},
}

export const StepsContext = createContext<IStepsContext>(initialValues)

function StepsContextProvider({ children }:IContextApi){

  const [step, setStep] = useState(1);

  return (

    <StepsContext.Provider value={{step, setStep}}>
      {children}
    </StepsContext.Provider>

  )
}

export default StepsContextProvider;
