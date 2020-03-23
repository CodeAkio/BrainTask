import React from 'react';
import { MdDone } from 'react-icons/md';
import GlobalStyle from './styles/global';

import {
  NavBar,
  Main,
  Content,
  Card,
  Tasks,
  Task,
  CheckBox,
  Label,
} from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar>
        <nav>
          <span>Brain Task</span>
        </nav>
      </NavBar>
      <Main>
        <Content>
          <Card>
            <Tasks>
              <Task>
                <CheckBox /> <Label>Lavar o carro</Label>
              </Task>
              <Task>
                <CheckBox checked>
                  <MdDone color="#fff" size={10} />
                </CheckBox>
                <Label>Devolver o livro na biblioteca</Label>
              </Task>
              <Task>
                <CheckBox />
                <Label>Pagar o boleto da fatura do cartão de crédito</Label>
              </Task>
              <Task>
                <CheckBox /> <Label>Ir para a academia</Label>
              </Task>
            </Tasks>
          </Card>
        </Content>
      </Main>
    </>
  );
}

export default App;
