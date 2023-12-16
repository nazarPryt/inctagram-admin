import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: true,
  name: 'Inctagram-Admin',
  uri: process.env.NEXT_PUBLIC_API_URL,
  version: '0.1',
})
