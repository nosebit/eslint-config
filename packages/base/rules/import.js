module.exports = {
  plugins: [
    "import"
  ],
  rules: {
    /**
     * If a default import is requested, this rule will report if there is no default
     * export in the imported module.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
     */
    "import/default": [
      "off", // handled by tslint
    ],
  
    /**
     * This rule enforces naming of webpack chunks in dynamic imports.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
     */
    "import/dynamic-import-chunkname": [
      "error",
    ],
  
    /**
     * Reports funny business with exports, like repeated exports of names or defaults.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
     */
    "import/export": [
      "error",
    ],
  
    /**
     * This rule can enforce or disallow the use of certain file extensions.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
     */
    "import/extensions": [
      "off",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      }
    ],
  
    /**
     * This rule enforces that all exports are declared at the bottom of the file.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
     */
    "import/exports-last": [
      "off"
    ],
  
    /**
     * This rule reports any imports that come after non-import statements.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
     */
    "import/first": [
      "error",
    ],
  
    /**
     * Reports when named exports are not grouped together in a single export
     * declaration or when multiple assignments to CommonJS module.exports or
     * exports object are present in a single file.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
     */
    "import/group-exports": [
      "off"
    ],
  
    /**
     * Forbid modules to have too many dependencies (import or require statements).
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
     */
    "import/max-dependencies": [
      "off",
    ],
  
    /**
     * Verifies that all named imports are part of the set of named exports in
     * the referenced module.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
     */
    "import/named": [
      "off", // Going to be handled by tslint
    ],
  
    /**
     * Enforces names exist at the time they are dereferenced, when imported as
     * a full namespace (i.e. import * as foo from './foo'; foo.bar(); will report
     * if bar is not exported by ./foo.).
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
     *
     * @NOTE : When migrating to yarn PnP this rule is silently breaking vscode-eslint.
     * 
     */
    "import/namespace": [
      "error",
    ],
  
    /**
     * Enforces having one or more empty lines after the last top-level import
     * statement or require call
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
     */
    "import/newline-after-import": [
      "error",
    ],
  
    /**
     * Node.js allows the import of modules using an absolute path such as /home/xyz/file.js.
     * That is a bad practice as it ties the code using it to your computer, and therefore makes
     * it unusable in packages distributed on npm for instance.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
     */
    "import/no-absolute-path": [
      "error",
    ],
  
    /**
     * Reports require([array], ...) and define([array], ...) function calls at
     * the module scope. Will not report if !=2 arguments, or first argument is
     * not a literal array.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
     */
    "import/no-amd": [
      "error",
    ],
  
    /**
     * Reports if a module's default export is unnamed.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
     */
    "import/no-anonymous-default-export": [
      "error",
    ],
  
    /**
     * Reports require([string]) function calls. Will not report if >1 argument,
     * or single argument is not a literal string. Reports module.exports or
     * exports.*, also.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
     */
    "import/no-commonjs": [
      "error",
    ],
  
    /**
     * Ensures that there is no resolvable path back to this module via its dependencies.
     * This rule is comparatively computationally expensive.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
     */
    "import/no-cycle": [
      "off",
    ],
  
    /**
     * Prohibit default exports.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
     */
    "import/no-default-export": [
      "off",
    ],
  
    /**
     * Reports use of a deprecated name, as indicated by a JSDoc block with a
     * @deprecated tag or TomDoc Deprecated: comment.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
     *
     * @NOTE : When migrating to yarn PnP this rule makes VSCode ESLint to hang.
     */
    "import/no-deprecated": [
      "error"
    ],
  
    /**
     * Reports if a resolved path is imported more than once.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
     */
    "import/no-duplicates": [
      "off", // Handled by tslint
    ],
  
    /**
     * The require method from CommonJS can be given expressions that will be
     * resolved at runtime.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
     */
    "import/no-dynamic-require": [
      "error",
    ],
  
    /**
     * Forbid the import of external modules that are not declared in the package.json's
     * dependencies, devDependencies, optionalDependencies or peerDependencies
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
     *
     * @NOTE : When migrating to yarn PnP this rule makes VSCode ESLint to hang.
     */
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: []
      }
    ],
  
    /**
     * Use this rule to prevent importing the submodules of other modules.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
     */
    "import/no-internal-modules": [
      "off",
    ],
  
    /**
     * Forbids the use of mutable exports with var or let.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
     */
    "import/no-mutable-exports": [
      "error",
    ],
  
    /**
     * Reports use of an exported name as the locally imported name of a default
     * export.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
     */
    "import/no-named-as-default": [
      "off",
    ],
  
    /**
     * Reports if namespace import like `import * as foo from 'foo';` is used.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
     */
    "import/no-namespace": [
      "off",
    ],
  
    /**
     * Forbid the use of Node.js builtin modules. Can be useful for client-side
     * web projects that do not have access to those modules.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
     */
    "import/no-nodejs-modules": [
      "off",
    ],
  
    /**
     * Use this rule to prevent imports to folders in relative parent paths.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
     */
    "import/no-relative-parent-imports": [
      "off",
    ],
  
    /**
     * Some projects contain files which are not always meant to be executed in the same environment.
     * For example consider a web application that contains specific code for the server and some
     * specific code for the browser/client. In this case you don’t want to import server-only
     * files in your client code.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
     */
    "import/no-restricted-paths": [
      "off",
    ],
  
    /**
     * Forbid a module from importing itself. This can sometimes happen during
     * refactoring.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
     *
     * @NOTE : When migrating to yarn PnP this rule makes VSCode ESLint to hang.
     */
    "import/no-self-import": [
      "error",
    ],
  
    /**
     * With both CommonJS' require and the ES6 modules' import syntax, it is possible to import a
     * module but not to use its result. This can be done explicitly by not assigning the module
     * to as variable. This rule aims to remove modules with side-effects by reporting when a
     * module is imported but not assigned.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
     */
    "import/no-unassigned-import": [
      "off",
    ],
  
    /**
     * Ensure imports point to files/modules that can be resolved.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
     *
     * @NOTE : When migrating to yarn PnP this rule makes VSCode ESLint to hang.
     */
    "import/no-unresolved": [
      "error",
      {
        commonjs: true,
        caseSensitive: true,
      },
    ],
  
    /**
     * Use this rule to prevent unnecessary path segments in import and require statements.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
     */
    "import/no-useless-path-segments": [
      "error",
    ],
  
    /**
     * Forbid Webpack loader syntax in imports.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
     */
    "import/no-webpack-loader-syntax": [
      "error",
    ],
  
    /**
     * Enforce a convention in the order of require() / import statements
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
     *
     * @NOTE : When migrating to yarn PnP this rule makes VSCode ESLint to hang.
     */
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: 'asc', /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */
          caseInsensitive: true /* ignore case. Options: [true, false] */
        },
        pathGroups: [
          {
            pattern: "~/**",
            group: "internal"
          },
          {
            pattern: "~**",
            group: "internal"
          },
          {
            pattern: "@/**",
            group: "internal"
          },
          {
            pattern: "@nosebit/**",
            group: "external"
          }
        ]
      }
    ],
  
    /**
     * When there is only a single export from a module, prefer using default export over named export.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
     */
    "import/prefer-default-export": [
      "error",
    ],
  
    /**
     * Warn if a module could be mistakenly parsed as a script by a consumer leveraging
     * Unambiguous JavaScript Grammar to determine correct parsing goal.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
     */
    "import/unambiguous": [
      "off",
    ],
  },
  settings: {
    "import/external-module-folders": [
      "@nosebit",
    ],
  },

  overrides: [
    {
      "files": ["*.js", "*.jsx"],
      "rules": {
        "import/no-commonjs": "off",
      }
    }
  ]
};
