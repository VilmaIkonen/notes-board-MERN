import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts'
import Teddy from './images/Teddy.png';
import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';
import useStyles from './styles'

const App = () => {
  const classes = useStyles(); // Styling w MUI and styles file. Connected to component via "classname"

  const dispatch = useDispatch(); // Allows dispatch of redux actions

  // useDispatch hook is used inside useEffect hook
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={Teddy} alt="Teddy" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing="3">
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
};

export default App;