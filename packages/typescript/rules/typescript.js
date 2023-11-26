module.exports = {
  extends: [
    "plugin:import/typescript",
  ],
  overrides: [
    {
      "files": ["*.js", "*.jsx"],
      "rules": {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-require-imports": "off",
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    /**
     * Enforces function overloads to be consecutive. Improves readability and
     * organization by grouping naturally related items together.
     *
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
     */
    "@typescript-eslint/adjacent-overload-signatures": [
      "error",
    ],
  
    /**
     * Requires using either ‘T[]’ or ‘Array' for arrays.
     *
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
     */
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array",
      }
    ],
  
    /**
     * This rule disallows awaiting a value that is not a "Thenable" (an object which has then method, such as a Promise).
     *
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
     */
    "@typescript-eslint/await-thenable": [
      "error",
    ],
  
    /**
     * Suppressing Typescript Compiler Errors can be hard to discover.
     *
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
     */
    "@typescript-eslint/ban-ts-comment": [
      "error",
    ],
  
    /**
     * This rule bans specific types and can suggest alternatives. It does not ban the corresponding runtime objects from being used.
     *
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
     */
    "@typescript-eslint/ban-types": [
      "off",
    ],
  
    /**
     * This rule extends the base eslint/brace-style rule. It supports all options and features of the base rule.
     *
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
     */
    "@typescript-eslint/brace-style": [
      "error",
      "1tbs",
    ],
  
    /**
     * This rule looks for any underscores (_) located within the source code. It ignores leading and trailing underscores and only checks those in the middle of a variable name
     *
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
     */
    "@typescript-eslint/naming-convention": [
      "error",
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
        "format": ["camelCase", "UPPER_CASE"]
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
        "prefix": ["T", "I"]
      }
    ],
  
    /**
     * Type assertions are also commonly referred as "type casting" in TypeScript (even though it is technically slightly different to what is understood by type casting in other languages), so you can think of type assertions and type casting referring to the same thing. It is essentially you saying to the TypeScript compiler, "in this case, I know better than you!".
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
     */
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
      }
    ],
  
    /**
     * There are two ways to define a type.
     *
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
     */
    "@typescript-eslint/consistent-type-definitions": [
      "error",
      "interface",
    ],
  
    /**
     * Explicit types for function return values makes it clear to any calling code what type is returned. This ensures that the return value is assigned to a variable of the correct type; or in the case where there is no return value, that the calling code doesn't try to use the undefined value when it shouldn't.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
     */
    "@typescript-eslint/explicit-function-return-type": [
      "off",
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
  
    /**
     * Leaving off accessibility modifier and making everything public can make your interface hard to use by others. If you make all internal pieces private or protected, your interface will be easier to use.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
     */
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        overrides: {
          accessors: "off",
          constructors: "off",
          methods: "explicit",
          properties: "explicit",
          parameterProperties: "off",
        }
      }
    ],
  
    /**
     * When calling a function, developers may insert optional whitespace between the function’s name and the parentheses that invoke it. This rule requires or disallows spaces between the function name and the opening parenthesis that calls it.
     * 
     * @extends eslint/func-call-spacing
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
     */
    "@typescript-eslint/func-call-spacing": [
      "error",
      "never",
    ],
  
    /**
     * There are several common guidelines which require specific indentation of nested blocks and statements.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
     */
    "@typescript-eslint/indent": [
      "off",
      2,
      {
        SwitchCase: 1,
        MemberExpression: 1,
      }
    ],
  
    /**
     * Enforces a consistent member delimiter style in interfaces and type literals.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
     */
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        }
      }
    ],
  
    /**
     * A consistent ordering of fields, methods and constructors can make interfaces, type literals, classes and class expressions easier to read, navigate and edit.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
     */
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          "private-static-field",
          "public-static-field",
          "private-instance-field",
          "public-instance-field",
          "private-constructor",
          "public-constructor",
          "private-instance-method",
          "protected-instance-method",
          "public-instance-method",
        ]
      }
    ],
  
    /**
     * Use of the Array constructor to construct a new array is generally discouraged in favor of array literal notation because of the single-argument pitfall and because the Array global may be redefined. Two exceptions are when the Array constructor is used to intentionally create sparse arrays of a specified size by giving the constructor a single numeric argument, or when using TypeScript type parameters to specify the type of the items of the array (new Array<Foo>()).
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
     */
    "@typescript-eslint/no-array-constructor": [
      "error",
    ],
  
    /**
     * Deleting dynamically computed keys can be dangerous and in some cases not well optimized.
     *
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
     */
    "@typescript-eslint/no-dynamic-delete": [
      "error",
    ],
  
    /**
     * Empty functions can reduce readability because readers need to guess whether it’s intentional or not. So writing a clear comment for empty functions is a good practice.
     * 
     * @extends eslint/no-empty-function
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
     */
    "@typescript-eslint/no-empty-function": [
      "error",
    ],
  
    /**
     * Using the any type defeats the purpose of using TypeScript. When any is used, all compiler type checks around that value are ignored.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
     */
    "@typescript-eslint/no-explicit-any": [
      "off",
    ],
  
    /**
     * Disallow extra non-null assertion.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
     */
    "@typescript-eslint/no-extra-non-null-assertion": [
      "error",
    ],
  
    /**
     * This rule restricts the use of parentheses to only where they are necessary.
     * 
     * @extends eslint/no-extra-parens
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
     */
    "@typescript-eslint/no-extra-parens": [
      "error",
      "all",
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: "all",
        enforceForArrowConditionals: false,
      },
    ],
  
    /**
     * This rule warns when a class is accidentally used as a namespace.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
     */
    "@typescript-eslint/no-extraneous-class": [
      "error",
    ],
  
    /**
     * This rule forbids usage of Promise-like values in statements without handling their errors appropriately. Unhandled promises can cause several issues, such as improperly sequenced operations, ignored Promise rejections and more. Valid ways of handling a Promise-valued statement include awaiting, returning, and either calling .then() with two arguments or .catch() with one argument.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
     */
    "@typescript-eslint/no-floating-promises": [
      "off",
    ],
  
    /**
     * A for-in loop (for (var k in o)) iterates over the properties of an Object. While it is legal to use for-in loops with array types, it is not common. for-in will iterate over the indices of the array as strings, omitting any "holes" in the array. More common is to use for-of, which iterates over the values of an array. 
     *
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
     */
    "@typescript-eslint/no-for-in-array": [
      "error",
    ],
  
    /**
     * Explicit types where they can be easily inferred may add unnecessary verbosity.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
     */
    "@typescript-eslint/no-inferrable-types": [
      "error",
    ],
  
    /**
     * 'Magic numbers' are numbers that occur multiple times in code without an explicit meaning. They should preferably be replaced by named constants.
     * 
     * @extends eslint/no-magic-numbers
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
     */
    "@typescript-eslint/no-magic-numbers": [
      "off",
      {
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreEnums: true,
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
        ignore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      }
    ],
  
    /**
     * Warns on apparent attempts to define constructors for interfaces or new for classes.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
     */
    "@typescript-eslint/no-misused-new": [
      "error",
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
  
    /**
     * Custom TypeScript modules (module foo {}) and namespaces (namespace foo {}) are considered outdated ways to organize TypeScript code. ES2015 module syntax is now preferred (import/export).
     * This rule still allows the use of TypeScript module declarations to describe external APIs (declare module 'foo' {}).
     *
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
     */
    "@typescript-eslint/no-namespace": [
      "error",
      {
        allowDeclarations: true,
        allowDefinitionFiles: true,
      }
    ],
  
    /**
     * Using non-null assertions cancels the benefits of the strict null-checking mode.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
     */
    "@typescript-eslint/no-non-null-assertion": [
      "off",
    ],

    /**
     * This rule extends the base eslint/no-redeclare rule. It adds support for TypeScript function overloads, and declaration merging.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
     */
    "@typescript-eslint/no-redeclare": [
      "error",
    ],
  
    /**
     * Prefer the newer ES6-style imports over require().
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
     */
    "@typescript-eslint/no-require-imports": [
      "error",
    ],

    /**
     * This rule extends the base eslint/no-shadow rule. It adds support for TypeScript's this parameters and global augmentation, and adds options for TypeScript features.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
     */
    "@typescript-eslint/no-shadow": [
      "error",
      {
        builtinGlobals: false,
        hoist: "functions",
      }
    ],
  
    /**
     * This rule prohibits assigning variables to this.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
     */
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
        allowedNames: ["self"], // Allow `const self = this`; `[]` by default
      },
    ],
  
    /**
     * This rule disallows the use of type aliases in favor of interfaces and simplified types (primitives, tuples, unions, intersections, etc).
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
     */
    "@typescript-eslint/no-type-alias": [
      "off",
    ],
  
    /**
     * Any expression being used as a condition must be able to evaluate as truthy or falsy in order to be considered "necessary".
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
     */
    "@typescript-eslint/no-unnecessary-condition": [
      "off",
      {
        allowConstantLoopConditions: true,
      }
    ],
  
    /**
     * This rule aims to let users know when a namespace or enum qualifier is unnecessary, whether used for a type or for a value.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
     */
    "@typescript-eslint/no-unnecessary-qualifier": [
      "error",
    ],
  
    /**
     * Warns if an explicitly specified type argument is the default for that type parameter.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
     */
    "@typescript-eslint/no-unnecessary-type-arguments": [
      "error",
    ],
  
    /**
     * This rule prohibits using a type assertion that does not change the type of an expression.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
     */
    "@typescript-eslint/no-unnecessary-type-assertion": [
      "error",
    ],
  
    /**
     * This rule aims to eliminate unused expressions which have no effect on the state of the program.
     * 
     * @extends eslint/no-unused-expressions
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
     */
    "@typescript-eslint/no-unused-expressions": [
      "error",
    ],
  
    /**
     * This rule aims to ensure that only typed public methods are declared in the code.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-untyped-public-signature.md
     */
    "@typescript-eslint/no-untyped-public-signature": [
      "off",
    ],
  
    /**
     * This rule is aimed at eliminating unused variables, functions, and parameters of functions.
     * 
     * @extends eslint/no-unused-vars
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
     */
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
        args: "after-used",
        ignoreRestSiblings: false,
      },
    ],
  
    /**
     * This rule will warn when it encounters a reference to an identifier that has not yet been declared.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
     */
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: true,
        classes: true,
      }
    ],
  
    /**
     * This rule flags class constructors that can be safely removed without changing how the class works.
     * 
     * @extends eslint/no-useless-constructor
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
     */
    "@typescript-eslint/no-useless-constructor": [
      "error",
    ],
  
    /**
     * Disallows the use of require statements except in import statements.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
     */
    "@typescript-eslint/no-var-requires": [
      "error",
    ],
  
    /**
     * This rule recommends a for-of loop when the loop index is only used to read from an array that is being iterated.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
     */
    "@typescript-eslint/prefer-for-of": [
      "off",
    ],
  
    /**
     * This rule suggests using a function type instead of an interface or object type literal with a single call signature.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
     */
    "@typescript-eslint/prefer-function-type": [
      "error",
    ],
  
    /**
     * This rule is aimed at suggesting includes method if indexOf method was used to check whether an object contains an arbitrary value or not.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
     */
    "@typescript-eslint/prefer-includes": [
      "error",
    ],
  
    /**
     * This rule aims to standardise the way modules are declared.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
     */
    "@typescript-eslint/prefer-namespace-keyword": [
      "error",
    ],
  
    /**
     * This rule aims enforce the usage of the safer operator.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
     */
    "@typescript-eslint/prefer-nullish-coalescing": [
      "error",
    ],
  
    /**
     * This rule aims enforce the usage of the safer operator.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
     */
    "@typescript-eslint/prefer-optional-chain": [
      "off",
    ],
  
    /**
     * This rule enforces that private members are marked as readonly if they're never modified outside of the constructor.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
     */
    "@typescript-eslint/prefer-readonly": [
      "error",
    ],
  
    /**
     * RegExp#exec is faster than String#match and both work the same when not using the /g flag.
     * This rule is aimed at enforcing the more performant way of applying regular expressions on strings.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
     */
    "@typescript-eslint/prefer-regexp-exec": [
      "error",
    ],
  
    /**
     * This rule is aimed at enforcing a consistent way to check whether a string starts or ends with a specific string.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
     */
    "@typescript-eslint/prefer-string-starts-ends-with": [
      "error",
    ],
  
    /**
     * Requires any function or method that returns a Promise to be marked async. 
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
     */
    "@typescript-eslint/promise-function-async": [
      "error",
      {
        "allowedPromiseNames": ["Thenable"],
        "checkArrowFunctions": false,
        "checkFunctionDeclarations": true,
        "checkFunctionExpressions": true,
        "checkMethodDeclarations": true
      }
    ],
  
    /**
     * This rule extends the base eslint/quotes rule. It supports all options and features of the base rule.
     * 
     * @extends eslint/quotes
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
     */
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
  
    /**
     * This rule prevents to invoke Array#sort() method without compare argument.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
     */
    "@typescript-eslint/require-array-sort-compare": [
      "off",
    ],
  
    /**
     * Asynchronous functions that don’t use await might not need to be asynchronous functions and could be the unintentional result of refactoring.
     * 
     * @extends eslint/require-await
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
     */
    "@typescript-eslint/require-await": [
      "off", // Should be turned on
    ],
  
    /**
     * When adding two variables, operands must both be of type number or of type string.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
     */
    "@typescript-eslint/restrict-plus-operands": [
      "error",
    ],
  
    /**
     * Enforce template literal expressions to be of string type.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
     */
    "@typescript-eslint/restrict-template-expressions": [
      "off",
    ],
  
    /**
     * Returning an awaited promise can make sense for better stack trace information as well as for consistent error handling (returned promises will not be caught in an async function try/catch).
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
     */
    "@typescript-eslint/return-await": [
      "error",
      "in-try-catch",
    ],
  
    /**
     * This rule enforces consistent use of semicolons after statements.
     * 
     * @extends eslint/semi
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
     */
    "@typescript-eslint/semi": [
      "error",
      "always",
    ],
  
    /**
     * This rule extends the base eslint/func-call-spacing rule. It supports all options and features of the base rule. This version adds support for generic type parameters on function calls.
     * 
     * @extends eslint/space-before-function-paren
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
     */
    "@typescript-eslint/space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
  
    /**
     * Requires that any boolean expression is limited to true booleans rather than casting another primitive to a boolean at runtime.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
     */
    "@typescript-eslint/strict-boolean-expressions": [
      "off",
    ],
  
    /**
     * Use of triple-slash reference type directives is discouraged in favor of the newer import style. This rule allows you to ban use of /// <reference path="" />, /// <reference types="" />, or /// <reference lib="" /> directives.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
     */
    "@typescript-eslint/triple-slash-reference": [
      "error",
    ],
  
    /**
     * This rule aims to enforce specific spacing patterns around type annotations and function types in type literals.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
     */
    "@typescript-eslint/type-annotation-spacing": [
      "error",
    ],
  
    /**
     * This rule can enforce type annotations in locations regardless of whether they're required. This is typically used to maintain consistency for element types that sometimes require them.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
     */
    "@typescript-eslint/typedef": [
      "off",
      {
        arrayDestructuring: false,
        arrowParameter: true,
        memberVariableDeclaration: true,
        objectDestructuring: false,
        parameter: true,
        propertyDeclaration: true,
        variableDeclaration: false,
      }
    ],
  
    /**
     * Warns when a method is used outside of a method call.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
     */
    "@typescript-eslint/unbound-method": [
      "off",
    ],
  
    /**
     * This rule aims to keep the source code as maintanable as posible by reducing the amount of overloads.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
     */
    "@typescript-eslint/unified-signatures": [
      "error",
    ],

    /**
     * This rule aims to ensure that the values returned from a module are of the expected type.
     * 
     * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
     */
    "@typescript-eslint/explicit-module-boundary-types": [
      "off"
    ]
  },
  settings: {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx",
      ]
    }
  },
};
