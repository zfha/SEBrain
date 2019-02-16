import styled from 'styled-components';

export const ListStyle = styled.div`
  width: 280px;
  min-width: 280px;
  background-color: #1f2022;
  color: #525657;
  height: 100%;
  border-right: 1px solid #101011;
  display: flex;
  flex-direction: column;
`;

export const ListHeader = styled.div`
  height: 50px;
  border-bottom: 1px solid #101011;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-app-region: drag;
`;

export const SearchInput = styled.input`
  background-color: #2a2b2d;
  color: #525657;
  border: 1px solid #525657;
  outline: none;
  border-radius: 5px;
  height: 23px;
  flex: 1;
  margin-left: 10px;
  padding-left: 15px;
  margin-right: 10px;

  &:focus {
    border: 1px solid #2e5065;
  }
`;

export const NewI = styled.i`
  font-size: 20px;
  margin-right: 10px;
  &:hover {
    color: #2e5065;
  }
`;

export const List = styled.div`
  flex: 1;
  overflow: scroll;
`;

export const ListItem = styled.li`
  position: relative;
  height: 95px;
  font-size: 14px;
  display: flex;
  background-color: ${props => (props.focus ? '#19191c' : '#1f2022')};
  padding-left: 30px;

  &:before {
    content: '';
    width: 5px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${props => (props.focus ? '#66c9fd' : 'transparent')};
  }
`;

export const ListItemContent = styled.div`
  height: 100%;
  flex: 1;
  box-sizing: border-box;
  border-bottom: 1px solid #101011;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListItemTitle = styled.div`
  color: ${props => (props.empty ? '#525657' : '#d0d0d2')};
  font-size: 15px;
  font-weight: 600;
  line-height: 21px;
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
