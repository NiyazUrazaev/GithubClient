import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks'


const cache = new InMemoryCache();

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN = "5d3c47fd5dcc81792eac0ec1fb481604b0dc183d"
    }`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache,
});


ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root"),
);

serviceWorker.unregister();