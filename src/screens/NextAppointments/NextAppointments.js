import React, { useState, useEffect } from 'react';
import {
  Image, StyleSheet, Text, View
} from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import TextHeadings from '../../Components/TextHeadings/TextHeadings';
import { getString, translateEnum } from '../../static/locale';
import { Colors } from '../../styles';

import experiment1 from '../../static/assets/img/experiment4.png';
import NoAppointmentsContainer from './NoAppointmentsContainer';
import FullScreenLoader from '../../Components/FullScreenLoader/FullScreenLoader';
import { createPost } from '../../graphql/mutations';
import { listPosts } from '../../graphql/queries';

const initialState = { name: '', description: '' };

const NextAppointments = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listPosts));
      const todos1 = todoData.data.listPosts.items;
      console.log({ todos1 });
      setTodos(todos1);
    } catch (err) { console.log('error fetching todos'); }
  }

  async function addTodo() {
    try {
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createPost, { input: todo }));
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  if (isLoading) {
    return (<FullScreenLoader />);
  }
  return (<NoAppointmentsContainer />);
};

export default NextAppointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});
