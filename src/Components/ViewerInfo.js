import React from "react";
import GET_VIEWER_INFO from "../Queries/queries/viewer";
import {Query} from "@apollo/react-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProfilePage from "./ProfilePage";

const ViewerInfo = () => (
    <Query query={GET_VIEWER_INFO}>
        {({data: viewer, loading}) => {
            if (loading || !viewer) {
                return <CircularProgress />;
            }
            return (
                <ProfilePage data={viewer} entity={"viewer"}/>
            )
        }}
    </Query>
);

export default ViewerInfo;
