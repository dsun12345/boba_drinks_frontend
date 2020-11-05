import React from 'react';
import AccountsContainer from './containers/AccountsContainer'
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome"
import {Route, Switch} from 'react-router-dom'
import './App.css' 


class App extends React.Component {


  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>   
          <Route exact path="/" component={Welcome}/>
        </Switch>
        <AccountsContainer/>
      </div>
    );
  }
}

export default App;

