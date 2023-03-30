import GlobalStyle from "../../assets/styles/global"

import StepsContextProvider from "../../context";

import { Container } from "./styles";

import AsideContent from '../AsideContent'
import MainContent from '../MainContent'

function App() {

  return (
    <>
      <GlobalStyle/>
      <StepsContextProvider>
        <Container>
          <AsideContent/>
          <MainContent/>
        </Container>
      </StepsContextProvider>
    </>
  )
}


export default App;
