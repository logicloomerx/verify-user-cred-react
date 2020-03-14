import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Axios from 'axios';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      label: ''
    }
  }

  authenticateUser = () => {
    const options = {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    };
    Axios.post('http://localhost:8080/crpto-app/api/authorize/user', JSON.stringify({
      userName: this.state.username,
      password: this.state.password
    }), options)
      .then((response) => {
        if (response.data) {
          this.props.history.push('/dashboard', { username: this.state.username });
        } else {
          this.setState({ label: <h3>Invalid User</h3> })
        }
      }, (error) => {
        alert(error);
      });


  }

  registerUser = () => {
    const options = {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    };
    Axios.post('http://localhost:8080/crpto-app/api/register/user', JSON.stringify({
      userName: this.state.username,
      password: this.state.password
    }), options)
      .then((response) => {
        if (response.data) {
          this.setState({ label: <h3>User registered successfully.</h3> })
        } else {
          this.setState({ label: <h3>Error while registration</h3> })
        }
      }, (error) => {
        alert(error);
      });
  } 

  render() {

    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Login"
            />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} onClick={this.authenticateUser} />
            <RaisedButton label="Register" primary={true} style={style} onClick={this.registerUser} />
          </div>
        </MuiThemeProvider>
        {this.state.label}
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Login;