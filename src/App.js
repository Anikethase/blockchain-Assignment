import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import AddressForm from './components/addressForm'

function App() {
  return (
    <div className="App">
      <Form/>
      <AddressForm/>
    </div>
  );
}

export default App;
