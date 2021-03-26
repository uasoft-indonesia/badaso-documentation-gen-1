---
id: custom-page
title: Custom Page
sidebar_label: Custom Page
---

Badaso menggunakan framework VueJS untuk Frontend. Maka dari itu untuk menambahkan page pada frontend juga menggunakan VueJS. Blok di bawah adalah struktur direktori untuk menambahkan page baru pada frontend.

## Menambahkan Kustom Page

- Untuk menambahkan page, tambahkan file ke dalam folder `custom-pages`.
- Perubahan layout dapat diubah di folder `layout`.
    
```
📦Your Project
 ┣ 📂resources
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂badaso
 ┃ ┃ ┃ ┣ 📂layout /** you can modify layout here **/
 ┃ ┃ ┃ ┃ ┣ 📂admin-panel
 ┃ ┃ ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┃ ┗ 📂public
 ┃ ┃ ┃ ┣ 📂custom-pages /** create your own pages here **/
 ┃ ┃ ┃ ┃ ┣ 📂{slug}
 ┃ ┃ ┃ ┃ ┃ ┣ 📜browse.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜read.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜edit.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜add.vue
 ┃ ┃ ┃ ┃ ┃ ┗ 📜sort.vue
```

- Untuk mengakses page, pengguna harus menambahkan router pada direktori router.

```
📦Your Project
 ┣ 📂resources
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂badaso
 ┃ ┃ ┃ ┣ 📂router /** create your own router .js here **/
 ┃ ┃ ┃ ┃ ┗ 📜example-router.js
```