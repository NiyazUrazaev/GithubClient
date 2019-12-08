import React from "react";
import ViewerInfo from "./ViewerInfo";
import ViewerRepositories from "./ViewerRepositories";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  panel: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  userInfo: {
    marginRight: "50px"
  }
}));

const MyProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.panel}>
      <ViewerInfo className={classes.userInfo}/>
      <ViewerRepositories/>
    </div>
  )
};

export default MyProfile;
