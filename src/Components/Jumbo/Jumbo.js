import React from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  paper: {
    height: 100,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10
  }
})

function Jumbo(props) {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      Hello from paper
    </Paper>
  )
};

export default withStyles(styles)(Jumbo);
