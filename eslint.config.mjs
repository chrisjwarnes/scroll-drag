import globals from "globals"
import pluginJs from "@eslint/js"
import jsdoc from 'eslint-plugin-jsdoc'

export default [
  {
    //files: ['/**/*.js'],
    languageOptions: {
      globals: globals.browser
    },
    plugins: {
      jsdoc,
    },
    rules: {
      semi: ['error', 'never'],
      'no-var': 'error',
      'prefer-const': 'error',
      "jsdoc/require-jsdoc": ["error", {
        "contexts": [
          "TSInterfaceDeclaration",
          "TSMethodSignature",
          "TSPropertySignature"
        ],
        "publicOnly":
        {
          "ancestorsOnly": true
        }, "require":
        {
          "ClassDeclaration": true,
          "ClassExpression": true,
          "MethodDefinition": true
        }
      }]
    }
  },
  pluginJs.configs.recommended,
  jsdoc.configs['flat/recommended-error'],
]