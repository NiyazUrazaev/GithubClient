import gql from "graphql-tag";

const REPOS_QUERY = gql`
    query repos($title: String!) {
        search(query: $title, type: REPOSITORY, first: 15) {
            nodes {
                ... on Repository {
                    id,
                    name,
                    url,
                    viewerHasStarred,
                    
                    owner {
                        login
                        avatarUrl
                    }
                    primaryLanguage {
                        name
                    }
                }
            }
        }
    }
`;

export default REPOS_QUERY;
