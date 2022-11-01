import {useContext} from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';
import AddForm from '../AddForm/AddForm.jsx';
import List from '../List/List'
import { Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  text: {
    backgroundColor: '#343A40',
    borderBottom: 0,
    padding: 10,
    color: 'white',
    // margin: 20,
    // text: '',
  },
}))
const ToDo = () => {

  const { incomplete } = useContext(SettingsContext);
  const { classes } = useStyles();


  return (
    <>
      <header data-testid="todo-header">
        <Text className={classes.text} data-testid="todo-h1">To Do List: {incomplete} items pending</Text>
      </header>
      {/* <AddForm />
      <List /> */}
    </>
  );
};

export default ToDo;
