---
id: custom-API-helper
title: Custom API Helper
sidebar_label: Custom API Helper
---

Badaso juga mendukung untuk kustomisasi API helper. Blok di bawah ini adalah struktur direktori untuk menambahkan API helper baru.

## Menambahkan sebuah API

- Untuk menambahkan API helper, tambahkan ke direktori `modules` di direktori `api`.

```
📦Your Project
 ┣ 📂resources
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂badaso
 ┃ ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┃ ┣ 📂modules /** you can add an API here **/
 ┃ ┃ ┃ ┃ ┃ ┗ 📜example-api.js
```

- Di bawah ini adalah contoh HTTP request method yang dapat Anda gunakan.

<!--DOCUSAURUS_CODE_TABS-->
<!--GET-->
```js
example(data = {}) {
  let ep = '/example';
  let qs = QueryString(data);
  let url = ep + qs;
  return resource.get(url);
},
```
<!--POST-->
```js
example(data) {
  return resource.post('/example', data);
},
```
<!--PUT-->
```js
example(data) {
  return resource.put('/example', data);
},
```
<!--PATCH-->
```js
example(data) {
  return resource.patch('/example', data);
},
```
<!--DELETE-->
```js
example(data) {
  let paramData = {
    data: data,
  };
  return resource.delete('/example', paramData);
},
```
<!--END_DOCUSAURUS_CODE_TABS-->

- Di bawah ini adalah contoh penerapan dari kustom API helper.

<!--DOCUSAURUS_CODE_TABS-->
<!--Template-->
```js
$api.exampleApi.example(data)
```
<!--Script-->
```js
this.$api.exampleApi.example(data)
```
<!--END_DOCUSAURUS_CODE_TABS-->