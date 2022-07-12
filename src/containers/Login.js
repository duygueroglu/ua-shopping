import React from 'react'
import styled from "styled-components";
import { AccountBox } from "./auth-components/accountbox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Login = () => {
  return (
    <div>
    <AppContainer>
      <AccountBox/>
    </AppContainer></div>
  )
}
