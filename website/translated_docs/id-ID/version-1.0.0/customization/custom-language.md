---
id: custom-language
title: Custom Language
sidebar_label: Custom Language
---

Badaso juga mendukung untuk kustomisasi bahasa. Badaso menggunakan plugin [Vue-i18n by Kazupon](https://kazupon.github.io/vue-i18n/) untuk internasionalisasi. Blok di bawah ini adalah struktur direktori untuk menambahkan bahasa baru atau untuk mengganti (override) terjemahan bahasa saat ini.

## Menambahkan atau Override Bahasa

- Untuk menambahkan bahasa, tambahkan ke direktori `custom_modules` atau `modules`.
- Untuk mengganti (override) bahasa saat ini, tambahkan ke direktori `custom_modules`.

```
📦 Your Project
 ┣ 📂 resources
 ┃ ┣ 📂 js
 ┃ ┃ ┣ 📂 badaso
 ┃ ┃ ┃ ┣ 📂 lang
 ┃ ┃ ┃ ┃ ┣ 📂 custom_modules /** you can add a language here or you can override
 ┃ ┃ ┃ ┃ ┃ ┃                    current translation here too **/
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 en.js /** here I override the en locale **/
 ┃ ┃ ┃ ┃ ┃ ┗ 📜 example-lang.js
 ┃ ┃ ┃ ┃ ┣ 📂 modules /** you can add a language here too but not for override **/
 ┃ ┃ ┃ ┃ ┃ ┗ 📜 example-lang.js
```

:::important
Anda tidak dapat mengganti (override) bahasa di direktori `module` karena bahasa pada direktori ini akan di timpa setiap badaso diperbarui.
:::

- Daftarkan bahasa yang baru saja dibuat di store seperti struktur direktori dibawah ini.

:::warning
badaso.js akan ditimpa bila perintah `vendor:publish --force` dijalankan.
:::

```
📦 Your Project
 ┣ 📂 resources
 ┃ ┣ 📂 js
 ┃ ┃ ┣ 📂 badaso
 ┃ ┃ ┃ ┣ 📂 store
 ┃ ┃ ┃ ┃ ┣ 📂 modules
 ┃ ┃ ┃ ┃ ┃ ┗ 📜 badaso.js /** register your language here **/
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

- Anda dapat memilih dan menggunakan bahasa khusus yang baru saja ditambahkan pada app navigation bar.