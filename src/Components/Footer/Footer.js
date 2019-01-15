import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    padding: 10,
    marginTop: 10,
    width: 'auto',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60
  },
});

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" color="inherit">
              <Link href={'mailto:bhavman2@gmail.com'}>
                Contact Us
              </Link>
            </Typography>
            <Typography variant="h6" color="inherit">
              Mining Dashboard &copy; 2019
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Footer);