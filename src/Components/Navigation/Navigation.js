import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appbar: {
    background: blue[500]
  },
  icon: {
    padding: 2,
    fontSize: 40
  }
});

function HomeIcon() {
  return (
    <SvgIcon>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {

  }

  render() {
    const { classes } = this.props;
    const { isAuthenticated } = this.props.auth;

    return (


      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <HomeIcon className={classes.icon} color="white" />
            <Typography component={Link} to="/" variant="h4" color="inherit" className={classes.grow}>
              Mining Dashboard
            </Typography>
            {isAuthenticated() ? <Button onClick={this.props.auth.logout} size="large" color="inherit">Logout</Button> : <Button onClick={this.props.auth.login} size="large" color="inherit">Login</Button>}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default withStyles(styles)(Navigation);