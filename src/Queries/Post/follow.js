import gql from "graphql-tag";

const FOLLOW_USER = gql`
    mutation ($userId: ID!) {
        followUser(input: {userId: $userId}) {
            clientMutationId
        }
    }
`

export default FOLLOW_USER
