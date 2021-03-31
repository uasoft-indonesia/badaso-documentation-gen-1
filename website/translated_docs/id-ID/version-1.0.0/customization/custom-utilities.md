---
id: custom-utilities
title: Custom Utilities
sidebar_label: Custom Utilities
original_id: custom-utilities
---

Badaso juga mendukung untuk kustomisasi utilitas. Blok di bawah ini adalah struktur direktori untuk menambahkan utilitas baru.

## Menambahkan Utilitas

- Untuk menambahkan utilitas, tambahkan ke direktori `utils`.

```
📦 Your Project
 ┣ 📂 resources
 ┃ ┣ 📂 js
 ┃ ┃ ┣ 📂 badaso
 ┃ ┃ ┃ ┣ 📂 utils /** you can add a utility here **/
 ┃ ┃ ┃ ┃ ┣ 📜 example-utils.js /** example one **/
 ┃ ┃ ┃ ┃ ┗ 📜 exampleutils.js /** example two **/
```

- Untuk menggunakan utilitas yang baru saja ditambahkan, Anda dapat mencoba menggunakan sintaks di bawah ini.

:::warning
Penamaan di Badaso menggunakan camel case. Misalnya example-utils akan menjadi exampleUtils.
:::

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```js
/** in template **/
$exampleUtils.method(); /** example one **/
$exampleutils.method(); /** example two **/

/** in script **/
this.$exampleUtils.method(); /** example one **/
this.$exampleutils.method(); /** example two **/
```
<!--END_DOCUSAURUS_CODE_TABS-->
