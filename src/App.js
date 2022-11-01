import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ToDo from './Components/ToDo';
import List from './Components/List/List';
import AddForm from './Components/AddForm/AddForm';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <ToDo />
          <div className="flex">
            <AddForm />
            <List />
          </div>
        </div>
        <Footer />
      </>

    );
  }
}
