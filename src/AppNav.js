import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NextWeek from 'material-ui/svg-icons/content/next-week';
import InsertDriveFile from 'material-ui/svg-icons/editor/insert-drive-file';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import Assignment from 'material-ui/svg-icons/action/assignment';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import * as firebase from 'firebase';



class AppNav extends Component{

  constructor(props){
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.logoutuser = this.logoutuser.bind(this);
    injectTapEventPlugin();
    this.state = {
      sidebarOpen: false
    };


  }

  toggleSidebar(){
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    })
  }

  async logoutuser(){
    try{
      await firebase.auth().signOut();
    }catch(e){
      console.log(e);
    }
    this.toggleSidebar();
  }

  render(){
    const mainContentStyle = {
      height: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return (
      <div>
        <AppBar
          title="K.I.D.S."
          onLeftIconButtonTouchTap={this.toggleSidebar}
        />
        {this.props.children}
        <Drawer open={this.state.sidebarOpen}>
          <IconButton onTouchTap={this.toggleSidebar}><NavigationClose /></IconButton>
          <Link to="/observation" style={{textDecoration: 'none'}} onClick={this.toggleSidebar}>
          <MenuItem primaryText="Observation" leftIcon={<NextWeek />} />
          </Link>
          <Link to="/docs" style={{textDecoration: 'none'}} onClick={this.toggleSidebar}>
          <MenuItem primaryText="Document Viewer" leftIcon={<InsertDriveFile />} />
          </Link>
          <MenuItem primaryText="Log Out" leftIcon={<ExitToApp />}  onClick={this.logoutuser}/>
          {/*<MenuItem primaryText="MOU Agreement" leftIcon={<Assignment />} />*/}
        </Drawer>
      </div>
    );
  }
}

export default AppNav;
