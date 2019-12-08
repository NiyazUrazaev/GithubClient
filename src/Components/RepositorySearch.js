import React, {useState} from "react";
import {Button, makeStyles, TextField, Typography} from "@material-ui/core";
import RepoCard from "./RepoCard";
import {useLazyQuery, useMutation} from "@apollo/react-hooks";
import REPOS_QUERY from "../Queries/Get/repos";
import ADD_STAR from "../Queries/Post/addStar";
import REMOVE_STAR from "../Queries/Post/removeStar";
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    cards: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    content: {
        width: "100%"
    },
    title: {
        margin: theme.spacing(1, 0, 2),
    },
    elementList: {
        margin: "10px 0",
        width: "100%"
    },
    searchButton: {
        margin: 8
    },
}));

const RepositorySearch = () => {
    const classes = useStyles();
    const [input, setInput] = useState("react");
    const [getData, {loading, error, data}] = useLazyQuery(REPOS_QUERY);

    const [addStar] = useMutation(ADD_STAR,
        {
            refetchQueries: [{query: REPOS_QUERY, variables: {title: input}}]
        });
    const [removeStar] = useMutation(REMOVE_STAR,
        {
            refetchQueries: [{query: REPOS_QUERY, variables: {title: input}}]
        });

    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                Search repositories
            </Typography>
            <TextField label="Login" value={input} onChange={(e) => (setInput(e.target.value))}/>
            <Button variant="contained" color="primary" className={classes.searchButton}
                    onClick={() => (getData({variables: {title: input}}))}>
                Search
            </Button>
            {error && (
                <h5>Not found</h5>
            )}
            {loading && (
              <CircularProgress/>
            )}
            {data && (
                <div className={classes.cards}>
                    {data.search.nodes.map((node) => (
                        <RepoCard repo={node} key={node.id} addStar={addStar} removeStar={removeStar}/>
                    ))}
                </div>
            )}
        </div>
    )
};

export default RepositorySearch;
