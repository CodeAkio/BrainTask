import Styled from 'styled-components';

export const Container = Styled.View`
  flex: 1;
  background: #F1F2F8;
`;

export const Header = Styled.View`
  align-items: center;
  justify-content: center;
  height: 96px;
  width: 100%;
  background: rgba(255, 97, 132, 0.75);
`;

export const Title = Styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`;

export const Main = Styled.View`
  margin: 32px;
`;

export const Card = Styled.View`
  background: #fff;
  border-radius: 6px;
  padding: 16px 24px;
`;

export const Tasks = Styled.FlatList``;

export const Task = Styled.View`
  flex-direction: row;
  align-items: center;
  margin: 8px 0;
`;

export const CheckBox = Styled.View`
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: 1px solid ${(props) => (props.checked ? '#FF6184' : '#8892B3')};
  border-radius: 4px;
  background: ${(props) => (props.checked ? '#FF6184' : '#fff')};
`;

export const ContainerLabel = Styled.View`
  margin-left: 8px;
  flex: 1;
`;

export const Label = Styled.Text`
  color: #8892B3;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`;
