import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  documents: ['./src/**/*.ts'],
  generates: {
    'src/': {
      config: {
        withHooks: true,
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'ApolloClient.types.ts',
        extension: '.generated.tsx',
      },
    },
    'src/shared/lib/ApolloClient/ApolloClient.types.ts': { plugins: ['typescript'] },
  },
  ignoreNoDocuments: true,
  schema: 'https://instareplica.fun/api/v1/graphql',
}

export default config
