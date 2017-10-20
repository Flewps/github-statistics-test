import { ApolloClient, createNetworkInterface } from 'react-apollo'
import { githubToken } from './credentials'

export const networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql',
})

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    req.options.headers.authorization = githubToken ? `Bearer ${githubToken}` : null;
    next();
  }
}])

export const client = new ApolloClient({
  networkInterface
});