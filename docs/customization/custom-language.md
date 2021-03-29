---
id: custom-language
title: Custom Language
sidebar_label: Custom Language
---

Badaso also supports for customization your language. Badaso uses the [Vue-i18n by Kazupon](https://kazupon.github.io/vue-i18n/) plugin for internationalization. The block below is a directory structure for adding a new language or for overridding current language translation.

## Add or Override the Language

- To add a language, add it to the `custom_modules` or `modules` directory.
- To override current language, add it the the `custom_modules` directory.

```
📦Your Project
 ┣ 📂resources
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂badaso
 ┃ ┃ ┃ ┣ 📂lang
 ┃ ┃ ┃ ┃ ┣ 📂custom_modules /** you can add a language here or you can override
 ┃ ┃ ┃ ┃ ┃ ┃                    current translation here too **/
 ┃ ┃ ┃ ┃ ┃ ┣ 📜en.js /** here I override the en locale **/
 ┃ ┃ ┃ ┃ ┃ ┗ 📜example-lang.js
 ┃ ┃ ┃ ┃ ┣ 📂modules /** you can add a language here too but not for override **/
 ┃ ┃ ┃ ┃ ┃ ┗ 📜example-lang.js
```

:::important
You cannot override the language in the `module` directory because the language in this directory will be overwritten every time the badaso update.
:::

- Register your language in store in below directory structure.

:::warning
badaso.js will be overwritten if you call the command `vendor:publish --force`.
:::

```
📦Your Project
 ┣ 📂resources
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂badaso
 ┃ ┃ ┃ ┣ 📂store
 ┃ ┃ ┃ ┃ ┣ 📂modules
 ┃ ┃ ┃ ┃ ┃ ┗ 📜badaso.js /** register your language here **/
```

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
import ...

export default {
  state: {
    ...,
    locale: [
      {
        key: "en",
        label: "English",
      },
      {
        key: "id",
        label: "Indonesia",
      },
      {
        key: "example-lang", /** register your language here **/
        label: "Example Language" /** add label to your language **/
      }
    ],
    selectedLocale: {
      key: "en", /** you could also change the default locale **/
      label: "English",
    },
    ...,
  },
  ...,
};
```
<!--END_DOCUSAURUS_CODE_TABS-->

- You can select and use the custom language that you add in app navigation bar.