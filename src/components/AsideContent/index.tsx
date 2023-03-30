import { Container } from './styles'

import Steps from '../Steps'

import bgSidebarMobile from '../../assets/images/bg-sidebar-mobile.svg'
import bgSidebarDesktop from '../../assets/images/bg-sidebar-desktop.svg'
import useStepContext from '../../hooks/useStepContext'

const backgroundImg = {
  bgSidebarDesktop,
  bgSidebarMobile
}

function AsideContent() {

  const {step} = useStepContext();

  return (
    <Container bg={backgroundImg}>
      <Steps step={step}/>
    </Container>
  )
}

export default AsideContent;
