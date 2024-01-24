import { URL, fileURLToPath } from 'node:url'

const alias = {
  '@': fileURLToPath(new URL('../src', import.meta.url)),
}

export default alias
