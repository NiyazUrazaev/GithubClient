import gql from "graphql-tag";

const GET_VIEWER_INFO = gql`
    {
        viewer {
            name,
            isViewer,
            login,
            avatarUrl,
            url,
            bio,
            email,
            repositories (first: 6) {
                edges {
                    node {
                        id,
                        name,
                        isPrivate,
                        description,
                        pushedAt,
                        createdAt
                    }
                }
            }
        }
    }
`;

export default GET_VIEWER_INFO;
