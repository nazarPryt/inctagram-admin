import { authToken } from '@/shared/constants'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const BASE_API = process.env.NEXT_PUBLIC_API_URL

const httpLink = createHttpLink({
  uri: BASE_API,
})

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem(authToken)

  return {
    headers: {
      ...headers,
      authorization: token ? `Basic ${token}` : '',
    },
  }
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: authLink.concat(httpLink),
})
