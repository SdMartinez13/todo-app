import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) => {
  const [list, setList] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [incomplete, setIncomplete] = useState([]);
  const [sort, setSort] = useState ('difficulty');
  const [defaultValues] = useState({
    difficulty: 4,
  });

  const values = {
    showCompleted,
    // pageItems, 
    sort,
    setShowCompleted,
    // SetPageItems,
    setSort,
  }

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);  
  

  return (

    <SettingsContext.Provider value={{values, list, setList, incomplete, setIncomplete, showCompleted, setShowCompleted, toggleComplete, addItem, defaultValues, deleteItem, }}>
      {children}
    </SettingsContext.Provider>

  )
}

export default SettingsProvider;