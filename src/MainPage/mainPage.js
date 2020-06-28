import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import ImgMediaCard from '../imgMediaCard/ImgMediaCard';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from '@material-ui/core/Dialog';
import { Button } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Axios from "axios";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      openDialogue: false,
      itemDetail: {
        userName: '',
        title: '',
        webSiteUsername: '',
        webSitePassword: '',
        link: '',
        imgName: ''
      }
    }

    this.addItem = this.addItem.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.addWebsiteDetails = this.addWebsiteDetails.bind(this);

  }

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({ username: this.props.location.state.username })
      this.setState({
        itemDetail: {
          userName: this.props.location.state.username 
        }
      }
      )
    } else {
      this.props.history.push('/')
    }
  }

  addItem() {
    this.setState({ openDialogue: true })
  }

  handleClose() {
    this.setState({ openDialogue: false })
  };

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      itemDetail: {
        ...this.state.itemDetail,
        [name]: value
      }
    }
    )
  }

  addWebsiteDetails() {
   
    const options = {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    };
    
    Axios.post('http://localhost:8080/crpto-app/api/add/webItem', JSON.stringify(this.state.itemDetail
    ), options)
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
            <AppBar title="Home Page" position="sticky">
              <Button label="Add Item" color="inherit" onClick={this.addItem}>
                Add Item</ Button>
            </AppBar>
            <Dialog open={this.state.openDialogue} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Add details about your new wesite details to remember.
                </DialogContentText>
                <TextField autoFocus
                  margin="dense"
                  label="Website Title"
                  onChange={this.handleChange('title')}
                  fullWidth />
                <TextField autoFocus
                  margin="dense"
                  id="webSiteUsername"
                  label="Username"
                  onChange={this.handleChange('webSiteUsername')}
                  fullWidth />
                <TextField autoFocus
                  margin="dense"
                  id="webSitePassword"
                  label="Password"
                  onChange={this.handleChange('webSitePassword')}
                  fullWidth />
                <TextField autoFocus
                  margin="dense"
                  id="link"
                  label="Link"
                  onChange={this.handleChange('link')}
                  fullWidth />
                <TextField autoFocus
                  margin="dense"
                  label="Image Name"
                  onChange={this.handleChange('imgName')}
                  fullWidth />
              </DialogContent>

              <DialogActions>
                <RaisedButton label="Cancel" onClick={this.handleClose} color="primary" />
                <RaisedButton label="Add Details" onClick={this.addWebsiteDetails} color="primary" />
              </DialogActions>

            </Dialog>

            <h3>Welcome {this.state.username}</h3>
          </div>
          <ImgMediaCard username={this.state.username} />
        </MuiThemeProvider>
      </div>
    )
  }
}
export default MainPage;
