import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  unocss: true,
  ignores: [
    'public',
    'dist*',
  ],
  rules: {
    'no-console': 'off',
    'node/prefer-global/process': 'off',
    'react-refresh/only-export-components': 'off',
  },
})
