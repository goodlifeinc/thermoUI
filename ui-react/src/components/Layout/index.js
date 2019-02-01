import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Header from '../Header';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  holder: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={12}>
                <div className={classes.holder}>
                    <Paper className={classes.holder}>{props.children}</Paper>
                </div>
            </Grid>
        </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);