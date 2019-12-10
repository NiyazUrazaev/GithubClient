import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography, TextField, Button} from '@material-ui/core';
import {useLazyQuery} from "@apollo/react-hooks";
import ProfilePage from "./ProfilePage";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: "flex"
    },
    page: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    content: {
      width: "100%"
    }
    ,
    title: {
      margin: theme.spacing(1, 0, 2),
    }
    ,
    elementList: {
      margin: "10px 0",
      width:
        "100%"
    }
    ,
    searchButton: {
      margin: 8
    }
  }))
;

export default function SearchTab({query, title, entityName, initial_input}) {
  const classes = useStyles();
  const [getData, {loading, error, data}] = useLazyQuery(query);
  const [input, setInput] = useState(initial_input);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} className={classes.page}>
          <div className={classes.search}>
            <Typography variant="h4" className={classes.title}>
              {title}
            </Typography>
            <TextField id="outlined-basic" label="Login" value={input} onChange={(e) => (setInput(e.target.value))}/>
            <Button variant="contained" color="primary" className={classes.searchButton}
                    onClick={() => (getData({variables: {login: input}}))}>
              Search
            </Button>
          </div>
          {error && (
            <h5>Not found</h5>
          )}
          {loading && (
            <CircularProgress />
          )}
          {data && (
            <ProfilePage data={data} entity={entityName} />
          )}
        </Grid>
      </Grid>
    </div>
  );
}
