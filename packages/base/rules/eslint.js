module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    /**
     * This rule warns if setters are defined without getters.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/accessor-pairs.md
     */
    "accessor-pairs": [
      "error"
    ],
  
    /**
     * This rule enforces line breaks after opening and before closing array brackets.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/array-bracket-newline.md
     */
    "array-bracket-newline": [
      "error",
      "consistent"
    ],
  
    /**
     * This rule enforces consistent spacing inside array brackets.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/array-bracket-spacing.md
     */
    "array-bracket-spacing": [
      "error",
      "never"
    ],
  
    /**
     * Array has several methods for filtering, mapping, and folding. If we forget
     * to write return statement in a callback of those, it's probably a mistake.
     * If you don't want to use a return or don't need the returned results,
     * consider using .forEach instead.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/array-callback-return.md
     */
    "array-callback-return": [
      "error"
    ],
  
    /**
     * This rule enforces line breaks between array elements.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/array-element-newline.md
     */
    "array-element-newline": [
      "error",
      "consistent"
    ],
  
    /**
     * This rule can enforce or disallow the use of braces around arrow function body.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/arrow-body-style.md
     */
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        "requireReturnForObjectLiteral": false
      }
    ],
  
    /**
     * Arrow functions can omit parentheses when they have exactly one parameter.
     * In all other cases the parameter(s) must be wrapped in parentheses.
     * This rule enforces the consistent use of parentheses in arrow functions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/arrow-parens.md
     */
    "arrow-parens": [
      "error",
      "always"
    ],
  
    /**
     * This rule normalize style of spacing before/after an arrow function's arrow(=>).
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/arrow-spacing.md
     */
    "arrow-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
  
    /**
     * The block-scoped-var rule generates warnings when variables are used outside
     * of the block in which they were defined. This emulates C-style block scope.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/block-scoped-var.md
     */
    "block-scoped-var": [
      "error",
    ],
  
    /**
     * This rule enforces consistent spacing inside an open block token and the
     * next token on the same line. This rule also enforces consistent spacing
     * inside a close block token and previous token on the same line.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/block-spacing.md
     */
    "block-spacing": [
      "error",
      "always",
    ],
  
    /**
     * Brace style is closely related to indent style in programming and describes
     * the placement of braces relative to their control statement and body.
     * There are probably a dozen, if not more, brace styles in the world.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/brace-style.md
     */
    "brace-style": [
      "off",
      "1tbs"
    ],
  
    /**
     * This rule is aimed at ensuring that callbacks used outside of the main
     * function block are always part-of or immediately preceding a return statement.
     * This rule decides what is a callback based on the name of the function
     * being called.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/callback-return.md
     */
    "callback-return": [
      "error",
    ],
  
    /**
     * This rule looks for any underscores (_) located within the source code.
     * It ignores leading and trailing underscores and only checks those in the
     * middle of a variable name. If ESLint decides that the variable is a
     * constant (all uppercase), then no warning will be thrown. Otherwise, a
     * warning will be thrown. This rule only flags definitions and assignments
     * but not function calls. In case of ES6 import statements, this rule only
     * targets the name of the variable that will be imported into the local
     * module scope.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/camelcase.md
     */
    "camelcase": [
      "off",
      {
        properties: "always",
        ignoreDestructuring: false,
      },
    ],
  
    /**
     * This rule aims to enforce a consistent style of comments across your
     * codebase, specifically by either requiring or disallowing a capitalized
     * letter as the first word character in a comment. This rule will not issue
     * warnings when non-cased letters are used.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/capitalized-comments.md
     */
    "capitalized-comments": [
      "error",
      "always",
      {
        ignoreConsecutiveComments: true,
        ignoreInlineComments: true,
      },
    ],
  
    /**
     * This rule is aimed to flag class methods that do not use this.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/class-methods-use-this.md
     */
    "class-methods-use-this": [
      "off",
    ],
  
    /**
     * This rule enforces consistent use of trailing commas in object and array
     * literals.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/comma-dangle.md
     */
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
  
    /**
     * This rule enforces consistent spacing before and after commas in variable
     * declarations, array literals, object literals, function parameters, and
     * sequences.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/comma-spacing.md
     */
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
  
    /**
     * This rule enforce consistent comma style in array literals, object literals,
     * and variable declarations.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/comma-style.md
     */
    "comma-style": [
      "error",
      "last",
    ],
  
    /**
     * This rule is aimed at reducing code complexity by capping the amount of
     * cyclomatic complexity allowed in a program. As such, it will warn when
     * the cyclomatic complexity crosses the configured threshold (default is 20)
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/complexity.md
     */
    "complexity": [
      "error",
      {
        max: 20,
      },
    ],
  
    /**
     * This rule enforces consistent spacing inside computed property brackets.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/computed-property-spacing.md
     */
    "computed-property-spacing": [
      "error",
      "never",
    ],
  
    /**
     * This rule requires return statements to either always or never specify
     * values.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/consistent-return.md
     */
    "consistent-return": [
      "error"
    ],
  
    /**
     * This rule enforces two things about variables with the designated alias
     * names for this.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/consistent-this.md
     */
    "consistent-this": [
      "error",
      "self",
    ],
  
    /**
     * This rule is aimed to flag invalid/missing super() calls.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/constructor-super.md
     */
    "constructor-super": [
      "error",
    ],
  
    /**
     * This rule is aimed at preventing bugs and increasing code clarity by ensuring
     * that block statements are wrapped in curly braces. It will warn when it
     * encounters blocks that omit curly braces.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/curly.md
     */
    "curly": [
      "error",
      "all",
    ],
  
    /**
     * This rule aims to require default case in switch statements. You may
     * optionally include a // no default after the last case if there is no
     * default case. The comment may be in any desired case, such as // No
     * Default.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/default-case.md
     */
    "default-case": [
      "error",
    ],
  
    /**
     * This rule aims to enforce newline consistency in member expressions.
     * This rule prevents the use of mixed newlines around the dot in a member
     * expression.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/dot-location.md
     */
    "dot-location": [
      "error",
      "property",
    ],
  
    /**
     * This rule is aimed at maintaining code consistency and improving code
     * readability by encouraging use of the dot notation style whenever possible.
     * As such, it will warn when it encounters an unnecessary use of square-bracket
     * notation.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/dot-notation.md
     */
    "dot-notation": [
      "error",
      {
        allowKeywords: true,
      },
    ],
  
    /**
     * This rule enforces at least one newline (or absence thereof) at the end of
     * non-empty files.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/eol-last.md
     */
    "eol-last": [
      "error",
      "always",
    ],
  
    /**
     * This rule is aimed at eliminating the type-unsafe equality operators.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/eqeqeq.md
     */
    "eqeqeq": [
      "error",
      "always",
    ],
  
    /**
     * A for loop with a stop condition that can never be reached, such as one
     * with a counter that moves in the wrong direction, will run infinitely.
     * While there are occasions when an infinite loop is intended, the convention
     * is to construct such loops as while loops. More typically, an infinite for
     * loop is a bug.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/for-direction.md
     */
    "for-direction": [
      "error",
    ],
  
    /**
     * This rule requires or disallows spaces between the function name and the
     * opening parenthesis that calls it.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/func-call-spacing.md
     */
    "func-call-spacing": [
      "off",
      "never",
    ],
  
    /**
     * This rule requires function names to match the name of the variable or
     * property to which they are assigned.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/func-name-matching.md
     */
    "func-name-matching": [
      "error",
    ],
  
    /**
     * This rule can enforce or disallow the use of named function expressions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/func-names.md
     */
    "func-names": [
      "error",
      "as-needed",
    ],
  
    /**
     * This rule enforces a particular type of function style throughout a
     * JavaScript file, either declarations or expressions. You can specify which
     * you prefer in the configuration.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/func-style.md
     */
    "func-style": [
      "error",
      "declaration",
      {
        allowArrowFunctions: true,
      },
    ],
  
    /**
     * This rule enforces consistent line breaks inside parentheses of function parameters or arguments.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/function-paren-newline.md
     */
    "function-paren-newline": [
      "error",
      "consistent",
    ],
  
    /**
     * This rule aims to enforce spacing around the * of generator functions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/generator-star-spacing.md
     */
    "generator-star-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
  
    /**
     * This rule enforces that a return statement is present in property getters.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/getter-return.md
     */
    "getter-return": [
      "off",
    ],
  
    /**
     * This rule requires all calls to require() to be at the top level of the
     * module, similar to ES6 import and export statements, which also can occur
     * only at the top level.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/global-require.md
     */
    "global-require": [
      "error",
    ],
  
    /**
     * This rule is aimed at preventing unexpected behavior that could arise from
     * using a for in loop without filtering the results in the loop. As such, it
     * will warn when for in loops do not filter their results with an if statement.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/guard-for-in.md
     */
    "guard-for-in": [
      "error",
    ],
  
    /**
     * This rule expects that when you're using the callback pattern in Node.js
     * you'll handle the error.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/handle-callback-err.md
     */
    "handle-callback-err": [
      "error",
    ],
  
    /**
     * This rule disallows specified identifiers in assignments and function definitions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/id-blacklist.md
     */
    "id-blacklist": [
      "error",
      "err",
      "cb",
    ],
  
    /**
     * This rule enforces a minimum and/or maximum identifier length convention.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/id-length.md
     */
    "id-length": [
      "error",
      {
        min: 2,
        properties: "always",
        exceptions: ["_", "i", "j", "k", "t", "x", "y"],
      },
    ],
  
    /**
     * This rule requires identifiers in assignments and function definitions to
     * match a specified regular expression.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/id-match.md
     */
    "id-match": [
      "off",
    ],
  
    /**
     * This rule aims to enforce a consistent location for an arrow function
     * containing an implicit return.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/implicit-arrow-linebreak.md
     */
    "implicit-arrow-linebreak": [
      "off",
    ],
  
    /**
     * This rule enforces a consistent indentation style.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/indent-legacy.md
     */
    "indent": [
      "off",
      2,
      {
        SwitchCase: 1,
        MemberExpression: 1,
      }
    ],
  
    /**
     * This rule is aimed at enforcing or eliminating variable initializations
     * during declaration.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/init-declarations.md
     */
    "init-declarations": [
      "off",
    ],
  
    /**
     * This rule enforces the consistent use of either double or single quotes in
     * JSX attributes.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/jsx-quotes.md
     */
    "jsx-quotes": [
      "error",
      "prefer-double",
    ],
  
    /**
     * This rule enforces consistent spacing between keys and values in object
     * literal properties. In the case of long lines, it is acceptable to add a
     * new line wherever whitespace is allowed.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/key-spacing.md
     */
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict",
      },
    ],
  
    /**
     * This rule enforces consistent spacing around keywords and keyword-like tokens
     * (as, async, etc.).
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/keyword-spacing.md
     */
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
  
    /**
     * This rule enforces consistent position of line comments.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/line-comment-position.md
     */
    "line-comment-position": [
      "error",
      "above",
    ],
  
    /**
     * This rule enforces consistent line endings independent of operating system,
     * VCS, or editor used across your codebase.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/linebreak-style.md
     */
    "linebreak-style": [
      "error",
      "unix",
    ],
  
    /**
     * This rule requires empty lines before and/or after comments.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/lines-around-comment.md
     */
    "lines-around-comment": [
      "error",
      {
        afterLineComment: false,
        beforeLineComment: true,
        beforeBlockComment: true,
        afterBlockComment: false,
        allowClassStart: true,
        allowClassEnd: false,
        allowBlockStart: true,
        allowBlockEnd: false,
        allowObjectStart: true,
        allowObjectEnd: false,
        allowArrayStart: true,
        allowArrayEnd: false,
      }
    ],
  
    /**
     * This rule improves readability by enforcing lines between class members.
     * It will not check empty lines before the first member and after the last
     * member, since that is already taken care of by padded-blocks.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/lines-between-class-members.md
     */
    "lines-between-class-members": [
      "error",
      "always",
    ],
  
    /**
     * Files containing multiple classes can often result in a less navigable and
     * poorly structured codebase. Best practice is to keep each file limited to
     * a single responsibility.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/max-classes-per-file.md
     */
    "max-classes-per-file": [
      "error",
      2,
    ],
  
    /**
     * This rule enforces a maximum depth that blocks can be nested to reduce
     * code complexity.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/max-depth.md
     */
    "max-depth": [
      "error",
      4,
    ],
  
    /**
     * This rule enforces a maximum line length to increase code readability
     * and maintainability.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/max-len.md
     */
    "max-len": [
      "error",
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      }
    ],
  
    /**
     * This rule enforces a maximum number of lines per function, in order to aid
     * in maintainability and reduce complexity.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/max-lines-per-function.md
     */
    "max-lines-per-function": [
      "off",
      {
        max: 20,
        skipBlankLines: true,
        skipComments: true,
      }
    ],
  
    /**
     * This rule enforces a maximum number of lines per file, in order to aid in
     * maintainability and reduce complexity.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/max-lines.md
     */
    "max-lines": [
      "off",
    ],
  
    /**
     * This rule enforces a maximum depth that callbacks can be nested to increase
     * code clarity.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/max-nested-callbacks.md
     */
    "max-nested-callbacks": [
      "error",
      3,
    ],
  
    /**
     * This rule enforces a maximum number of parameters allowed in function definitions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/max-params.md
     */
    "max-params": [
      "error",
      {
        max: 6,
      },
    ],
  
    /**
     * This rule enforces a maximum number of statements allowed per line.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/max-statements-per-line.md
     */
    "max-statements-per-line": [
      "error",
      {
        max: 1,
      },
    ],
  
    /**
     * This rule enforces a maximum number of statements allowed in function blocks.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/max-statements.md
     */
    "max-statements": [
      "off",
    ],
  
    /**
     * This rule aims to enforce a particular style for multiline comments.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/multiline-comment-style.md
     */
    "multiline-comment-style": [
      "off",
    ],
  
    /**
     * This rule enforces or disallows newlines between operands of a ternary expression.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/multiline-ternary.md
     */
    "multiline-ternary": [
      "error",
      "always-multiline",
    ],
  
    /**
     * This rule requires constructor names to begin with a capital letter.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/new-cap.md
     */
    "new-cap": [
      "error",
      {
        newIsCap: true,
        capIsNew: true,
        properties: true,
      },
    ],
  
    /**
     * This rule requires parentheses when invoking a constructor with no arguments
     * using the new keyword in order to increase code clarity.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/new-parens.md
     */
    "new-parens": [
      "error",
    ],
  
    /**
     * This rule requires a newline after each call in a method chain or deep member
     * access. Computed property accesses such as instance[something] are excluded.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/newline-per-chained-call.md
     */
    "newline-per-chained-call": [
      "off",
      {
        ignoreChainWithDepth: 2,
      },
    ],
  
    /**
     * This rule is aimed at catching debugging code that should be removed and
     * popup UI elements that should be replaced with less obtrusive, custom UIs.
     * As such, it will warn when it encounters alert, prompt, and confirm function
     * calls which are not shadowed.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-alert.md
     */
    "no-alert": [
      "error",
    ],
  
    /**
     * This rule disallows Array constructors.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-array-constructor.md
     */
    "no-array-constructor": [
      "error",
    ],
  
    /**
     * This rule aims to disallow async Promise executor functions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-async-promise-executor.md
     */
    "no-async-promise-executor": [
      "error",
    ],
  
    /**
     * This rule disallows the use of await within loop bodies.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-await-in-loop.md
     */
    "no-await-in-loop": [
      "error",
    ],
  
    /**
     * This rule disallows bitwise operators.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-bitwise.md
     */
    "no-bitwise": [
      "error",
    ],
  
    /**
     * This rule disallows calling and constructing the Buffer() constructor.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-buffer-constructor.md
     */
    "no-buffer-constructor": [
      "error",
    ],
  
    /**
     * This rule is aimed at discouraging the use of deprecated and sub-optimal
     * code, but disallowing the use of arguments.caller and arguments.callee.
     * As such, it will warn when arguments.caller and arguments.callee are used.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-caller.md
     */
    "no-caller": [
      "error",
    ],
  
    /**
     * This rule aims to prevent access to uninitialized lexical bindings as
     * well as accessing hoisted functions across case clauses.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-case-declarations.md
     */
    "no-case-declarations": [
      "error",
    ],
  
    /**
     * This rule is aimed to flag modifying variables of class declarations.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-class-assign.md
     */
    "no-class-assign": [
      "error",
    ],
  
    /**
     * The rule should warn against code that tries to compare against -0,
     * since that will not work as intended. That is, code like x === -0 will pass
     * for both +0 and -0. The author probably intended Object.is(x, -0).
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-compare-neg-zero.md
     */
    "no-compare-neg-zero": [
      "error",
    ],
  
    /**
     * This rule disallows ambiguous assignment operators in test conditions of
     * if, for, while, and do...while statements.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-cond-assign.md
     */
    "no-cond-assign": [
      "error",
    ],
  
    /**
     * Arrow functions (=>) are similar in syntax to some comparison operators
     * (>, <, <=, and >=). This rule warns against using the arrow function
     * syntax in places where it could be confused with a comparison operator.
     * Even if the arguments of the arrow function are wrapped with parens, this
     * rule still warns about it unless allowParens is set to true.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-confusing-arrow.md
     */
    "no-confusing-arrow": [
      "off",
    ],
  
    /**
     * This rule disallows calls to methods of the console object.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-console.md
     */
    "no-console": [
      "error",
    ],
  
    /**
     * This rule is aimed to flag modifying variables that are declared using const keyword.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-const-assign.md
     */
    "no-const-assign": [
      "error",
    ],
  
    /**
     * This rule disallows constant expressions in the test condition of if, for,
     * while, do...while or ternary.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-constant-condition.md
     */
    "no-constant-condition": [
      "error",
      {
        checkLoops: false,
      }
    ],
  
    /**
     * This rule disallows continue statements.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-continue.md
     */
    "no-continue": [
      "off",
    ],
  
    /**
     * This rule disallows control characters in regular expressions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-control-regex.md
     */
    "no-control-regex": [
      "error",
    ],
  
    /**
     * This rule disallows debugger statements.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-debugger.md
     */
    "no-debugger": [
      "error",
    ],
  
    /**
     * This rule disallows the use of the delete operator on variables.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-delete-var.md
     */
    "no-delete-var": [
      "error",
    ],
  
    /**
     * This is used to disambiguate the division operator to not confuse users.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-div-regex.md
     */
    "no-div-regex": [
      "error",
    ],
  
    /**
     * This rule disallows duplicate parameter names in function declarations or
     * expressions. It does not apply to arrow functions or class methods,
     * because the parser reports the error.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-dupe-args.md
     */
    "no-dupe-args": [
      "error",
    ],
  
    /**
     * This rule is aimed to flag the use of duplicate names in class members.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-dupe-class-members.md
     */
    "no-dupe-class-members": [
      "error",
    ],
  
    /**
     * This rule disallows duplicate keys in object literals.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-dupe-keys.md
     */
    "no-dupe-keys": [
      "error",
    ],
  
    /**
     * This rule disallows duplicate test expressions in case clauses of switch statements.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-duplicate-case.md
     */
    "no-duplicate-case": [
      "error",
    ],
  
    /**
     * This rules requires that all imports from a single module exists in a single import statement.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-duplicate-imports.md
     */
    "no-duplicate-imports": [
      "off",
    ],
  
    /**
     * This rule is aimed at highlighting an unnecessary block of code following an
     * if containing a return statement. As such, it will warn when it encounters an
     * else following a chain of ifs, all of them containing a return statement.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-else-return.md
     */
    "no-else-return": [
      "error",
    ],
  
    /**
     * This rule disallows empty character classes in regular expressions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-empty-character-class.md
     */
    "no-empty-character-class": [
      "error",
    ],
  
    /**
     * This rule is aimed at eliminating empty functions. A function will not be
     * considered a problem if it contains a comment.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-empty-function.md
     */
    "no-empty-function": [
      "off",
    ],
  
    /**
     * This rule aims to flag any empty patterns in destructured objects and arrays,
     * and as such, will report a problem whenever one is encountered.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-empty-pattern.md
     */
    "no-empty-pattern": [
      "error",
    ],
  
    /**
     * This rule disallows empty block statements. This rule ignores block statements
     * which contain a comment (for example, in an empty catch or finally block of
     * a try statement to indicate that execution should continue regardless of
     * errors).
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-empty.md
     */
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
  
    /**
     * The no-eq-null rule aims reduce potential bug and unwanted behavior by
     * ensuring that comparisons to null only match null, and not also undefined.
     * As such it will flag comparisons to null when using == and !=.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-eq-null.md
     */
    "no-eq-null": [
      "error",
    ],
  
    /**
     * This rule is aimed at preventing potentially dangerous, unnecessary, and
     * slow code by disallowing the use of the eval() function. As such, it will
     * warn whenever the eval() function is used.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-eval.md
     */
    "no-eval": [
      "error",
    ],
  
    /**
     * This rule disallows reassigning exceptions in catch clauses.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-ex-assign.md
     */
    "no-ex-assign": [
      "error",
    ],
  
    /**
     * Disallows directly modifying the prototype of builtin objects.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-extend-native.md
     */
    "no-extend-native": [
      "error",
    ],
  
    /**
     * This rule is aimed at avoiding the unnecessary use of bind() and as such
     * will warn whenever an immediately-invoked function expression (IIFE) is
     * using bind() and doesn't have an appropriate this value. This rule won't
     * flag usage of bind() that includes function argument binding.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-extra-bind.md
     */
    "no-extra-bind": [
      "error",
    ],
  
    /**
     * This rule disallows unnecessary boolean casts. In contexts such as an if
     * statement's test where the result of the expression will already be coerced
     * to a Boolean, casting to a Boolean via double negation (!!) or a Boolean
     * call is unnecessary.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-extra-boolean-cast.md
     */
    "no-extra-boolean-cast": [
      "error",
    ],
  
    /**
     * This rule is aimed at eliminating unnecessary labels. If a loop contains no
     * nested loops or switches, labeling the loop is unnecessary.
     *
     * ```js
     * A: while (a) {
     *  break A;
     * }
     * ```
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-extra-label.md
     */
    "no-extra-label": [
      "error",
    ],
  
    /**
     * This rule restricts the use of parentheses to only where they are necessary.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-extra-parens.md
     */
    "no-extra-parens": [
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
     * This rule disallows unnecessary semicolons.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-extra-semi.md
     */
    "no-extra-semi": [
      "error",
    ],
  
    /**
     * This rule is aimed at eliminating unintentional fallthrough of one case to
     * the other. As such, it flags any fallthrough scenarios that are not marked
     * by a comment.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-fallthrough.md
     */
    "no-fallthrough": [
      "error",
    ],
  
    /**
     * This rule is aimed at eliminating floating decimal points and will warn
     * whenever a numeric value has a decimal point but is missing a number either
     * before or after it.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-floating-decimal.md
     */
    "no-floating-decimal": [
      "error",
    ],
  
    /**
     * This rule disallows reassigning function declarations.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-func-assign.md
     */
    "no-func-assign": [
      "error",
    ],
  
    /**
     * This rule disallows modifications to read-only global variables.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-global-assign.md
     */
    "no-global-assign": [
      "error",
    ],
  
    /**
     * This rule is aimed to flag shorter notations for the type conversion, then
     * suggest a more self-explanatory notation.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-implicit-coercion.md
     */
    "no-implicit-coercion": [
      "error",
    ],
  
    /**
     * This rule disallows var and named function declarations at the top-level
     * script scope. This does not apply to ES and CommonJS modules since they
     * have a module scope.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-implicit-globals.md
     */
    "no-implicit-globals": [
      "error",
    ],
  
    /**
     * This rule aims to eliminate implied eval() through the use of setTimeout(),
     * setInterval() or execScript(). As such, it will warn when either function
     * is used with a string as the first argument.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-implied-eval.md
     */
    "no-implied-eval": [
      "error",
    ],
  
    /**
     * This rule disallows comments on the same line as code.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-inline-comments.md
     */
    "no-inline-comments": [
      "error",
    ],
  
    /**
     * This rule requires that function declarations and, optionally, variable
     * declarations be in the root of a program or the body of a function.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-inner-declarations.md
     */
    "no-inner-declarations": [
      "error",
    ],
  
    /**
     * This rule disallows invalid regular expression strings in RegExp
     * constructors.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-invalid-regexp.md
     */
    "no-invalid-regexp": [
      "error",
    ],
  
    /**
     * This rule aims to flag usage of this keywords outside of classes or
     * class-like objects.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-invalid-this.md
     */
    "no-invalid-this": [
      "error",
    ],
  
    /**
     * This rule is aimed at catching invalid whitespace that is not a normal tab
     * and space. Some of these characters may cause issues in modern browsers and
     * others will be a debugging issue to spot.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-irregular-whitespace.md
     */
    "no-irregular-whitespace": [
      "error",
    ],
  
    /**
     * This rule is aimed at preventing errors that may arise from using the
     * __iterator__ property, which is not implemented in several browsers.
     * As such, it will warn whenever it encounters the __iterator__ property.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-iterator.md
     */
    "no-iterator": [
      "error",
    ],
  
    /**
     * This rule aims to create clearer code by disallowing the bad practice of
     * creating a label that shares a name with a variable that is in scope.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-label-var.md
     */
    "no-label-var": [
      "error",
    ],
  
    /**
     * This rule aims to eliminate the use of labeled statements in JavaScript.
     * It will warn whenever a labeled statement is encountered and whenever
     * break or continue are used with a label.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-labels.md
     */
    "no-labels": [
      "error",
    ],
  
    /**
     * This rule aims to eliminate unnecessary and potentially confusing blocks
     * at the top level of a script or within other blocks.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-lone-blocks.md
     */
    "no-lone-blocks": [
      "error",
    ],
  
    /**
     * This rule disallows if statements as the only statement in else blocks.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-lonely-if.md
     */
    "no-lonely-if": [
      "error",
    ],
  
    /**
     * This rule disallows any function within a loop that contains unsafe
     * references (e.g. to modified variables from the outer scope).
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-loop-func.md
     */
    "no-loop-func": [
      "error",
    ],
  
    /**
     * The no-magic-numbers rule aims to make code more readable and refactoring
     * easier by ensuring that special numbers are declared as constants to make
     * their meaning explicit.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-magic-numbers.md
     */
    "no-magic-numbers": [
      "off",
      {
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
        ignore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      }
    ],
  
    /**
     * This rule reports the regular expressions which include multiple code point
     * characters in character class syntax. This rule considers the following
     * characters as multiple code point characters.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-misleading-character-class.md
     */
    "no-misleading-character-class": [
      "error",
    ],
  
    /**
     * This rule checks BinaryExpression and LogicalExpression.
     *
     * This rule may conflict with no-extra-parens rule. If you use both this and
     * no-extra-parens rule together, you need to use the nestedBinaryExpressions
     * option of no-extra-parens rule.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-mixed-operators.md
     */
    "no-mixed-operators": [
      "error",
      {
        groups: [
          ["%", "**"],
          ["%", "+"],
          ["%", "-"],
          ["%", "*"],
          ["%", "/"],
          ["**", "+"],
          ["**", "-"],
          ["**", "*"],
          ["**", "/"],
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"],
        ],
        allowSamePrecedence: false,
      },
    ],
  
    /**
     * When this rule is enabled, each var statement must satisfy the following conditions:
     *   - either none or all variable declarations must be require declarations (default)
     *   - all require declarations must be of the same type (grouping)
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-mixed-requires.md
     */
    "no-mixed-requires": [
      "error",
      {
        allowCall: false,
        grouping: true,
      },
    ],
  
    /**
     * This rule disallows mixed spaces and tabs for indentation.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-mixed-spaces-and-tabs.md
     */
    "no-mixed-spaces-and-tabs": [
      "error",
    ],
  
    /**
     * This rule disallows using multiple assignments within a single statement.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-multi-assign.md
     */
    "no-multi-assign": [
      "error",
    ],
  
    /**
     * This rule aims to disallow multiple whitespace around logical expressions,
     * conditional expressions, declarations, array elements, object properties,
     * sequences and function parameters.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-multi-spaces.md
     */
    "no-multi-spaces": [
      "error",
    ],
  
    /**
     * This rule is aimed at preventing the use of multiline strings.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-multi-str.md
     */
    "no-multi-str": [
      "error",
    ],
  
    /**
     * This rule aims to reduce the scrolling required when reading through your
     * code. It will warn when the maximum amount of empty lines has been exceeded.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-multiple-empty-lines.md
     */
    "no-multiple-empty-lines": [
      "error",
      {
        max: 2,
      },
    ],
  
    /**
     * This rule disallows negated conditions in either of the following:
     *   - if statements which have an else branch
     *   - ternary expressions
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-negated-condition.md
     */
    "no-negated-condition": [
      "error",
    ],
  
    /**
     * Just as developers might type -a + b when they mean -(a + b) for the negative
     * of a sum, they might type !key in object by mistake when they almost
     * certainly mean !(key in object) to test that a key is not in an object. This
     * rule disallows negating the left operand in in expressions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-negated-in-lhs.md
     */
    "no-negated-in-lhs": [
      "error",
    ],
  
    /**
     * The no-nested-ternary rule disallows nested ternary expressions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-nested-ternary.md
     */
    "no-nested-ternary": [
      "off",
    ],
  
    /**
     * This error is raised to highlight the use of a bad practice. By passing a
     * string to the Function constructor, you are requiring the engine to parse
     * that string much in the way it has to when you call the eval function.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-new-func.md
     */
    "no-new-func": [
      "error",
    ],
  
    /**
     * This rule disallows Object constructors.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-new-object.md
     */
    "no-new-object": [
      "error",
    ],
  
    /**
     * This rule aims to eliminate use of the new require expression.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-new-require.md
     */
    "no-new-require": [
      "error",
    ],
  
    /**
     * This rule is aimed at preventing the accidental calling of Symbol with the
     * new operator.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-new-symbol.md
     */
    "no-new-symbol": [
      "error",
    ],
  
    /**
     * This rule aims to eliminate the use of String, Number, and Boolean with
     * the new operator. As such, it warns whenever it sees new String,
     * new Number, or new Boolean.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-new-wrappers.md
     */
    "no-new-wrappers": [
      "error",
    ],
  
    /**
     * This rule is aimed at maintaining consistency and convention by disallowing
     * constructor calls using the new keyword that do not assign the resulting
     * object to a variable.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-new.md
     */
    "no-new": [
      "off",
    ],
  
    /**
     * This rule disallows calling the Math, JSON and Reflect objects as functions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-obj-calls.md
     */
    "no-obj-calls": [
      "error",
    ],
  
    /**
     * This rule disallows octal escape sequences in string literals.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-octal-escape.md
     */
    "no-octal-escape": [
      "error",
    ],
  
    /**
     * The rule disallows octal literals.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-octal.md
     */
    "no-octal": [
      "error",
    ],
  
    /**
     * This rule aims to prevent unintended behavior caused by modification or
     * reassignment of function parameters.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-param-reassign.md
     */
    "no-param-reassign": [
      "error",
    ],
  
    /**
     * This rule aims to prevent string concatenation of directory paths in Node.js
     * like __dirname and __filename.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-path-concat.md
     */
    "no-path-concat": [
      "error",
    ],
  
    /**
     * This rule disallows the unary operators ++ and --.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-plusplus.md
     */
    "no-plusplus": [
      "off",
    ],
  
    /**
     * This rule is aimed at discouraging use of process.env to avoid global
     * dependencies. As such, it will warn whenever process.env is used.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-process-env.md
     */
    "no-process-env": [
      "off",
    ],
  
    /**
     * This rule aims to prevent the use of process.exit() in Node.js JavaScript.
     * As such, it warns whenever process.exit() is found in code.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-process-exit.md
     */
    "no-process-exit": [
      "error",
    ],
  
    /**
     * When an object is created __proto__ is set to the original prototype
     * property of the object’s constructor function. getPrototypeOf is the
     * preferred method of getting "the prototype".
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-proto.md
     */
    "no-proto": [
      "error",
    ],
  
    /**
     * This rule disallows calling some Object.prototype methods directly on
     * object instances.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-prototype-builtins.md
     */
    "no-prototype-builtins": [
      "error",
    ],
  
    /**
     * This rule is aimed at eliminating variables that have multiple declarations
     * in the same scope.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-redeclare.md
     */
    "no-redeclare": [
      "error",
      {
        builtinGlobals: true,
      }
    ],
  
    /**
     * This rule disallows multiple spaces in regular expression literals.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-regex-spaces.md
     */
    "no-regex-spaces": [
      "error",
    ],
  
    /**
     * This rule allows you to specify global variable names that you don't
     * want to use in your application.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-restricted-globals.md
     */
    "no-restricted-globals": [
      "off",
    ],
  
    /**
     * This rule allows you to specify imports that you don't want to use in your
     * application.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-restricted-imports.md
     */
    "no-restricted-imports": [
      "off",
    ],
  
    /**
     * This rule allows you to specify modules that you don’t want to use in your
     * application.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-restricted-modules.md
     */
    "no-restricted-modules": [
      "off",
    ],
  
    /**
     * This rule looks for accessing a given property key on a given object name,
     * either when reading the property's value or invoking it as a function.
     * You may specify an optional message to indicate an alternative API or a
     * reason for the restriction.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-restricted-properties.md
     */
    "no-restricted-properties": [
      "off",
    ],
  
    /**
     * This rule disallows specified (that is, user-defined) syntax.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-restricted-syntax.md
     */
    "no-restricted-syntax": [
      "off",
    ],
  
    /**
     * This rule aims to eliminate assignments from return statements. As such,
     * it will warn whenever an assignment is found as part of return.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-return-assign.md
     */
    "no-return-assign": [
      "error",
    ],
  
    /**
     * This rule aims to prevent a likely common performance hazard due to a lack
     * of understanding of the semantics of async function.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-return-await.md
     */
    "no-return-await": [
      "error",
    ],
  
    /**
     * Using javascript: URLs is considered by some as a form of eval. Code passed
     * in javascript: URLs has to be parsed and evaluated by the browser in the
     * same way that eval is processed.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-script-url.md
     */
    "no-script-url": [
      "error",
    ],
  
    /**
     * This rule is aimed at eliminating self assignments.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-self-assign.md
     */
    "no-self-assign": [
      "error",
    ],
  
    /**
     * This error is raised to highlight a potentially confusing and potentially
     * pointless piece of code. There are almost no situations in which you would
     * need to compare something to itself.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-self-compare.md
     */
    "no-self-compare": [
      "error",
    ],
  
    /**
     * This rule forbids the use of the comma operator, with the following exceptions:
     *   - In the initialization or update portions of a for statement.
     *   - If the expression sequence is explicitly wrapped in parentheses.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-sequences.md
     */
    "no-sequences": [
      "error",
    ],
  
    /**
     * ES5 §15.1.1 Value Properties of the Global Object (NaN, Infinity, undefined)
     * as well as strict mode restricted identifiers eval and arguments are
     * considered to be restricted names in JavaScript. Defining them to mean
     * something else can have unintended consequences and confuse others reading
     * the code. For example, there's nothing prevent you from writing:
     *
     * ```js
     * var undefined = "foo";
     * ```
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-shadow-restricted-names.md
     */
    "no-shadow-restricted-names": [
      "error",
    ],
  
    /**
     * This rule aims to eliminate shadowed variable declarations.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-shadow.md
     */
    "no-shadow": [
      "error",
      {
        builtinGlobals: true,
        hoist: "functions",
      }
    ],
  
    /**
     * This rule is aimed at preventing synchronous methods from being called
     * in Node.js. It looks specifically for the method suffix "Sync"
     * (as is the convention with Node.js operations).
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-sync.md
     */
    "no-sync": [
      "error",
    ],
  
    /**
     * This rule disallows sparse array literals which have "holes" where commas
     * are not preceded by elements. It does not apply to a trailing comma
     * following the last element
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-sparse-arrays.md
     */
    "no-sparse-arrays": [
      "error",
    ],
  
    /**
     * This rule looks for tabs anywhere inside a file: code, comments or
     * anything else.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-tabs.md
     */
    "no-tabs": [
      "error",
    ],
  
    /**
     * This rule aims to warn when a regular string contains what looks like a
     * template literal placeholder. It will warn when it finds a string containing
     * the template literal place holder (${something}) that uses either " or '
     * for the quotes.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-template-curly-in-string.md
     */
    "no-template-curly-in-string": [
      "error",
    ],
  
    /**
     * This rule disallows ternary operators.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-ternary.md
     */
    "no-ternary": [
      "off",
    ],
  
    /**
     * This rule is aimed to flag this/super keywords before super() callings.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-this-before-super.md
     */
    "no-this-before-super": [
      "error",
    ],
  
    /**
     * This rule is aimed at maintaining consistency when throwing exception by
     * disallowing to throw literals and other expressions which cannot possibly
     * be an Error object.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-throw-literal.md
     */
    "no-throw-literal": [
      "error",
    ],
  
    /**
     * This rule disallows trailing whitespace (spaces, tabs, and other Unicode
     * whitespace characters) at the end of lines.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-trailing-spaces.md
     */
    "no-trailing-spaces": [
      "error",
    ],
  
    /**
     * This rule aims to eliminate variable declarations that initialize to undefined.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-undef-init.md
     */
    "no-undef-init": [
      "error",
    ],
  
    /**
     * Any reference to an undeclared variable causes a warning, unless the variable
     * is explicitly mentioned in a global comment, or specified in the
     * globals key in the configuration file. A common use case for these is if
     * you intentionally use globals that are defined elsewhere (e.g. in a script
     * sourced from HTML).
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-undef.md
     */
    "no-undef": [
      "off", // Going to be handled by tslint
    ],
  
    /**
     * This rule aims to eliminate the use of undefined, and as such, generates a
     * warning whenever it is used.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-undefined.md
     */
    "no-undefined": [
      "off",
    ],
  
    /**
     * This rule disallows dangling underscores in identifiers.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-underscore-dangle.md
     */
    "no-underscore-dangle": [
      "off",
    ],
  
    /**
     * This rule disallows confusing multiline expressions where a newline looks
     * like it is ending a statement, but is not.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-unexpected-multiline.md
     */
    "no-unexpected-multiline": [
      "error",
    ],
  
    /**
     * This rule finds references which are inside of loop conditions, then checks
     * the variables of those references are modified in the loop.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-unmodified-loop-condition.md
     */
    "no-unmodified-loop-condition": [
      "error",
    ],
  
    /**
     * This rule disallow ternary operators when simpler alternatives exist.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-unneeded-ternary.md
     */
    "no-unneeded-ternary": [
      "error",
    ],
  
    /**
     * This rule disallows unreachable code after return, throw, continue, and
     * break statements.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-unreachable.md
     */
    "no-unreachable": [
      "error",
    ],
  
    /**
     * This rule disallows return, throw, break, and continue statements inside
     * finally blocks. It allows indirect usages, such as in function or class
     * definitions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-unsafe-finally.md
     */
    "no-unsafe-finally": [
      "error",
    ],
  
    /**
     * This rule disallows negating the left operand of Relational Operators.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-unsafe-negation.md
     */
    "no-unsafe-negation": [
      "error",
    ],
  
    /**
     * This rule aims to eliminate unused expressions which have no effect on the
     * state of the program.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-unused-expressions.md
     */
    "no-unused-expressions": [
      "off",
    ],
  
    /**
     * This rule is aimed at eliminating unused labels.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-unused-labels.md
     */
    "no-unused-labels": [
      "error",
    ],
  
    /**
     * This rule is aimed at eliminating unused variables, functions, and parameters
     * of functions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-unused-vars.md
     */
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_"
      }
    ],
  
    /**
     * This rule will warn when it encounters a reference to an identifier that
     * has not yet been declared.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-use-before-define.md
     */
    "no-use-before-define": [
      "error",
      {
        functions: true,
        classes: true,
      },
    ],
  
    /**
     * This rule is aimed to flag usage of Function.prototype.call() and
     * Function.prototype.apply() that can be replaced with the normal function
     * invocation.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-call.md
     */
    "no-useless-call": [
      "error",
    ],
  
    /**
     * This rule disallows unnecessary usage of computed property keys.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-computed-key.md
     */
    "no-useless-computed-key": [
      "error",
    ],
  
    /**
     * This rule aims to flag the concatenation of 2 literals when they could be
     * combined into a single literal. Literals can be strings or template literals.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-concat.md
     */
    "no-useless-concat": [
      "error",
    ],
  
    /**
     * This rule flags class constructors that can be safely removed without
     * changing how the class works.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-constructor.md
     */
    "no-useless-constructor": [
      "error",
    ],
  
    /**
     * This rule flags escapes that can be safely removed without changing behavior.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-escape.md
     */
    "no-useless-escape": [
      "error",
    ],
  
    /**
     * This rule disallows the renaming of import, export, and destructured
     * assignments to the same name.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-rename.md
     */
    "no-useless-rename": [
      "error",
    ],
  
    /**
     * This rule aims to report redundant return statements.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-return.md
     */
    "no-useless-return": [
      "error",
    ],
  
    /**
     * This rule is aimed at discouraging the use of var and encouraging the use
     * of const or let instead.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-var.md
     */
    "no-var": [
      "error",
    ],
  
    /**
     * This rule aims to eliminate use of void operator.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-void.md
     */
    "no-void": [
      "error",
    ],
  
    /**
     * This rule reports comments that include any of the predefined terms
     * specified in its configuration.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-warning-comments.md
     */
    "no-warning-comments": [
      "off",
    ],
  
    /**
     * This rule disallows whitespace around the dot or before the opening bracket
     * before properties of objects if they are on the same line.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-whitespace-before-property.md
     */
    "no-whitespace-before-property": [
      "error",
    ],
  
    /**
     * This rule disallows with statements.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/no-with.md
     */
    "no-with": [
      "error",
    ],
  
    /**
     * This rule aims to enforce a consistent location for single-line statements.
     * Note that this rule does not enforce the usage of single-line statements in
     * general. If you would like to disallow single-line statements, use the curly
     * rule instead.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/nonblock-statement-body-position.md
     */
    "nonblock-statement-body-position": [
      "off",
    ],
  
    /**
     * This rule enforces consistent line breaks inside braces of object literals
     * or destructuring assignments.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/object-curly-newline.md
     */
    "object-curly-newline": [
      "error",
      {
        minProperties: 3,
        consistent: true,
      },
    ],
  
    /**
     * This rule enforce consistent spacing inside braces of object literals,
     * destructuring assignments, and import/export specifiers.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/object-curly-spacing.md
     */
    "object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
  
    /**
     * This rule makes it possible to ensure, as some style guides require, that
     * property specifications appear on separate lines for better readability.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/object-property-newline.md
     */
    "object-property-newline": [
      "error",
      {
        allowMultiplePropertiesPerLine: true,
      }
    ],
  
    /**
     * This rule enforces the use of the shorthand syntax. This applies to all
     * methods (including generators) defined in object literals and any properties
     * defined where the key name matches name of the assigned variable.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/object-shorthand.md
     */
    "object-shorthand": [
      "error",
      "always",
    ],
  
    /**
     * This rule enforces a consistent newlines around variable declarations.
     * This rule ignores variable declarations inside for loop conditionals.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/one-var-declaration-per-line.md
     */
    "one-var-declaration-per-line": [
      "error",
    ],
  
    /**
     * This rule enforces variables to be declared either together or separately
     * per function (for var) or block (for let and const) scope.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/one-var.md
     */
    "one-var": [
      "error",
      "never",
    ],
  
    /**
     * This rule requires or disallows assignment operator shorthand where possible.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/operator-assignment.md
     */
    "operator-assignment": [
      "error",
      "always",
    ],
  
    /**
     * This rule enforces a consistent linebreak style for operators.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/operator-linebreak.md
     */
    "operator-linebreak": [
      "error",
      "before",
    ],
  
    /**
     * This rule enforces consistent empty line padding within blocks.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/padded-blocks.md
     */
    "padded-blocks": [
      "off",
    ],
  
    /**
     * This rule does nothing if no configurations are provided.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/padding-line-between-statements.md
     */
    "padding-line-between-statements": [
      "off",
    ],
  
    /**
     * This rule locates function expressions used as callbacks or function
     * arguments. An error will be produced for any that could be replaced by an
     * arrow function without changing the result.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/prefer-arrow-callback.md
     */
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
  
    /**
     * This rule is aimed at flagging variables that are declared using let keyword,
     * but never reassigned after the initial assignment.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/prefer-const.md
     */
    "prefer-const": [
      "error",
    ],
  
    /**
     * With JavaScript ES6, a new syntax was added for creating variables from an
     * array index or object property, called destructuring. This rule enforces
     * usage of destructuring instead of accessing a property through a member
     * expression.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/prefer-destructuring.md
     */
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        }
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
  
    /**
     * This rule disallows calls to parseInt() or Number.parseInt() if called with
     * two arguments: a string; and a radix option of 2 (binary), 8 (octal), or
     * 16 (hexadecimal).
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/prefer-numeric-literals.md
     */
    "prefer-numeric-literals": [
      "off",
    ],
  
    /**
     * When Object.assign is called using an object literal as the first argument,
     * this rule requires using the object spread syntax instead. This rule also
     * warns on cases where an Object.assign call is made using a single argument
     * that is an object literal, in this case, the Object.assign call is not
     * needed.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/prefer-object-spread.md
     */
    "prefer-object-spread": [
      "error",
    ],
  
    /**
     * This rule is aimed to flag usage of arguments variables.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/prefer-rest-params.md
     */
    "prefer-promise-reject-errors": [
      "error",
    ],
  
    /**
     * This rule is aimed to flag usage of Function.prototype.apply() in situations
     * where the spread operator could be used instead.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/prefer-spread.md
     */
    "prefer-spread": [
      "error",
    ],
  
    /**
     * This rule is aimed to flag usage of + operators with strings.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/prefer-template.md
     */
    "prefer-template": [
      "error",
    ],
  
    /**
     * This rule requires quotes around object literal property names.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/quote-props.md
     */
    "quote-props": [
      "error",
      "as-needed",
    ],
  
    /**
     * This rule enforces the consistent use of either backticks, double, or
     * single quotes.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/quotes.md
     */
    "quotes": [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
  
    /**
     * This rule is aimed at preventing the unintended conversion of a string to a
     * number of a different base than intended or at preventing the redundant 10
     * radix if targeting modern environments only.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/radix.md
     */
    "radix": [
      "error",
      "always",
    ],
  
    /**
     * This rule aims to report assignments to variables or properties where all
     * of the following are true:
     *   - A variable or property is reassigned to a new value which is based on its
     *   old value.
     *   - A yield or await expression interrupts the assignment after the old
     *    value is read, and before the new value is set.
     *   - The rule cannot easily verify that the assignment is safe (e.g. if an
     *   assigned variable is local and would not be readable from anywhere else
     *   while the function is paused).
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/require-atomic-updates.md
     */
    "require-atomic-updates": [
      "error",
    ],
  
    /**
     * This rule warns async functions which have no await expression.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/require-await.md
     */
    "require-await": [
      "error",
    ],
  
    /**
     * This rule requires JSDoc comments for specified nodes.
     *
     * @deprecated
     *
     * https://eslint.org/docs/rules/require-jsdoc
     */
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
  
    /**
     * This rule aims to enforce the use of u flag on regular expressions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/require-unicode-regexp.md
     */
    "require-unicode-regexp": [
      "off",
    ],
  
    /**
     * This rule generates warnings for generator functions that do not have the
     * yield keyword.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/require-yield.md
     */
    "require-yield": [
      "error",
    ],
  
    /**
     * This rule aims to enforce consistent spacing between rest and spread
     * operators and their expressions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/rest-spread-spacing.md
     */
    "rest-spread-spacing": [
      "error",
      "never",
    ],
  
    /**
     * This rule aims to enforce spacing around a semicolon. This rule prevents
     * the use of spaces before a semicolon in expressions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/semi-spacing.md
     */
    "semi-spacing": [
      "error",
      {
        before: false,
        after: true,
      }
    ],
  
    /**
     * This rule reports line terminators around semicolons.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/semi-style.md
     */
    "semi-style": [
      "error",
      "last",
    ],
  
    /**
     * This rule enforces consistent use of semicolons.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/semi.md
     */
    "semi": [
      "error",
      "always",
    ],
  
    /**
     * This rule checks all import declarations and verifies that all imports are
     * first sorted by the used member syntax and then alphabetically by the first
     * member or alias name.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/sort-imports.md
     */
    "sort-imports": [
      "off"
    ],
  
    /**
     * This rule checks all property definitions of object expressions and verifies
     * that all variables are sorted alphabetically.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/sort-keys.md
     */
    "sort-keys": [
      "error",
    ],
  
    /**
     * This rule checks all variable declaration blocks and verifies that all
     * variables are sorted alphabetically. The default configuration of the rule
     * is case-sensitive.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/sort-vars.md
     */
    "sort-vars": [
      "error",
    ],
  
    /**
     * This rule will enforce consistency of spacing before blocks. It is only
     * applied on blocks that don’t begin on a new line.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/space-before-blocks.md
     */
    "space-before-blocks": [
      "error",
      "always",
    ],
  
    /**
     * This rule aims to enforce consistent spacing before function parentheses
     * and as such, will warn whenever whitespace doesn't match the preferences
     * specified.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/space-before-function-paren.md
     */
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
  
    /**
     * This rule will enforce consistency of spacing directly inside of parentheses,
     * by disallowing or requiring one or more spaces to the right of ( and to the
     * left of ). In either case, () will still be allowed.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/space-in-parens.md
     */
    "space-in-parens": [
      "error",
      "never",
    ],
  
    /**
     * This rule is aimed at ensuring there are spaces around infix operators.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/space-infix-ops.md
     */
    "space-infix-ops": [
      "error",
    ],
  
    /**
     * This rule enforces consistency regarding the spaces after words unary
     * operators and after/before nonwords unary operators.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/space-unary-ops.md
     */
    "space-unary-ops": [
      "error",
    ],
  
    /**
     * This rule will enforce consistency of spacing after the start of a comment
     * // or /*. It also provides several exceptions for various documentation
     * styles.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/spaced-comment.md
     */
    "spaced-comment": [
      "error",
      "always",
      {
        exceptions: ["#"]
      }
    ],
  
    /**
     * This rule requires or disallows strict mode directives.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/strict.md
     */
    "strict": [
      "off",
    ],
  
    /**
     * This rule controls spacing around colons of case and default clauses in
     * switch statements. This rule does the check only if the consecutive tokens
     * exist on the same line.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/switch-colon-spacing.md
     */
    "switch-colon-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
  
    /**
     * This rules requires a description when creating symbols.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/symbol-description.md
     */
    "symbol-description": [
      "error",
    ],
  
    /**
     * This rule aims to maintain consistency around the spacing inside of template
     * literals.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/template-curly-spacing.md
     */
    "template-curly-spacing": [
      "error",
      "never",
    ],
  
    /**
     * This rule aims to maintain consistency around the spacing between template
     * tag functions and their template literals.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/template-tag-spacing.md
     */
    "template-tag-spacing": [
      "error",
      "never",
    ],
  
    /**
     * If the "always" option is used, this rule requires that files always begin
     * with the Unicode BOM character U+FEFF. If "never" is used, files must never
     * begin with U+FEFF.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/unicode-bom.md
     */
    "unicode-bom": [
      "error",
      "never",
    ],
  
    /**
     * This rule disallows comparisons to 'NaN'.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/use-isnan.md
     */
    "use-isnan": [
      "error",
    ],
  
    /**
     * This rule enforces comparing typeof expressions to valid string literals.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/valid-typeof.md
     */
    "valid-typeof": [
      "error",
    ],
  
    /**
     * This rule aims to keep all variable declarations in the leading series of
     * statements. Allowing multiple declarations helps promote maintainability
     * and is thus allowed.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/vars-on-top.md
     */
    "vars-on-top": [
      "off",
    ],
  
    /**
     * This rule requires all immediately-invoked function expressions to be
     * wrapped in parentheses.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/wrap-iife.md
     */
    "wrap-iife": [
      "error",
      "inside",
    ],
  
    /**
     * This is used to disambiguate the slash operator and facilitates more
     * readable code.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/wrap-regex.md
     */
    "wrap-regex": [
      "error",
    ],
  
    /**
     * This rule enforces spacing around the * in yield* expressions.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/yield-star-spacing.md
     */
    "yield-star-spacing": [
      "error",
    ],
  
    /**
     * This rule aims to enforce consistent style of conditions which compare a
     * variable to a literal value.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/yoda.md
     */
    "yoda": [
      "error",
      "never",
    ],
  }
};
