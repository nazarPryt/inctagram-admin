import { appSettings } from '@/_app/AppSettings'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const BASE_API = appSettings.API_URL

const httpLink = createHttpLink({
  uri: BASE_API,
})

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem(appSettings.authToken)

  return {
    headers: {
      ...headers,
      authorization: token ? `Basic ${token}` : '',
    },
  }
})
const cache = new InMemoryCache()

export const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  link: authLink.concat(httpLink),
})
