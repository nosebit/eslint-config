module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "react"
  ],
  rules: {
    /**
     * This rule enforces or disallows newlines between operands of a ternary expression.
     *
     * https://github.com/eslint/eslint/blob/master/docs/rules/multiline-ternary.md
     */
    "multiline-ternary": ["off"],

    /**
     * Allows you to enforce a consistent naming pattern for props which expect
     * a boolean value. Names should be like isEnabled, isAFK, hasCondition, hasLOL.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
     */
    "react/boolean-prop-naming": [
      "error",
      {
        rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+"
      }
    ],
  
    /**
     * The default value of type attribute for button HTML element is "submit"
     * which is often not the desired behavior and may lead to unexpected page
     * reloads. This rules enforces an explicit type attribute for all the button
     * elements and checks that its value is valid per spec (i.e., is one of
     * "button", "submit", and "reset").
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
     */
    "react/button-has-type": [
      "error",
    ],
  
    /**
     * This rule aims to ensure that any defaultProp has a non-required PropType
     * declaration.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
     */
    "react/default-props-match-prop-types": [
      "error",
    ],
  
    /**
     * Enforce consistent usage of destructuring assignment of props, state, and
     * context.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
     */
    "react/destructuring-assignment": [
      "off",
    ],
  
    /**
     * DisplayName allows you to name your component. This name is used by React
     * in debugging messages.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
     */
    "react/display-name": [
      "off",
    ],
  
    /**
     * By default this rule prevents passing of props that add lots of complexity
     * (className, style) to Components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
     */
    "react/forbid-component-props": [
      "off",
    ],
  
    /**
     * This rule prevents passing of props to elements. This rule only applies to
     * DOM Nodes (e.g. <div />) and not Components (e.g. <Component />).
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
     */
    "react/forbid-dom-props": [
      "off",
    ],
  
    /**
     * You may want to forbid usage of certain elements in favor of others, (e.g.
     * forbid all <div /> and use <Box /> instead). This rule allows you to
     * configure a list of forbidden elements and to specify their desired
     * replacements.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
     */
    "react/forbid-elements": [
      "off",
    ],
  
    /**
     * This rule forbids using another component's prop types unless they are
     * explicitly imported/exported. This allows people who want to use
     * babel-plugin-transform-react-remove-prop-types to remove propTypes from
     * their components in production builds, to do so safely.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
     */
    "react/forbid-foreign-prop-types": [
      "error",
    ],
  
    /**
     * By default this rule prevents vague prop types with more specific alternatives
     * available (any, array, object), but any prop type can be disabled if desired.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
     */
    "react/forbid-prop-types": [
      "off",
    ],

    /**
     * This rule is aimed to enforce consistent function types for function components.
     * By default it prefers function declarations for named components and function
     * expressions for unnamed components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
     */
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function",
      }
    ],
  
    /**
     * When using a boolean attribute in JSX, you can set the attribute value to
     * true or omit the value. This rule will enforce one or the other to keep
     * consistency in your code.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     */
    "react/jsx-boolean-value": [
      "error",
      "always",
    ],
  
    /**
     * Since React removes extraneous new lines between elements when possible,
     * it is possible to end up with inline elements that are not rendered with
     * spaces between them and adjacent text.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
     */
    "react/jsx-child-element-spacing": [
      "error",
    ],
  
    /**
     * Enforce the closing bracket location for JSX multiline elements.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
     */
    "react/jsx-closing-bracket-location": [
      "error",
      "tag-aligned",
    ],
  
    /**
     * Enforce the closing tag location for multiline JSX elements.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
     */
    "react/jsx-closing-tag-location": [
      "error",
    ],
  
    /**
     * This rule allows you to enforce curly braces or disallow unnecessary curly
     * braces in JSX props and/or children.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
     */
    "react/jsx-curly-brace-presence": [
      "off",
      {
        props: "never",
        children: "always",
      }
    ],

    /**
     * This rule enforces consistent linebreaks inside of curlies of jsx curly expressions.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
     */
    "react/jsx-curly-newline": [
      "error"
    ],
  
    /**
     * This rule aims to maintain consistency around the spacing inside of JSX
     * attributes and expressions inside element children.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
     */
    "react/jsx-curly-spacing": [
      "error",
      {
        when: "never",
        children: true,
      }
    ],
  
    /**
     * This rule will enforce consistency of spacing around equal signs in JSX
     * attributes, by requiring or disallowing one or more spaces before and
     * after =.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
     */
    "react/jsx-equals-spacing": [
      "error",
      "never",
    ],
  
    /**
     * Restrict file extensions that may contain JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     */
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
  
    /**
     * This rule checks whether the first property of all JSX elements is
     * correctly placed.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
     */
    "react/jsx-first-prop-new-line": [
      "error",
      "multiline",
    ],
  
    /**
     * In JSX, a React fragment is created either with <React.Fragment>...</React.Fragment>,
     * or, using the shorthand syntax, <>...</>. This rule allows you to enforce
     * one way or the other.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
     */
    "react/jsx-fragments": [
      "error",
      "syntax",
    ],
  
    /**
     * Ensures that any component or prop methods used to handle events are
     * correctly prefixed.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
     */
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle|_handle",
        eventHandlerPropPrefix: "on",
      },
    ],
  
    /**
     * This rule is aimed to enforce consistent indentation style.
     * The default style is 4 spaces.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
     */
    "react/jsx-indent-props": [
      "error",
      2,
    ],
  
    /**
     * This rule is aimed to enforce consistent indentation style.
     * The default style is 4 spaces.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
     */
    "react/jsx-indent": [
      "error",
      2,
    ],
  
    /**
     * Warn if an element that likely requires a key prop--namely, one present
     * in an array literal or an arrow function expression.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
     */
    "react/jsx-key": [
      "error",
    ],
  
    /**
     * This option validates a specific depth for JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
     */
    "react/jsx-max-depth": [
      "off",
    ],
  
    /**
     * Limiting the maximum of props on a single line can improve readability.
     * 
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
     */
    "react/jsx-max-props-per-line": [
      "error",
      {
        maximum: 2,
        when: "always",
      }
    ],
  
    /**
     * A bind call or arrow function in a JSX prop will create a brand new function
     * on every single render. This is bad for performance, as it may cause
     * unnecessary re-renders if a brand new function is passed as a prop to a
     * component that uses reference equality check on the prop to determine if
     * it should update.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
     */
    "react/jsx-no-bind": [
      "error",
      {
        allowArrowFunctions: true,
      }
    ],
  
    /**
     * This rule prevents comment strings (e.g. beginning with // or /*) from being
     * accidentally injected as a text node in JSX statements.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
     */
    "react/jsx-no-comment-textnodes": [
      "error",
    ],
  
    /**
     * Creating JSX elements with duplicate props can cause unexpected behavior
     * in your application.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
     */
    "react/jsx-no-duplicate-props": [
      "error",
    ],
  
    /**
     * There are a couple of scenarios where you want to avoid string literals
     * in JSX. Either to enforce consistency and reducing strange behaviour, or
     * for enforcing that literals aren't kept in JSX so they can be translated.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
     */
    "react/jsx-no-literals": [
      "error",
    ],

    /**
     * In React 16.9 any URLs starting with javascript: scheme log a warning.
     * React considers the pattern as a dangerous attack surface, see details.
     * In a future major release, React will throw an error if it encounters
     * a javascript: URL.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
     */
    "react/jsx-no-script-url": [
      "error",
    ],
  
    /**
     * When creating a JSX element that has an a tag, it is often desired to have
     * the link open in a new tab using the target='_blank' attribute. Using this
     * attribute unaccompanied by rel='noreferrer noopener', however, is a severe
     * security vulnerability. This rules requires that you accompany target='_blank'
     * attributes with rel='noreferrer noopener'.
     *
     * Check https://mathiasbynens.github.io/rel-noopener/
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
     */
    "react/jsx-no-target-blank": [
      "error",
    ],
  
    /**
     * This rule helps locate potential ReferenceErrors resulting from
     * misspellings or missing components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
     */
    "react/jsx-no-undef": [
      "error",
      {
        allowGlobals: true,
      },
    ],

    /**
     * A fragment is redundant if it contains only one child, or
     * if it is the child of a html element, and is not a keyed fragment.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
     */
    "react/jsx-no-useless-fragment": [
      "error",
    ],
  
    /**
     * This option limits every line in JSX to one expression each.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
     */
    "react/jsx-one-expression-per-line": [
      "error",
      {
        allow: "literal",
      },
    ],
  
    /**
     * Enforces coding style that user-defined JSX components are defined and
     * referenced in PascalCase.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
     */
    "react/jsx-pascal-case": [
      "error",
    ],
  
    /**
     * Enforces that there is exactly one space between all attributes and after
     * tag name and the first attribute in the same line.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
     */
    "react/jsx-props-no-multi-spaces": [
      "error",
    ],

    /**
     * Enforces that there is no spreading for any JSX attribute. This enhances
     * readability of code by being more explicit about what props are received
     * by the component. It is also good for maintainability by avoiding passing
     * unintentional extra props and allowing react to emit warnings when invalid
     * HTML props are passed to HTML elements.
     */
    "react/jsx-props-no-spreading": [
      "off",
      {
        "html": "ignore",
        "explicitSpread": "ignore"
      }
    ],
  
    /**
     * Some developers prefer to sort props names alphabetically to be able to
     * find necessary props easier at the later time. Others feel that it adds
     * complexity and becomes burden to maintain.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     */
    "react/jsx-sort-props": [
      "error",
      {
        "callbacksLast": true,
      },
    ],
  
    /**
     * Enforce or forbid spaces after the opening bracket, before the closing
     * bracket, before the closing bracket of self-closing elements, and between
     * the angle bracket and slash of JSX closing or self-closing elements.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
     */
    "react/jsx-tag-spacing": [
      "error",
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
      },
    ],
  
    /**
     * JSX expands to a call to React.createElement, a file which includes React
     * but only uses JSX should consider the React variable as used.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
     */
    "react/jsx-uses-react": [
      "error",
    ],
  
    /**
     * Since 0.17.0 the ESLint no-unused-vars rule does not detect variables used
     * in JSX (see details). This rule will find variables used in JSX and mark
     * them as used.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
     */
    "react/jsx-uses-vars": [
      "error",
    ],
  
    /**
     * Wrapping multiline JSX in parentheses can improve readability and/or convenience.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
     */
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],
  
    /**
     * This rule should prevent usage of this.state inside setState calls. Such
     * usage of this.state might result in errors when two state calls are called
     * in batch and thus referencing old state and not the current state.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
     */
    "react/no-access-state-in-setstate": [
      "off",
    ],

    /**
     * Adjacent inline elements not separated by whitespace will bump up against
     * each other when viewed in an unstyled manner, which usually isn't desirable.
     */
    "react/no-adjacent-inline-elements": [
      "error"
    ],
  
    /**
     * It's a bad idea to use the array index since it doesn't uniquely identify
     * your elements. In cases where the array is sorted or an element is added
     * to the beginning of the array, the index will be changed even though the
     * element representing that index may be the same. This results in unnecessary
     * renders.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
     */
    "react/no-array-index-key": [
      "error",
    ],
  
    /**
     * Children should always be actual children, not passed in as a prop.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
     */
    "react/no-children-prop": [
      "error",
    ],
  
    /**
     * This rule helps prevent problems caused by using children and the
     * dangerouslySetInnerHTML prop at the same time. React will throw a warning
     * if this rule is ignored.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
     */
    "react/no-danger-with-children": [
      "error",
    ],
  
    /**
     * Dangerous properties in React are those whose behavior is known to be a
     * common source of application vulnerabilities. The properties names clearly
     * indicate they are dangerous and should be avoided unless great care is taken.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
     */
    "react/no-danger": [
      "error",
    ],
  
    /**
     * Several methods are deprecated between React versions. This rule will warn
     * you if you try to use a deprecated method. Use the shared settings to
     * specify the React version.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
     */
    "react/no-deprecated": [
      "error",
    ],
  
    /**
     * Updating the state after a component mount will trigger a second render()
     * call and can lead to property/layout thrashing.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
     */
    "react/no-did-mount-set-state": [
      "error",
    ],
  
    /**
     * Updating the state after a component update will trigger a second render()
     * call and can lead to property/layout thrashing.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
     */
    "react/no-did-update-set-state": [
      "error",
    ],
  
    /**
     * NEVER mutate this.state directly, as calling setState() afterwards may
     * replace the mutation you made. Treat this.state as if it were immutable.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
     */
    "react/no-direct-mutation-state": [
      "error",
    ],
  
    /**
     * Facebook will eventually deprecate findDOMNode as it blocks certain
     * improvements in React in the future. It is recommended to use callback
     * refs instead.
     *
     * See https://github.com/yannickcr/eslint-plugin-react/issues/678#issue-165177220
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
     */
    "react/no-find-dom-node": [
      "error",
    ],
  
    /**
     * isMounted is an anti-pattern, is not available when using ES6 classes, and it
     * is on its way to being officially deprecated.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
     */
    "react/no-is-mounted": [
      "error",
    ],
  
    /**
     * Declaring only one component per file improves readability and reusability
     * of components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
     */
    "react/no-multi-comp": [
      "error",
      {
        ignoreStateless: true,
      }
    ],
  
    /**
     * Warns if you have shouldComponentUpdate defined when defining a component
     * that extends React.PureComponent. While having shouldComponentUpdate will
     * still work, it becomes pointless to extend PureComponent.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
     */
    "react/no-redundant-should-component-update": [
      "error",
    ],
  
    /**
     * This rule will warn you if you try to use the ReactDOM.render() return value.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
     */
    "react/no-render-return-value": [
      "error",
    ],
  
    /**
     * When using an architecture that separates your application state from your
     * UI components (e.g. Flux), it may be desirable to forbid the use of local
     * component state. This rule is especially helpful in read-only applications
     * (that don't use forms), since local component state should rarely be
     * necessary in such cases.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
     */
    "react/no-set-state": [
      "off",
    ],
  
    /**
     * Currently, two ways are supported by React to refer to components. The
     * first way, providing a string identifier, is now considered legacy in the
     * official documentation. The documentation now prefers a second method --
     * referring to components by setting a property on the this object in the
     * reference callback.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
     */
    "react/no-string-refs": [
      "error",
    ],
  
    /**
     * When using a stateless functional component (SFC), props/context aren't
     * accessed in the same way as a class component or the create-react-class
     * format. Both props and context are passed as separate arguments to the
     * component instead. Also, as the name suggests, a stateless component does
     * not have state on this.state.
     *
     * Attempting to access properties on this can be a potential error if someone
     * is unaware of the differences when writing a SFC or missed when converting
     * a class component to a SFC.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
     */
    "react/no-this-in-sfc": [
      "error",
    ],
  
    /**
     * Ensure no casing typos were made declaring static class properties and
     * lifecycle methods. Checks that declared propTypes, contextTypes and
     * childContextTypes is supported by react-props.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
     */
    "react/no-typos": [
      "error",
    ],
  
    /**
     * This rule prevents characters that you may have meant as JSX escape
     * characters from being accidentally injected as a text node in JSX statements.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
     */
    "react/no-unescaped-entities": [
      "error",
    ],
  
    /**
     * In JSX all DOM properties and attributes should be camelCased to be
     * consistent with standard JavaScript style. This can be a possible source
     * of error if you are used to writing plain HTML.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
     */
    "react/no-unknown-property": [
      "error",
    ],
  
    /**
     * Certain legacy lifecycle methods are unsafe for use in async React
     * applications and cause warnings in strict mode. These also happen to be
     * the lifecycles that cause the most confusion within the React community.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
     */
    "react/no-unsafe": [
      "error",
    ],
  
    /**
     * Warns you if you have defined a prop type but it is never being used anywhere.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
     */
    "react/no-unused-prop-types": [
      "error",
    ],
  
    /**
     * Warns you if you have defined a property on the state, but it is not being
     * used anywhere.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
     */
    "react/no-unused-state": [
      "error",
    ],
  
    /**
     * Updating the state during the componentWillUpdate step can lead to
     * indeterminate component state and is not allowed.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
     */
    "react/no-will-update-set-state": [
      "error",
      "disallow-in-func",
    ],
  
    /**
     * React offers you two way to create traditional components: using the ES5
     * create-react-class module or the new ES6 class system. This rule allow you
     * to enforce one way or another.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
     */
    "react/prefer-es6-class": [
      "error",
      "always",
    ],
  
    /**
     * Stateless functional components are simpler than class based components
     * and will benefit from future React performance optimizations specific to
     * these components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
     */
    "react/prefer-stateless-function": [
      "error",
    ],
  
    /**
     * PropTypes improve the reusability of your component by validating the
     * received data.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     */
    "react/prop-types": [
      "off",
    ],
  
    /**
     * When using JSX, <a /> expands to React.createElement("a"). Therefore the
     * React variable must be in scope.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
     */
    "react/react-in-jsx-scope": [
      "error",
    ],
  
    /**
     * This rule aims to ensure that any non-required PropType declaration of a
     * component has a corresponding defaultProps value.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
     */
    "react/require-default-props": [
      "off",
      {
        forbidDefaultForRequired: true,
      },
    ],
  
    /**
     * This rule prevents you from creating React components without declaring a
     * shouldComponentUpdate method.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
     */
    "react/require-optimization": [
      "off",
    ],
  
    /**
     * When writing the render method in a component it is easy to forget to return
     * the JSX content. This rule will warn if the return statement is missing.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
     */
    "react/require-render-return": [
      "error",
    ],
  
    /**
     * Components without children can be self-closed to avoid unnecessary extra
     * closing tag.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     */
    "react/self-closing-comp": [
      "error",
    ],
  
    /**
     * When creating React components it is more convenient to always follow the
     * same organisation for method order to help you easily find lifecycle methods,
     * event handlers, etc.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
     */
    "react/sort-comp": [
      "off", // This is not working right now with typescript. Check https://github.com/yannickcr/eslint-plugin-react/issues/2066
      {
        order: [
          "static-methods",
          "instance-variables",
          "getters",
          "setters",
          "lifecycle",
          "instance-methods",
          "render",
        ],
        groups: {
          lifecycle: [
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ]
        }
      }
    ],

    /**
     * Some developers prefer to sort defaultProps declarations alphabetically to
     * be able to find necessary declarations easier at a later time.
     *
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md
     */
    "react/sort-default-props": [
      "error",
    ],
  
    /**
     * Some developers prefer to sort propTypes declarations alphabetically to be
     * able to find necessary declaration easier at the later time. Others feel
     * that it adds complexity and becomes burden to maintain.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
     */
    "react/sort-prop-types": [
      "error",
      {
        callbacksLast: true,
        sortShapeProp: true,
      }
    ],
  
    /**
     * Require that the value of the prop style be an object or a variable that
     * is an object.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
     */
    "react/style-prop-object": [
      "error",
    ],
  
    /**
     * There are some HTML elements that are only self-closing (e.g. img, br, hr).
     * These are collectively known as void DOM elements. If you try to give these
     * children, React will give you a warning.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
     */
    "react/void-dom-elements-no-children": [
      "error",
    ],
  },
  settings: {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "version": "16.6",
    },

    "propWrapperFunctions": [
      "forbidExtraProps",
      { "property": "freeze", "object": "Object" },
      { "property": "myFavoriteWrapper" }
    ],
  },
};
