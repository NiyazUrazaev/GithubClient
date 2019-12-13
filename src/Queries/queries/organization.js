import gql from "graphql-tag";

const GET_ORGANIZATION_INFO = gql`
    query organization($login: String!)
    {
        organization(login: $login) {
            id
            name
            location
            login
            avatarUrl
            url,
            description
        }
    }

`;

export default GET_ORGANIZATION_INFO;
