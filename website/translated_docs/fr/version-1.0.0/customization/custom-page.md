---
id: custom-page
title: Custom Page
sidebar_label: Custom Page
---

Badaso menggunakan framework VueJS untuk Frontend dan [Vue-Router](https://router.vuejs.org/) untuk routing. Maka dari itu untuk menambahkan page pada frontend juga menggunakan VueJS. Blok di bawah adalah struktur direktori untuk menambahkan page baru pada frontend.

## Menambahkan Kustom Page

- Untuk menambahkan page, tambahkan file ke dalam folder `pages`.
    
```
📦Your Project
 ┣ 📂resources
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂badaso
 ┃ ┃ ┃ ┣ 📂custom-pages 
 ┃ ┃ ┃ ┃ ┣ 📂{your-page} /** create your own pages here **/
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
 ┃ ┃ ┃ ┣ 📂router   /** create your own router .js here **/
 ┃ ┃ ┃ ┃ ┣ 📂admin  /** router page that using admin layout **/
 ┃ ┃ ┃ ┃ ┣ 📂auth   /** router page that using auth layout **/
 ┃ ┃ ┃ ┃ ┣ 📂others /** router page that using your custom layout **/
 ┃ ┃ ┃ ┃ ┗ 📂public /** router page that using public layout **/
```

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
```