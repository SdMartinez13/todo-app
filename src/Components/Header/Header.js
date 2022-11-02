import { React } from 'react';
import './header.scss';
import { createStyles, Header as Mheader, Navbar } from '@mantine/core';
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: '#1C7ED6',
    borderBottom: 0,
    padding: 20,
    color: 'white',
  },
}))


const Header = () => {
  const { classes } = useStyles();

  return (

    <Mheader>
      <Navbar className={classes.navbar}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/settings" className="nav-link">Settings</Link>
      </Navbar>
    </Mheader>
  );
}


export default Header;
