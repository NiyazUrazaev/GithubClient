import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import {useMutation} from "@apollo/react-hooks";

import styles from "../Css/profilePage.js";
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import FOLLOW_USER from "../Queries/Post/follow";
import GET_USER_INFO from "../Queries/Get/user";
import UNFOLLOW_USER from "../Queries/Post/unfollow";
import Button from "@material-ui/core/Button";
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
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={info.avatarUrl} alt="..." className={imageClasses} />
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
              <div className={classes.description}>
                <p>{info.description}</p>
                <p>{info.company}</p>
                <p>{info.location}</p>
                <br/>
                <p>{info.bio}</p>
                <br/>
                <p>{info.email}</p>
              </div>
              </>}
            <div className={classes.botButton}>
              <Button className={classes.moreButton} variant="contained" color="primary"
                      onClick={() => (switchExtended(!extended))}>
                {extended ? "Less" : "More"}
              </Button>
              {!info.isViewer &&
              <Button variant="contained" color="primary"
                      onClick={() => (info.viewerIsFollowing ?
                        unfollow({variables: {userId: info.id}})
                        :
                        follow({variables: {userId: info.id}}))}>
                {info.viewerIsFollowing ? "Unfollow" : "Follow"}
              </Button>
              }
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