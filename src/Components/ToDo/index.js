import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';

// import AuthContext from '../auth/context';
import List from '../List/List'
import useForm from '../../hooks/form.js';
import { v4 as uuid } from 'uuid';
// import cookie from 'react-cookies';

import { Button, Card, createStyles, Grid, Slider, Text, TextInput } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  form: {
    backgroundColor: '',
    borderBottom: 2,
    padding: 20,
    margin: 0,
    text: 'bold',
    border: 'solid',
    borderColor: '#DFE3E6',
    width: '30%',
  },
  h1: {
        backgroundColor: theme.colors.gray[8],
        color: theme.colors.gray[0],
        width: '80%',
        margin: 'auto',
        fontSize: theme.fontSizes.lg,
        padding: theme.spacing.md,
        marginBottom: theme.spacing.md,
        marginTop: theme.spacing.md,
      }
}))

const ToDo = ({ children }) => {
  // const { _validate } = useContext(AuthContext);
  const { list, setList } = useContext(SettingsContext);
  const [incomplete, setIncomplete] = useState([]);

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const { classes } = useStyles();


  function addItem({ ...item }) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }
  // useEffect(() => {
  //   let token = cookie.load('auth');
  //   if(token) {
  //     _validate(token)
      
  //   }
  //   // linter will want 'incomplete' added to dependency array unnecessarily. 
  //   // disable code used to avoid linter warning 
  //   // eslint-disable-next-line react-hooks/exhaustive-deps 
  // }, []);

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  return (
    <>
      
      <h1 className={classes.h1} data-testid="todo-h1">To Do List: {incomplete} items pending</h1>

      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={4}>
          <Card withBorder p="xs">

            <form onSubmit={handleSubmit}>

            <Text className={classes.formHeading}>Add To Do Item</Text>

              <TextInput
                required label="To Do Item"
                onChange={handleChange}
                name="text"
                type="text"
                placeholder="Item Details"
              />

              <TextInput
                label="Assigned To"
                onChange={handleChange}
                name="assignee"
                placeholder="Assignee Name"
              />

              <Text>Difficulty</Text>
              <Slider
                onChange={handleChange}
                defaultValue={defaultValues.difficulty}
                type="range"
                min={0}
                max={5}
                name="difficulty"
                step={1}
                mb="lg"
              />

              <Button type="submit">Add Item</Button>

            </form>
          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={8}>
          <List
            list={list}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
          />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default ToDo;
