import React,{Component} from "react";
import Typography from '@material-ui/core/Typography';
import fire from "./Firebase";
import Button from '@material-ui/core/Button';
import './Styles.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
class Login extends Component{
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this);
        
        this.state={
            email:"",
            password:""
        }
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err)
            alert(err);
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div>
                <div style={{textAlign:"right"}}>
                </div>
                <Typography variant="h4" align="center" color="textPrimary" style={{marginTop:25}} >
                    Login
                </Typography> <br/>
                <form className="box">
                    <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
                    <input
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    />
                    <button onClick={this.login}>Login</button>
                    <Link to="/Signup">
                        <button>Signup</button>
                    </Link>
                </form>
            </div>
        )
    }
}
export default Login;