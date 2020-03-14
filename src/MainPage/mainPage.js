import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import ImgMediaCard from '../imgMediaCard/ImgMediaCard';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({ username: this.props.location.state.username })
    } else {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Home Page"
            />
            <h3>Welcome {this.state.username}</h3>
          </div>
          {this.state.username==='ramesh'&&<ImgMediaCard />}
        </MuiThemeProvider>
      </div>
    )
  }
}
export default MainPage;
