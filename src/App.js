import React from 'react';
import AccountsContainer from './containers/AccountsContainer'
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome"
import './App.css' 

class App extends React.Component {


  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Welcome/>
        <AccountsContainer/>
      </div>
    );
  }
}

export default App;

