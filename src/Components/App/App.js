import React from "react";
import "./App.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';


const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  {
    organization(login: "the-road-to-learn-react") {
      repositories(first: 20) {
        edges {
          node {
            id
            name
            url
            viewerHasStarred
          }
        }
      }
    }
  }
`;

const STAR_REPOSITORY = gql`
  mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

function Repositories(props) {
  var state = {
    selectedRepositoryIds: [],
  };

  var toggleSelectRepository = (id, isSelected) => {
    let { selectedRepositoryIds } = state;

    selectedRepositoryIds = isSelected
      ? selectedRepositoryIds.filter(itemId => itemId !== id)
      : selectedRepositoryIds.concat(id);

    this.setState({ selectedRepositoryIds });

    return <RepositoryList
      repositories={props.repositories}
      selectedRepositoryIds={this.state.selectedRepositoryIds}
      toggleSelectRepository={this.toggleSelectRepository}
    />
  };
}
const App = ({counter, name, increment, decrement, reset, myProfile, myRepos, exit}) => {

  return (
    <div>
      <div>
        <AppBar position="static">
          <Toolbar className="header">
            <Typography variant="h6">
              Github Client
            </Typography>
            <div>
              <Button color="inherit" onClick={() => myProfile()}>
                My profile
              </Button>
              <Button color="inherit" onClick={() => myRepos()}>
                My repositories
              </Button>
              <Button color="inherit" onClick={() => exit()()}>
                Exit
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div>{name}</div>
      <div>{counter}</div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => reset()}>reset</button>
      <div>
        <Repositories/>
      </div>
    </div>)
};

const RepositoryList = ({repositories,
                          selectedRepositoryIds,
                          toggleSelectRepository,
                        }) => (
  <ul>
    {repositories.edges.map(({ node }) => {
      const isSelected = selectedRepositoryIds.includes(node.id);

      const rowClassName = ['row'];

      if (isSelected) {
        rowClassName.push('row_selected');
      }

      return (
        <li className={rowClassName.join(' ')} key={node.id}>
          <Select
            id={node.id}
            isSelected={isSelected}
            toggleSelectRepository={toggleSelectRepository}
          />{' '}
          <a href={node.url}>{node.name}</a>{' '}
          {!node.viewerHasStarred && <Star id={node.id} />}
        </li>
      );
    })}
  </ul>
);

const Star = ({ id }) => (
  <Mutation mutation={STAR_REPOSITORY} variables={{ id }}>
    {starRepository => (
      <button type="button" onClick={starRepository}>
        Star
      </button>
    )}
  </Mutation>
);

const Select = ({ id, isSelected, toggleSelectRepository }) => (
  <button
    type="button"
    onClick={() => toggleSelectRepository(id, isSelected)}
  >
    {isSelected ? 'Unselect' : 'Select'}
  </button>
);

export default App;
