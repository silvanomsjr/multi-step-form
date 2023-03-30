import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 170px;
  padding-top: 2rem;
  background-image: ${({bg}) => `url(${bg.bgSidebarMobile})`};
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;

  @media (min-width: 768px) {
    background-image: ${({bg}) => `url(${bg.bgSidebarDesktop})`};
    height: 800px;
    width: 387px;
    background-size: contain;
    padding: 2rem;
  }

`
