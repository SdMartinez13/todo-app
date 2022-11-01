import React from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';
import useForm from '../../hooks/form.js';
import {  Button, TextInput, Text, Space, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  form: {
    backgroundColor: '',
    borderBottom: 2,
    padding: 20,
    // color: 'white',
    margin: 0,
    text: 'bold',
    border: 'solid',
    borderColor: '#DFE3E6',
    width: '30%',
  },
}))

const AddForm = ({ children }) => {
  const { defaultValues, addItem } = useContext(SettingsContext);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const { classes } = useStyles();


  return (
    
      // <Menu style={{backgroundColor: 'red'}}>
      //   <Group >
          <form className={classes.form} onSubmit={handleSubmit}>
            {/* <Text><b>Items to do: {incomplete} </b></Text> */}

            <Text><b>Add To Do Item</b></Text>

            <TextInput required label="To Do Item"
              onChange={handleChange} name="text" type="text" placeholder="Item Details" />

            <TextInput label="Assigned To"
              onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />

            <Text>Difficulty</Text>
            <Space h="md" />
            <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
            <Space h="md" />


            <Button type="submit">Add Item</Button>
          </form>
      //   </Group>

      // </Menu>
    
  )
}

export default AddForm;