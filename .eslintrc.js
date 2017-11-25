module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    'jest/globals': true
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  globals: {
    Promise: true,
    Vue: true
  },
  plugins: [
    'html',
    'jest'
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module"
  },
  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }]
  },
}
