module.exports = {
  plugins: [
    "jsdoc"
  ],
  rules: {
    /**
     * Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
     *
     * @NOTE : We must turn this rule off because right now it's not working
     * with Eslint 8. Check https://github.com/gajus/eslint-plugin-jsdoc/issues/829.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc*check-examples
     */
    "jsdoc/check-examples": [
      "off",
    ],
  
    /**
     * Reports invalid block tag names.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc*check-tag-names
     */
    "jsdoc/check-tag-names": [
      "error",
    ],
  
    /**
     * Reports invalid types.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc*check-types
     */
    "jsdoc/check-types": [
      "off",
    ],
  
    /**
     * Enforces a consistent padding of the block description.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc*newline-after-description
     */
    "jsdoc/newline-after-description": [
      "error",
    ],
  
    /**
     * Checks that types in jsdoc comments are defined. This can be used to check
     * un-imported types.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc*no-undefined-types
     */
    "jsdoc/no-undefined-types": [
      "error",
    ],
  
    /**
     * Requires that all functions have a description.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc*require-description
     */
    "jsdoc/require-description": [
      "off",
    ],
  
    /**
     * Requires that block description and tag description are written in complete
     * sentences, i.e.,
     *   - Description must start with an uppercase alphabetical character.
     *   - Paragraphs must start with an uppercase alphabetical character.
     *   - Sentences must end with a period.
     *   - Every line in a paragraph (except the first) which starts with an
     *   uppercase character must be preceded by a line ending with a period.
     *
     *   https://github.com/gajus/eslint-plugin-jsdoc*require-description-complete-sentence
     */
    "jsdoc/require-description-complete-sentence": [
      "off",
    ],
  
    /**
     * Requires that all functions have examples.
     *   - All functions must have one or more @example tags.
     *   - Every example tag must have a non-empty description that explains the
     *   method's usage.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc*require-example
     */
    "jsdoc/require-example": [
      "off",
    ],
  
    /**
     * Requires a hyphen before the @param description.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc*require-hyphen-before-param-description
     */
    "jsdoc/require-hyphen-before-param-description": [
      "error",
    ],
  
    /**
     * Requires that all function parameters are documented.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc*require-param
     */
    "jsdoc/require-param": [
      "error",
    ],
  
    /**
     * Requires that @param tag has description value.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc*require-param-description
     */
    "jsdoc/require-param-description": [
      "error",
    ],
  
    /**
     * Requires that all function parameters have name.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc*require-param-names
     */
    "jsdoc/require-param-name": [
      "error",
    ],
  
    /**
     * Requires that @param tag has type value.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc*require-param-type
     */
    "jsdoc/require-param-type": [
      "off",
    ],
  
    /**
     * Requires that @returns tag has description value.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc*require-returns-description
     */
    "jsdoc/require-returns-description": [
      "off",
    ],
  
    /**
     * Requires that @returns tag has type value.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc*require-returns-type
     */
    "jsdoc/require-returns-type": [
      "error",
    ],
  
    /**
     * Requires all types to be valid JSDoc or Closure compiler types without
     * syntax errors.
     *
     * https://github.com/gajus/eslint-plugin-jsdoc*valid-types
     */
    "jsdoc/valid-types": [
      "error",
    ],
  }
};
