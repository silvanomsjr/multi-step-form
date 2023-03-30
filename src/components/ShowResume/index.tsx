import { Container, PlanInfo, AddonsInfo, Divider } from './styles'

import useStepContext from '../../hooks/useStepContext';

import formatAddons from '../../utils/formatAddons'

import planPrices from '../../mocks/planPrices'
import addonsPrices from '../../mocks/addonsPrice'

interface AddonsProps{
  onlineServices: boolean
  largerStorage: boolean
  customizableProfile: boolean
}

interface IShowResumeProps {
  plan: string
  addons: AddonsProps
  total: number
  yearly: boolean
}


function ShowResume({ plan, addons, total, yearly }: IShowResumeProps){
  const { setStep } = useStepContext();

  function handleChange() {
    setStep(2)
  }

  console.log('preco addons: ', addonsPrices)
  console.log('preco planos: ', planPrices)


  return(
    <Container>
      <PlanInfo>
        <div>
          <h3>{plan.charAt(0).toUpperCase() + plan.slice(1)} ({yearly ? 'Yearly' : 'Monthly'})</h3>
          <span onClick={handleChange}>Change</span>
        </div>
        <span>
          ${yearly ? (planPrices[plan as keyof typeof planPrices] * 10)+'/yr' : (planPrices[plan as keyof typeof planPrices])+'/mo'}
        </span>
      </PlanInfo>

      {Object.values(addons).some(Boolean) &&
        <>
          <Divider />

          <AddonsInfo>
            {Object.keys(addons).map((x) => (
              addons[x as keyof AddonsProps] ?
              <div key={x}>
                <p>{formatAddons(x)}</p>
                <span>
                  +${yearly
                    ? (addonsPrices[x as keyof typeof addonsPrices] * 10)+'/yr'
                    : (addonsPrices[x as keyof typeof addonsPrices])+'/mo'}
                </span>
              </div>
              : null
            ))}
          </AddonsInfo>
        </>
      }


    </Container>
  )
}


export default ShowResume;
