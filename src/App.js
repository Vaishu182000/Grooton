import logo from './logo.svg';
import './App.css';
import React from 'react';
import fire from './Components/Firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Components/Login';
import Userdetails from './Components/UserDetails';
import Signup from './Components/Signup';
import Table from './Components/Table';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user:{}
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user:null})
      }
    })
  }
  render(){
    return(
      <Router>
      <div>
      <Switch>
        <Route exact path="/">
          {this.state.user?(<Userdetails/>):(<Login/>)}
        </Route>
        <Route path="/Signup">
            <Signup/>
        </Route>
        <Route path="/UserDetails">
            <Userdetails/>
        </Route>
        <Route path="/Login">
            <Login/>
        </Route>
        <Route path="/Table">
            <Table/>
        </Route>
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
