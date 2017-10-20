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
    const token = githubToken // localStorage.getItem('token');
    req.options.headers.authorization = token ? `Bearer ${token}` : null;
    next();
  }
}])

export const client = new ApolloClient({
  networkInterface
});