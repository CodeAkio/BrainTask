import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import './config/ReactotronConfig';
import api from './services/api';
import {
  Container,
  Header,
  Title,
  Main,
  Form,
  SubmitButton,
  InputShape,
  Input,
  Card,
  Tasks,
  Task,
  CheckBox,
  ContainerLabel,
  Label,
} from './styles';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

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

  async function handleSubmit() {
    setLoading(true);

    if (!description) {
      setDescription(false);
      return;
    }

    await api.post('/tasks', { description });

    setDescription('');
    setLoading(false);
    loadTaks();
  }

  return (
    <Container>
      <Header>
        <SafeAreaView>
          <Title>Brain Task</Title>
        </SafeAreaView>
      </Header>
      <Main>
        <Form>
          <TouchableOpacity onPress={handleSubmit}>
            <SubmitButton>
              {loading ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <MaterialIcons name="add" size={22} color="#fff" />
              )}
            </SubmitButton>
          </TouchableOpacity>
          <InputShape>
            <Input
              autoCorrect={false}
              placeholder="Nova tarefa"
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={description}
              onChangeText={setDescription}
            />
          </InputShape>
        </Form>
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

if (Platform === 'android') {
  StatusBar.setBackgroundColor('#FF6184');
}

StatusBar.setBarStyle('light-content');
