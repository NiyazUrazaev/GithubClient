import React from "react";
import GET_VIEWER_INFO from "../Queries/Get/viewer";
import {Query} from "@apollo/react-components";
import EntityCard from "./EntityCard";
import CircularProgress from "@material-ui/core/CircularProgress";

const ViewerInfo = () => (
    <Query query={GET_VIEWER_INFO}>
        {({data: viewer, loading}) => {
            if (loading || !viewer) {
                return <CircularProgress />;
            }
            return (
                <EntityCard data={viewer} entity={"viewer"}/>
            )
        }}
    </Query>
);

export default ViewerInfo;
