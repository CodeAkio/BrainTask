import React, { useState, useEffect } from 'react';

import { MdDone, MdAdd, MdDeleteForever } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import GlobalStyle from './styles/global';

import api from './services/api';
import {
  NavBar,
  Main,
  Content,
  SubmitButton,
  Card,
  Tasks,
  Task,
  CheckBox,
  Label,
} from './styles';
import logo from './assets/img/anterior-part.png';

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

  async function handleSubmit(data, { resetForm }) {
    await api.post('/tasks', data);

    if (data) {
      resetForm();
      loadTaks();
    }
  }

  async function handleDelete(id) {
    await api.delete(`/tasks/${id}`);

    loadTaks();
  }

  return (
    <>
      <GlobalStyle />
      <NavBar>
        <nav>
          <img src={logo} alt="BrainTask" />
          <span>Brain Task</span>
        </nav>
      </NavBar>
      <Main>
        <Content>
          <Form onSubmit={handleSubmit}>
            <SubmitButton type="submit">
              <MdAdd color="#fff" size={28} />
            </SubmitButton>
            <Input name="description" placeholder="Nova tarefa" />
          </Form>
          <Card>
            <Tasks>
              {tasks.map((task) => (
                <Task key={String(task.id)}>
                  <span>
                    <CheckBox
                      checked={task.checked}
                      onClick={() => handleChecked(task)}
                    >
                      <MdDone color="#fff" size={10} />
                    </CheckBox>
                    <Label checked={task.checked}>{task.description}</Label>
                  </span>
                  <span onClick={() => handleDelete(task.id)}>
                    <MdDeleteForever color="#FF6184" size={20} />
                  </span>
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
