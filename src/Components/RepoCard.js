import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Star, StarBorder} from "@material-ui/icons";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        margin: 16,
        boxSizing: "border-box",
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: 200
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function RepoCard({repo, addStar, removeStar}) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        <Link href={repo.url} target="_blank"> {repo.name} </Link>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {repo.owner.login}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                        {repo.primaryLanguage && repo.primaryLanguage.name}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    {!repo.viewerHasStarred ?
                        <IconButton aria-label="previous" onClick={() => (addStar({variables: {id: repo.id}}))}>
                            <StarBorder/>
                        </IconButton> :
                        <IconButton aria-label="previous" onClick={() => (removeStar({variables: {id: repo.id}}))}>
                            <Star/>
                        </IconButton>
                    }
                </div>
            </div>
            <CardMedia
                className={classes.cover}
                image={repo.owner.avatarUrl}
            />

        </Card>
    );
}
