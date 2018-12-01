import styled from 'styled-components';

export const MenuContainer = styled.div`
  background: #2c2d2f;
  height: 100%;
  width: 150px;
  -webkit-app-region: drag;
  min-width: 150px;
`;

export const MenuNav = styled.div`
  height: 50px;
`;

export const MenuItemCode = styled.li`
  color: #9f9f9f;
  font-size: 14px;
  padding: 0px 20px;
  height: 28px;
  line-height: 28px;

  &:hover {
    color: #d0d0d2;
    background-color: #535355;
  }
`;
