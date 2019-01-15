import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';
import blue from '@material-ui/core/colors/blue';

const auth = true;

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
  }
});

function Navigation(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h4" color="inherit" className={classes.grow}>
            Mining Dashboard
          </Typography>
          {auth && <Button component={Link} to="/login" size="large" color="inherit">Login</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navigation);