import { createRequire } from 'module';
import { register } from 'ts-node';

const require = createRequire(import.meta.url);
const { resolve } = require('path');
const { register: tsNodeRegister } = register({
  project: resolve(process.cwd(), 'tsconfig.json'),
  compilerOptions: {
    module: 'ESNext'
  }
});

export { tsNodeRegister as register };