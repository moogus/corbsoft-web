import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './styles';

const HOME = 'Corbsoft';

const Header = () => {
  const styles = useStyles();

  return (
    <>
        <AppBar
          elevation={0}
          style={{ background: '#1565C0' }}
          >
        <Toolbar>
          <Typography className={styles.pageHeader} variant="h4" component="p">
            { HOME }
          </Typography>
        </Toolbar>
      </AppBar>
  </>
  );
};

export default Header;
