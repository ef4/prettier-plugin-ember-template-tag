# prettier-plugin-ember-template-tag

[![CI](https://github.com/gitKrystan/prettier-plugin-ember-template-tag/actions/workflows/ci.yml/badge.svg)](https://github.com/gitKrystan/prettier-plugin-ember-template-tag/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/prettier-plugin-ember-template-tag.svg)](https://www.npmjs.com/package/prettier-plugin-ember-template-tag)
[![license](https://img.shields.io/npm/l/prettier-plugin-ember-template-tag.svg)](https://github.com/gitKrystan/prettier-plugin-ember-template-tag/blob/main/LICENSE.md)

A [Prettier](https://prettier.io/) plugin for formatting [Ember template tags](https://rfcs.emberjs.com/id/0779-first-class-component-templates/) in both `.gjs` and `.gts` files. See also [Ember Template Imports](https://github.com/ember-template-imports/ember-template-imports).

## Usage

1. Install:

   NPM:

   ```bash
   npm install --save-dev prettier prettier-plugin-ember-template-tag
   ```

   Yarn:

   ```bash
   yarn add --dev prettier prettier-plugin-ember-template-tag
   ```

   PNPM:

   ```bash
   pnpm add --save-dev prettier prettier-plugin-ember-template-tag
   ```

1. Configure with [prettierrc](https://prettier.io/docs/en/configuration.html):

   ```js
   // .prettierrc.js
   module.exports = {
     // ...
     plugins: ['prettier-plugin-ember-template-tag'],
   };
   ```

1. Run `npm prettier --write .`

## Opinions

This plugin works by weaving together Prettier's standard [babel-ts](https://prettier.io/playground/#N4Igxg9gdgLgprEAuEBLWcBOAzAhmOAAgFkBPASQx3yOAB0pDDsIIAKASiUIGcZN0AcwA0DJgCNcmbgEFMmXKQA8UAK4BbcVgB8oqAF8GDOAA8ADhEwxCucXwVhrYADa4ePQgDFWhVOrPOcOoIMB5klPDUBIT0jMysnDFiTCmpTAD06YQAKgDyACK53JhwMKqYjLiVjqq4zoQAbnWqRAAWWHDJaYQlZRWEAOTtzs4QA10phnGCpYSSmImxqb3ljADaTACMehNMAEzChADMeqkAuslTUwwwpGZEAEpwAI4tfNl3RAC8gwDiAKLZAaEAA+gwAEv8ZPlgWCBgAFXIAZSBoMG8IAqqi4bl4dlyLkAHJI2GDADCRMJ-zJ2MG+X+ABlAf9SQNsg8ZGSWSBhCAIGYYKhoDxkKApJgIAB3eFSBAilB1SWKEW88QOADWpSRuGCDPQcGQeGcPDgqo1WrM+CEyH4LV5QS0ABNHXBHQyqoJajNvJh1LgYIKoIJkCBcKoYBAeSBWjB1M4AOqtVDwHiWghIuXJ1ANZOkENgdxR9AmqzwhSCP2Guom3kAKx4JiRQkCAEVVBB4FXjaaQJbMCWQ5ItM4ALShKNmASweOoR0wVrIAAcAAZeZOICb4wozCHJ3ASw0DbzXh24GX+fLQzwR1A4K7XVGSq9UCUy7gK7guzWQCb1KgbZgdo-s2cBtqeX49jAtgznOC5IAcID8LgqDOEIZIQOolYoPuACsUaqCa2S2PKRrfg0LSUC6sBImAAgCjIUCOkityBBB+j6EAA) and [glimmer](https://prettier.io/playground/#N4Igxg9gdgLgprEAuEACVAeAJgSwG7qFgA2AhgM7kC8AOiAjAE4CedhqAfDVOhgBYBGDsGDoYOGMTjsAvjIwB6QVx6ZcBdCQrU6AIwhZWIFe1OERhfYbOE53Reo6YFjkABoQEAA7jo5ZKCkjIwQAO4ACkEI-iikxKGkzP4euoykYADWcDAAyqQAtnAAMjhQcMgAZnHkcClpmdk5XumlAObITACutfT5unBYWANFpFCtnaStcABiEIz5pDDiY8ggpJ0wEO4gfDD5xADqfBJw5M1gcDnREvgSzKtglNulNYww4WmtC5XVPQBW5AAHjk2lIAIqdCDwH7EGoeZqMV6rVrEHD5QqMbZeRilGAHHBYGB8ZAADgADPCQjUDmkvKtsac4Iw8OUPABHSHwD7eGJrcgAWjKAwG20YcA5ODFH0m3yQVVhPRq+RwHUY3Q85FBcAhUPKct+HhgpF0+MJxKQACZDWkcKixgBhCDo0irU4AVm2nRqABVjTF5XCQHhugBJKBDWA5MA4nwAQXDORgzCkMJqciAA) parsers, so it doesn't have many opinions of its own.

With that said, I did have to make some decisions about when and where to include or omit semicolons. You can read more about and comment on my decision process [on this RFC](https://github.com/gitKrystan/prettier-plugin-ember-template-tag/issues/1).

## Configuration

These configuration options are available in addition to [Prettier's standard config for JavaScript and Handlebars files](https://prettier.io/docs/en/options.html).

| Name                  | Default | Description                                                                                             |
| --------------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| `templateSingleQuote` | `false` | [Same as in Prettier](https://prettier.io/docs/en/options.html#quotes) but affecting only template tags |

<!-- TODO: | `templatePrintWidth`  | `80`    | [Same as in Prettier](https://prettier.io/docs/en/options.html#print-width) but affecting only template tags | -->

## Editor integration

### VSCode

1. Install Prettier and this plugin as [shown above.](#usage)
1. Install the [`Prettier - Code Formatter` VSCode Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
1. Reload your VSCode window.
1. The format command and format-on-save should now work for `.gjs` and `.gts` files. You might need to wait a few seconds for the Prettier extension to register the plugin. If this does not work, you can manually set Prettier as the default formatter for `.gjs` and `.gts` as shown below, like so, but please file an issue if you need to do this:

   ```jsonc
   // .vscode/settings.json
   {
     "[gjs]": {
       // "editor.formatOnSave": true,
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     },

     "[gts]": {
       // "editor.formatOnSave": true,
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     }
   }
   ```

## Ignoring code

Because gts/gjs files include both JavaScript and Glimmer template code, you'll need to use the appropriate prettier-ignore comment for the code you are ignoring:

```js
export default class MyComponent extends Component {
  // prettier-ignore
  cells = matrix(
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  )

  <template>
    {{! prettier-ignore }}
    {{#each this.cells as |cell|}}{{cell.contents}}{{/each}}
  </template>
}
```

To ignore the entire template, use a JavaScript `//prettier-ignore` comment before the opening `<template>` tag:

```js
export default class MyComponent extends Component {
  // prettier-ignore
  <template>
    This whole template is ignored
    <MyUglyComponent     "shall"     be="preserved">
      <ThisPart
        is  =  "also preserved as is"
      />
    </MyUglyComponent>
  </template>
}
```

## Bugs

If you find a bug, please file a bug report! See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.
