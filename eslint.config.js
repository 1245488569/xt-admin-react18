import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  unocss: true,
  ignores: [
    'public',
    'dist*',
  ],
})
