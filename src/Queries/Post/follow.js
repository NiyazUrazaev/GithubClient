import gql from "graphql-tag";

const FOLLOW_USER = gql`
    mutation ($userId: ID!) {
        followUser(input: {userId: $userId}) {
            clientMutationId,
            user {
                viewerIsFollowing
            }
        }
    }
`;

export default FOLLOW_USER
