import styled from 'styled-components';

export const MainStyle = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  padding: 50px;
  padding-top: 20px;
  background-color: #1f2022;

  & pre {
    background-color: #242424;
    border: 1px solid #444444;
    padding: 20px;
  }
`;

export const MainNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  -webkit-app-region: drag;
`;
