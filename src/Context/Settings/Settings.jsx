import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) => {
  const [list, setList] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);
  const [sort, setSort] = useState ('difficulty');
  const [pageItems, setPageItems] = useState(3);

  const saveLocally = ({showCompleted, pageItems, sort}) => {
    localStorage.setItem('todo', JSON.stringify({showCompleted, pageItems, sort}))
  };
  

  const values = {
    showCompleted,
    pageItems, 
    sort,
    setShowCompleted,
    setPageItems,
    setSort,
    setList,
    list,
    saveLocally,
  }

  
  

  return (

    <SettingsContext.Provider value={ values }>
      {children}
    </SettingsContext.Provider>

  )
}

export default SettingsProvider;