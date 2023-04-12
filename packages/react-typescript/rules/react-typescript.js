module.exports = {
  rules: {
    /**
     * This rule looks for any underscores (_) located within the source code. It ignores leading and trailing underscores and only checks those in the middle of a variable name
     *
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
     */
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": ["camelCase"]
      },
      {
        "selector": "function", // class, interface, typeAlias, enum, typeParameter
        "format": ["camelCase", "PascalCase"]
      },
      {
        "selector": "typeLike", // class, interface, typeAlias, enum, typeParameter
        "format": ["PascalCase"]
      },
      {
        "selector": ["variableLike"],
        "format": ["camelCase"]
      },
      {
        "selector": "variable",
        "modifiers": ["const"],
        "format": ["PascalCase", "camelCase", "UPPER_CASE"]
      },
      {
        "selector": "parameter",
        "format": ["camelCase"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "memberLike",
        "modifiers": ["private"],
        "format": ["camelCase"],
        "leadingUnderscore": "require"
      },
      {
        "selector": "memberLike",
        "modifiers": ["protected"],
        "format": ["camelCase"],
        "leadingUnderscore": "require"
      },
      {
        "selector": "property",
        "format": ["PascalCase", "camelCase"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "variable",
        "types": ["boolean"],
        "format": ["PascalCase"],
        "prefix": ["is", "should", "has", "can", "did", "will"]
      },
      {
        "selector": "typeParameter",
        "format": ["PascalCase"],
        "prefix": ["T", "I"]
      },
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "prefix": ["I"]
      }
    ],

    /**
     * This rule forbids using promises in places where the Typescript compiler allows them but they are not handled properly. These situations can often arise due to a missing await keyword or just a misunderstanding of the way async functions are handled/awaited.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
     */
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksConditionals: true,
        checksVoidReturn: false,
      }
    ],
  }
};
