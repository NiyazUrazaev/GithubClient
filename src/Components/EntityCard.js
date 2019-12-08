import React, {useState} from "react";
import {Button, CardMedia, CardContent, Typography, Card, makeStyles} from "@material-ui/core";
import {useMutation} from "@apollo/react-hooks";
import FOLLOW_USER from "../Queries/Post/follow";
import UNFOLLOW_USER from "../Queries/Post/unfollow";
import GET_USER_INFO from "../Queries/Get/user";

const useStyles = makeStyles({
    card: {
        width: 345,
        marginRight: 32,
        height: "fit-content"
    },
    media: {
        height: 300,
    },
    description: {
        display: "flex",
        flexDirection: "column",
        alignItems: "end"
    },
    moreButton: {
        marginTop: 8,
        marginRight: 16
    }
});

const EntityCard = ({data, entity}) => {
    const info = data[entity];
    const classes = useStyles();
    const [extended, switchExtended] = useState(false);
    console.log(info);
    const [follow] = useMutation(FOLLOW_USER,
        {
            refetchQueries: [{query: GET_USER_INFO, variables: {login: info.login}}]
        });
    const [unfollow] = useMutation(UNFOLLOW_USER,
        {
            refetchQueries: [{query: GET_USER_INFO, variables: {login: info.login}}]
        });
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={info.avatarUrl}
                title="Contemplative Reptile"
            />
            <CardContent className={classes.description}>
                <Typography gutterBottom variant="h5" component="h2">
                    {info.name}
                </Typography>
                <a href={info.url}>
                    <Typography gutterBottom variant="subtitle1" component="h3">
                        {info.login}
                    </Typography>
                </a>
                {extended &&
                <>
                    <Typography variant="body2" component="p">
                        {info.bio}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {info.description}
                    </Typography>
                    <Typography variant="subtitle2" component="h4">
                        {info.company}
                    </Typography>
                    <Typography variant="overline" component="h5">
                        {info.location}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" component="h6">
                        {info.email}
                    </Typography>
                </>}
                <div>
                    <Button className={classes.moreButton} variant="contained" color="primary"
                            onClick={() => (switchExtended(!extended))}>
                        {extended ? "Less" : "More"}
                    </Button>
                    {!info.isViewer &&
                    <Button className={classes.moreButton} variant="contained" color="primary"
                            onClick={() => (info.viewerIsFollowing ?
                                unfollow({variables: {userId: info.id}})
                                :
                                follow({variables: {userId: info.id}}))}>
                        {info.viewerIsFollowing ? "Unfollow" : "Follow"}
                    </Button>
                    }
                </div>
            </CardContent>
        </Card>
    )
};

export default EntityCard;
