import gql from "graphql-tag";

const ADD_STAR = gql`
    mutation addStar($id: ID!){
        addStar(input: {starrableId : $id}) {
            starrable {
                id
            }
        }
    }
`;

export default ADD_STAR;
