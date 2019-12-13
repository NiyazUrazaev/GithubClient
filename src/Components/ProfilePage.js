import React, {useState} from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import {useMutation} from "@apollo/react-hooks";
import styles from "../GlobalCss/profilePage.js";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import FOLLOW_USER from "../Queries/mutation/follow";
import GET_USER_INFO from "../Queries/query/user";
import UNFOLLOW_USER from "../Queries/mutation/unfollow";
import {Button, Typography} from "@material-ui/core";
import ViewerRepositories from "./ViewerRepositories";

const useStyles = makeStyles(styles);

export default function ProfilePage({data, entity}) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const info = data[entity];
  const [extended, switchExtended] = useState(false);
  const [follow] = useMutation(FOLLOW_USER,
    {
      refetchQueries: [{query: GET_USER_INFO, variables: {login: info.login}}]
    });
  const [unfollow] = useMutation(UNFOLLOW_USER,
    {
      refetchQueries: [{query: GET_USER_INFO, variables: {login: info.login}}]
    });
  return (
    <div className={classes.page}>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={info.avatarUrl} alt="Avatar" className={imageClasses}/>
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{info.name}</h3>
                    <a href={info.url}>
                      <h4>{info.login}</h4>
                    </a>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
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
            </>
            }
            <div className={classes.botButton}>
              <div className={classes.buttons}>
                <Button className={classes.moreButton} variant="contained" color="primary"
                        onClick={() => (switchExtended(!extended))}>
                  {extended ? "Less" : "More"}
                </Button>
                {!info.isViewer &&
                <Button variant="contained" className={classes.moreButton} color="primary"
                        onClick={() => (info.viewerIsFollowing ?
                          unfollow({variables: {userId: info.id}})
                          :
                          follow({variables: {userId: info.id}}))}>
                  {info.viewerIsFollowing ? "Unfollow" : "Follow"}
                </Button>
                }
              </div>
              {info.isViewer &&
              <ViewerRepositories/>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
