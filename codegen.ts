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
        baseTypesPath: 'types.ts',
        extension: '.generated.tsx',
      },
    },
    'src/types.ts': { plugins: ['typescript'] },
  },
  ignoreNoDocuments: true,
  schema: process.env.NEXT_PUBLIC_API_URL,
}

export default config
