import React from 'react';
import Layout from 'components/layout';
import SEO from 'components/seo';
import HiddenJoy from 'components/hidden-joy';

import theme from 'theme';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  headerGreen: {
    marginRight: 'auto !important',
    marginLeft: 'auto !important',
    width: '50%',
    borderBottomWidth: theme.spacing(0.2),
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.secondary.main,
    [theme.breakpoints.down('lg')]: {
      width: '60%',
    },
    [theme.breakpoints.down('md')]: {
      width: '70%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  headerIcon: {
    marginLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  center: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(4),
  },
});

const IndexPage = () => {
  const styles = useStyles();

  return (
        <Layout>
          <SEO title="home" />
          <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
           >
            <Grid item xs={12} className={styles.fourBotMargin}>
                 <Typography
                   variant="h4"
                   component="h3"
                   color="inherit"
                   align="center"
                   className={styles.headerGreen}>
                   Welcome to Corbsoft
                 <Typography
                   variant="caption"
                   component="div"
                   align="right"
                   className={styles.headerSubText}>
                   {'Robots beware'}
                 </Typography>
               </Typography>
            </Grid>

            <Grid item xs={12} sm={10} className={styles.fourBotMargin}>
            <div className={styles.center}>
              <HiddenJoy />
            </div>
            </Grid>
          </Grid>
        </Layout>
  );
};

export default IndexPage;
