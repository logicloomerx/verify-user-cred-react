import React, { useState } from "react";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Axios from "axios";

export default function VerifyCredentials(props) {
    const [webSiteUsername, setWebSiteUsername] = useState("");
    const [webSitePassword, setWebSitePassword] = useState("");
    const [label, setLabel] = useState("");

    function authenticateUser(){
        const options = {
            headers: { 'Content-Type': 'application/json;charset=UTF-8' }
          };
          Axios.post('http://localhost:8080/crpto-app/api/verify/website/cred', JSON.stringify({
            webSiteUsername,
            webSitePassword,
            webSiteId:props.webSiteId,
            userName: props.userName
          }), options)
            .then((response) => {
              if (response.data) {
                setLabel("Your Credentials are perfectly Okay. Please click on website link to login.");
              } else {
                setLabel("Incorrect credentials. Please try again.");

              }
            }, (error) => {
              alert(error);
            });
    };

    return (
        <div>
            <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange={(event, newValue) => setWebSiteUsername( newValue)}
            />
            <br />
            <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) => setWebSitePassword(newValue)}
            />
            <br />
            <RaisedButton label="Verify" primary={true} style={style} onClick={authenticateUser} />
            <br/>
            {label}
        </div>
    )

}
const style = {
    margin: 15,
  };