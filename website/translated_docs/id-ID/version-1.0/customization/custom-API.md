---
id: custom-API
title: Custom API
sidebar_label: Custom API
---

Badaso juga mendukung untuk kustomisasi API. Badaso menggunakan plugin [Vue Router](https://router.vuejs.org/) untuk routing. Blok di bawah ini adalah struktur direktori untuk menambahkan API baru.

## Menambahkan sebuah API

- Untuk menambahkan API, tambahkan ke direktori `modules` di direktori `api`.

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
