module.exports = {
  rules: {
    "no-extra-parens": [
      "off", // Handled by @typescript-eslint/no-extra-parens
    ],

    "no-redeclare": [
      "off", // Handled by @typescript-eslint/no-redeclare
    ],

    "no-shadow": [
      "off", // Handled by @typescript-eslint/no-shadow
    ],
  
    "no-unused-vars": [
      "off" // Going to be handled by @typescript-eslint/no-unused-vars
    ],

    "no-use-before-define": [
      "off", // Override by @typescript-eslint/no-use-before-define
    ],
  
    "no-useless-constructor": [
      "off", // Override by @typescript-eslint/no-useless-constructor
    ],
  
    "quotes": [
      "off", // Overriden by @typescript-eslint/quotes
    ],
  
    "require-await": [
      "off", // Handled by @typescript-eslint/require-await
    ],
  
    "semi": [
      "off", // Handled by @typescript-eslint/semi
    ],
  
    "space-before-function-paren": [
      "off", // Handled by @typescript-eslint/space-before-function-paren
    ],
  }
};
