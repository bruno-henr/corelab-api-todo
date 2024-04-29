import config from "eslint-config-airbnb-typescript";


export default [
  ...[].concat(config),
  {
    extends: ['airbnb-typescript'],
    parserOptions: {
      project: './tsconfig.json'
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  }
];