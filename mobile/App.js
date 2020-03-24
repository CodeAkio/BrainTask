import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import './config/ReactotronConfig';
import api from './services/api';
import {
  Container,
  Header,
  Title,
  Main,
  Card,
  Tasks,
  Task,
  CheckBox,
  ContainerLabel,
  Label,
} from './styles';

export default function App() {
  const [tasks, setTasks] = useState([]);

  async function loadTaks() {
    const response = await api.get('/tasks');

    setTasks(response.data);
  }

  useEffect(() => {
    loadTaks();
  }, []);

  async function handleChecked(task) {
    await api.put(`/tasks/${task.id}`, {
      checked: !task.checked,
    });

    loadTaks();
  }

  // async function handleSubmit(data) {
  //   await api.post('/tasks', data);

  //   if (data) {
  //     // resetForm();
  //     loadTaks();
  //   }
  // }

  return (
    <Container>
      <Header>
        <SafeAreaView>
          <Title>Brain Task</Title>
        </SafeAreaView>
      </Header>
      <Main>
        <Card>
          <Tasks
            data={tasks}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleChecked(item)}>
                <Task>
                  <CheckBox checked={item.checked}>
                    <MaterialIcons name="done" color="#fff" size={10} />
                  </CheckBox>
                  <ContainerLabel>
                    <Label checked={item.checked}>{item.description}</Label>
                  </ContainerLabel>
                </Task>
              </TouchableOpacity>
            )}
          />
        </Card>
      </Main>
    </Container>
  );
}

StatusBar.setBackgroundColor('#FF6184');
StatusBar.setBarStyle('light-content');
