import { React } from 'react';
import './header.scss';
import { createStyles, Header as Mheader } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: '#1C7ED6',
    borderBottom: 0,
    padding: 20,
    color: 'white',
  },
}))


const Header = () => {
  const { classes } = useStyles();

  return (

    <Mheader className={classes.header}>
      <header id="main-header">
        <h1>Home</h1>

      </header>
    </Mheader>
  );
}


export default Header;
