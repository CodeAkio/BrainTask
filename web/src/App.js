import React, { useState, useEffect } from 'react';
import { MdDone } from 'react-icons/md';
import GlobalStyle from './styles/global';

import api from './services/api';
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
  const [tasks, setTasks] = useState([]);

  async function loadTaks() {
    const response = await api.get('/tasks');

    setTasks(response.data);
  }

  useEffect(() => {
    loadTaks();
  });

  async function handleChecked(task) {
    await api.put(`/tasks/${task.id}`, {
      checked: !task.checked,
    });

    loadTaks();
  }

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
              {tasks.map((task) => (
                <Task key={String(task.id)}>
                  <CheckBox
                    checked={task.checked}
                    onClick={() => handleChecked(task)}
                  >
                    <MdDone color="#fff" size={10} />
                  </CheckBox>
                  <Label checked={task.checked}>{task.description}</Label>
                </Task>
              ))}
            </Tasks>
          </Card>
        </Content>
      </Main>
    </>
  );
}

export default App;
