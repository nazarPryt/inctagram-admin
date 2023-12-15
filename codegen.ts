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
        baseTypesPath: 'shared/lib/ApolloClient/Schema.types.ts',
        extension: '.types.tsx',
      },
    },
    'src/shared/lib/ApolloClient/Schema.types.ts': { plugins: ['typescript'] },
  },
  ignoreNoDocuments: true,
  schema: 'https://instareplica.fun/api/v1/graphql',
}

export default config
