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
        this.handleChange=this.handleChange.bind(this);
        this.signup=this.signup.bind(this);
        this.state={
            email:"",
            password:""
        }
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
            alert("Signed Up successfully !! \nLogin Now to view Details");
        }).catch((err)=>{
            alert(err);
            console.log(err);
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
                    Signup
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
                    <button onClick={this.signup}>Signup</button>
                    <Link to="">
                        <Typography style={{color:"white"}}>Back to Login</Typography>
                    </Link>
                </form>
            </div>
        )
    }
}
export default Login;