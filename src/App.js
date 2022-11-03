import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ToDo from './Components/ToDo';

import SettingsForm from './Components/SettingsForm/SettingsForm';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>


          <Header />

          <Routes>
            {/* <Route
              path="/"
              element={<List />} >
            </Route> */}
            <Route
              path="/"
              element={<ToDo />} >
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
