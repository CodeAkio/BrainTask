import Styled from 'styled-components';

export const NavBar = Styled.div`
  height: 80px;
  width: 100%;
  padding: 24px 32px;
  background: rgba(255, 255, 255, 0.6);
  align-items: center;

  nav {
    display: flex;

    span {
      color: #FF6184;
      font-weight: bold;
      font-size: 24px;
    }
  }
`;

export const Main = Styled.main`
  display: flex;
  justify-content: center;
  margin-top: 64px;
`;

export const Content = Styled.div`
  width: 750px;
`;

export const Card = Styled.div`
  background: #fff;
  border-radius: 6px;
  padding: 16px 24px;
`;

export const Tasks = Styled.ul``;

export const Task = Styled.li`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

export const CheckBox = Styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid ${(props) => (props.checked ? '#FF6184' : '#8892B3')};
  border-radius: 4px;
  position: relative;
  background: ${(props) => (props.checked ? '#FF6184' : '#fff')};

  svg {
    position: absolute;
    left: 15%;
    top: 50%;
    transform: translateX(-50%);
    transform: translateY(-50%);
  }
`;

export const Label = Styled.span`
  color: #8892B3;
  margin-left: 8px;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`;
