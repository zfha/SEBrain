import styled from 'styled-components';

export const Home = styled.div`
  color: red;
  display: flex;
  height: 100%;
`;

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

export const ListStyle = styled.div`
  width: 280px;
  min-width: 280px;
  background-color: #1f2022;
  color: #525657;
  height: 100%:
`;

export const ListHeader = styled.div`
  height: 50px;
  border-bottom: 1px solid #101011;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  background-color: #2a2b2d;
  color: #525657;
  border: 1px solid #525657;
  outline: none;
  border-radius: 5px;
  height: 23px;
  width: 220px;
  padding-left: 15px;

  &:focus {
    border: 1px solid #2e5065;
  }
`;

export const List = styled.div`
  padding-left: 30px;
`;

export const ListItem = styled.li`
  height: 95px;
  font-size: 14px;
  display: flex;
  padding-right: 20px;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #101011;
`;

export const ListItemTitle = styled.div`
  color: #d0d0d2;
  margin-bottom: 5px;
`;

export const Line2Div = styled.div`
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
