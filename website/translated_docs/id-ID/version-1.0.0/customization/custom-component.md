---
id: custom-component
title: Custom Component
sidebar_label: Custom Component
---

Badaso menggunakan VueJS framework untuk frontend. Oleh karena itu, penambahan komponen pada frontend juga menggunakan VueJS. Blok di bawah ini adalah struktur direktori untuk menambahkan komponen baru ke frontend.

## Menambahkan sebuah Komponen

- Untuk menambahkan sebuah komponen, tambahkan ke direktori `components`.

```
📦 Your Project
 ┣ 📂 resources
 ┃ ┣ 📂 js
 ┃ ┃ ┣ 📂 badaso
 ┃ ┃ ┃ ┣ 📂 components /** you can add a component here **/
 ┃ ┃ ┃ ┃ ┗ 📜 ExampleComponent.vue
```

- Sekarang Anda dapat menggunakan komponen kustom itu di halaman Anda seperti contoh di bawah.

:::important
Custom Component akan di-import otomatis dan dapat digunakan secara langsung jika penamaan file menggunakan pascal case.
:::

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<template>
  ...
  <example-component></example-component>
  ...
</template>
```
<!--END_DOCUSAURUS_CODE_TABS-->