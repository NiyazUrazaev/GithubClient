import gql from "graphql-tag";

const UNFOLLOW_USER = gql`
    mutation unfollowUser($userId: ID!) {
        unfollowUser(input: {userId: $userId}) {
            clientMutationId,
            user {
                viewerIsFollowing
            }
        }
    }
`

export default UNFOLLOW_USER;
