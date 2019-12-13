import gql from "graphql-tag";

const REMOVE_STAR = gql`
    mutation addStar($id: ID!){
        removeStar(input: {starrableId : $id}) {
            starrable {
                id
            }
        }
    }
`;

export default REMOVE_STAR;
