import { React } from 'react';
import './header.scss';
import { createStyles, Header as Mheader, Navbar } from '@mantine/core';
import { Link } from "react-router-dom";
import Auth from '../auth/auth';
import Login from '../auth/login';
import LoginContext from '../auth/context';

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

        <LoginContext>
            <Login />

            <Auth>
              <div>Any valid user can see this</div>
            </Auth>

            <Auth capability="create">
              <div>Users with create access can see this</div>
            </Auth>

            <Auth capability="update">
              <div>Users with update access can see this</div>
            </Auth>

            <Auth capability="delete">
              <div>Users with delete access can see this</div>
            </Auth>

          </LoginContext>

      </Navbar>
    </Mheader>
  );
}


export default Header;
