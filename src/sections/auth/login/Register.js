import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Paper, TextField, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: `url('background-image-url')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: `rgba(150, 20, 76, 0.1)`, // Using the provided color code with low opacity
  },
  paper: {
    padding: theme.spacing(4),
    maxWidth: '400px',
    width: '100%',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

function RegisterForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <h2>Login</h2>
          <form>
            <TextField
              className={classes.textField}
              label="Username"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              className={classes.textField}
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Log In
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default RegisterForm;
