import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import CardMedia from "@material-ui/core/CardMedia";
import VALIDATION_QUERY from "../Queries/Get/validation";
import {useLazyQuery} from "@apollo/react-hooks";
import {AUTH_TOKEN} from "../constants";
import {useHistory} from "react-router";


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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary"/>}
            label="Remember me"
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