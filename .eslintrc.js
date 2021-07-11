module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "airbnb-typescript/base",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": 12,
      "sourceType": "module",
      "project": [ "./tsconfig.json" ]
  },
  "plugins": [
      "@typescript-eslint"
  ],
  "rules": {
      "linebreak-style": ["error", "windows"],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "no-plusplus": "off",
      "class-methods-use-this": ["error", { "exceptMethods": ["clickOnBurger", "hideMenu", "generateRandomCar"] }]
  },
};