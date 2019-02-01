import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  paddingRight: {
    paddingRight: 25
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 10,
  },
  noUnderline: {
    textDecoration: 'none',
    color: 'white'
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <WhatshotIcon />
          </IconButton>
          <Link to="/" className={classes.noUnderline}>
            <Typography variant="h6" color="inherit" className={classes.paddingRight}>
              Temp UI
            </Typography>
          </Link>
          <Link to="/outside" className={classes.noUnderline}>
            <Button color="inherit">Outisde</Button>
          </Link>
          <Link to="/merged" className={classes.noUnderline}>
            <Button color="inherit">Merged</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);