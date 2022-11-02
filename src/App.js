import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ToDo from './Components/ToDo';
import List from './Components/List/List';
import AddForm from './Components/AddForm/AddForm';
import SettingsForm from './Components/SettingsForm/SettingsForm';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <ToDo />
          <List />
          <Routes>
            {/* <Route
              path="/"
              element={<List />} >
            </Route> */}
            <Route
              path="/"
              element={<AddForm />} >
            </Route>
            <Route
              path="/settings"
              element={<SettingsForm />}>
            </Route>
          </Routes>
          {/* <div className="container">
            <ToDo />
            <div className="flex"> */}
          {/* </div>
          </div> */}
          <Footer />
        </BrowserRouter>
      </>

    );
  }
}
