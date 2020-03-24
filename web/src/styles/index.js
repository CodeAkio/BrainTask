import Styled from 'styled-components';

export const NavBar = Styled.div`
  height: 80px;
  width: 100%;
  padding: 24px 64px;
  background: rgba(255, 255, 255, 0.6);
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 36px;
      width: 36px;
    }

    span {
      color: #FF6184;
      font-weight: bold;
      font-size: 24px;
      margin-left: 12px;
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

  > form {
    display: flex;
    margin-bottom: 24px;

    > input {
      display: flex;
      flex: 1;
      margin-left: 16px;
      height: 56px;
      border: 0;
      border-radius: 6px;
      padding: 24px;
      color: #8892B3;
      font-weight: bold;

      ::placeholder {
        color: #8892B3;
        font-weight: bold;
      }
    }
  }
`;

export const SubmitButton = Styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  border-radius: 6px;
  background: #FF6184;
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

export const CheckBox = Styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: 1px solid ${(props) => (props.checked ? '#FF6184' : '#8892B3')};
  border-radius: 6px;
  background: ${(props) => (props.checked ? '#FF6184' : '#fff')};
`;

export const Label = Styled.span`
  color: #8892B3;
  margin-left: 8px;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`;
