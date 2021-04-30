import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import DrawerToggle from './DrawerToggle/DrawerToggle';




class ChatDiv extends React.Component {

  state = {
    open: false
  }

  MenuIconClicked = () => {
    console.log("clicked ")
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <div >
        <AppBar position="static" style={{ backgroundColor: '#f8f8f8', color: 'black', boxShadow: '0px' }} elevation={0}>
          <Toolbar style={{ width: '100%' }}>
            <IconButton edge="start" style={{ marginRight: '2%', color: "#3c4fa2" }} aria-label="menu">
              <MenuIcon onClick={this.MenuIconClicked} />
            </IconButton>
            <div ><h3>Elizabeth Nelson</h3></div>
            <div>
              <IconButton style={{ backgroundColor: '#366ef7', height: '40px', width: '50px', color: 'white', margin: '7px 7px 7px 7px ' }} >
                <PhoneOutlinedIcon />
              </IconButton>
            </div>
            <div >
              <IconButton style={{ backgroundColor: '#366ef7', height: '40px', width: '50px', color: 'white', margin: '7px ' }} >
                <VideocamOutlinedIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <DrawerToggle open={this.state.open} />

      </div >
    )
  }
}

export default ChatDiv;
