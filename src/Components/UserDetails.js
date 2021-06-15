import React,{ Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import fire from './Firebase';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FaceIcon from '@material-ui/icons/Face';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from './Table';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class ContainedButtons extends Component {
    logout(){
        fire.auth().signOut();
    }
    constructor(props){
      super(props);
      this.state={
        items:[],
        isLoaded:true,
        redir:false,
      }
    }
    componentDidMount(){
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          isLoaded:false,
          items:json,
        })
      });
    }
    render(){
      var {isLoaded,items}=this.state;
      const headCells = [
        { id: 'Click to view more data', numeric: false, disablePadding: false, label: 'Click to view more data' },
        { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
        { id: 'username', numeric: false, disablePadding: false, label: 'User Name' },
        { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
        // { id: 'street', numeric: false, disablePadding: false, label: 'Street' },
        // { id: 'suite', numeric: false, disablePadding: false, label: 'Suite' },
        // { id: 'city', numeric: false, disablePadding: false, label: 'City' },
        // { id: 'zipcode', numeric: false, disablePadding: false, label: 'Zipcode' },
        { id: 'phone', numeric: false, disablePadding: false, label: 'Phone' },
        { id: 'website', numeric: false, disablePadding: false, label: 'Website' },
        { id: 'companyname', numeric: false, disablePadding: false, label: 'Company Name' },
    ];
  return (
    <div>
      <AppBar position="fixed" style={{backgroundColor:"#e32746"}}>
  <Toolbar>
    <Typography variant="h6">
      User Details
    </Typography>
    <div style={{marginLeft:1100}}>
      <IconButton onClick={this.logout} style={{color:"white"}}><AccountCircleIcon/></IconButton>
    </div>
  </Toolbar>
</AppBar>
    <div style={{marginTop:100}}>
    {isLoaded ? <div style={{textAlign:"center"}}><CircularProgress /></div>:
    <Table rows={items} headCells={headCells}/>
      // <Grid
      //         container
      //         spacing={4}
      //         direction="row"
      //         justify="flex-start"
      //         alignItems="flex-start"
      //     >
      //         {items.map(user => (
      //             <Grid item xs={12} sm={6} md={4}>
      //                 <Card>
      //                     <CardContent>
      //                     <FaceIcon/>
      //                     <Typography variant="h6">{user.name}</Typography>
      //                     <Button>ViewDetails</Button>
      //                     </CardContent>
      //                 </Card>
      //              </Grid>
      //         ))}
      //     </Grid>
      }
      </div>
    </div>
  );
}
}
export default ContainedButtons;