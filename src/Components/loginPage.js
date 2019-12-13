import React, {useState} from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {makeStyles} from '@material-ui/core/styles';
import VALIDATION_QUERY from "../Queries/query/validation";
import {useLazyQuery} from "@apollo/react-hooks";
import {AUTH_TOKEN} from "../constants";
import {useHistory} from "react-router";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    marginTop: 100,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginPage({login}) {
  let history = useHistory();
  const classes = useStyles();
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const [getData] = useLazyQuery(VALIDATION_QUERY, {
    onCompleted: () => {
      setError(false);
      login(token);
      history.push(``);
      window.location.reload();
    },
    onError: () => {
      setError(true);
      localStorage.removeItem(AUTH_TOKEN);
    }
  });

  const validation = () => {
    localStorage.setItem(AUTH_TOKEN, token);
    getData();
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline/>
      <Grid item xs={false} sm={4} md={7} className={classes.image}/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Github Client
          </Typography>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h2" variant="h5">
            Sign in
          </Typography>
          <TextField
            onChange={(e) => setToken(e.target.value)}
            value={token}
            error={error}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="token"
            label="Token"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button fullWidth variant="contained" color="primary" className={classes.submit}
                  onClick={validation}>
            Sign In
          </Button>
          <Grid container>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}