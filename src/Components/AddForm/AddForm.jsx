// import React from 'react';
// import { useContext, useState, useEffect } from 'react';
// import { SettingsContext } from '../../Context/Settings/Settings';
// import List from '../List/List'
// import useForm from '../../hooks/form.js';
// import { v4 as uuid } from 'uuid';

// import { Button, TextInput, Text, Space, createStyles } from '@mantine/core';

// const useStyles = createStyles((theme) => ({
//   form: {
//     backgroundColor: '',
//     borderBottom: 2,
//     padding: 20,
//     // color: 'white',
//     margin: 0,
//     text: 'bold',
//     border: 'solid',
//     borderColor: '#DFE3E6',
//     width: '30%',
//   },
// }))

// const AddForm = ({ children }) => {
//   const { list, setList } = useContext(SettingsContext);
//   const [incomplete, setIncomplete] = useState([]);

//   const [defaultValues] = useState({
//     difficulty: 4,
//   });
//   const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
//   const { classes } = useStyles();


//   function addItem({ ...item }) {
//     item.id = uuid();
//     item.complete = false;
//     console.log(item);
//     setList([...list, item]);
//   }

//   function toggleComplete(id) {

//     const items = list.map(item => {
//       if (item.id === id) {
//         item.complete = !item.complete;
//       }
//       return item;
//     });

//     setList(items);

//   }

//   function deleteItem(id) {
//     const items = list.filter(item => item.id !== id);
//     setList(items);
//   }

//   useEffect(() => {
//     let incompleteCount = list.filter(item => !item.complete).length;
//     setIncomplete(incompleteCount);
//     document.title = `To Do List: ${incomplete}`;
//     // linter will want 'incomplete' added to dependency array unnecessarily. 
//     // disable code used to avoid linter warning 
//     // eslint-disable-next-line react-hooks/exhaustive-deps 
//   }, [list]);


//   return (

//     // <Menu style={{backgroundColor: 'red'}}>
//     <>
//       <form className={classes.form} onSubmit={handleSubmit}>
//         {/* <Text><b>Items to do: {incomplete} </b></Text> */}

//         <Text>Add To Do Item</Text>

//         <TextInput required label="To Do Item"
//           onChange={handleChange} name="text" type="text" placeholder="Item Details" />

//         <TextInput label="Assigned To"
//           onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />

//         <Text>Difficulty</Text>
//         <Space h="md" />
//         <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
//         <Space h="md" />


//         <Button type="submit">Add Item</Button>
//       </form>
//       <List deleteItem={deleteItem} toggleComplete={toggleComplete}/>

//     </>

//     // </Menu>

//   )
// }

// export default AddForm;