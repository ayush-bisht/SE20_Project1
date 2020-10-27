import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import PostScream from '../scream/PostScream';
import Notifications from './Notifications';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import SurroundSoundTwoToneIcon from '@material-ui/icons/SurroundSoundTwoTone';
import PowerSettingsNewTwoToneIcon from '@material-ui/icons/PowerSettingsNewTwoTone';

class Navbar extends Component {
  handleLogout = () => {
    const { logoutUser } = this.props;
    //this.props.logoutUser();
    logoutUser();
  };
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar style={{ background: '#ba2f2f' }}>
        <Toolbar variant="dense">
        <Button color="inherit" component={Link} to="/">
        <SurroundSoundTwoToneIcon /> Scream
        </Button>
          {authenticated ? (
            <Fragment>
              <PostScream />
              <Link to="/">
                <MyButton tip="Home">
                  <HomeIcon />
                </MyButton>
              </Link>
              <Notifications />
              <MyButton className="nav-container" color="inherit" tip="Logout" onClick={this.handleLogout}>
                <PowerSettingsNewTwoToneIcon />
              </MyButton>
            </Fragment>
          ) : (
            <Fragment>
              <Button className="nav-container" color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button className="nav-container" color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(Navbar);
