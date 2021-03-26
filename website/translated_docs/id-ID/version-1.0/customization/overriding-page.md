---
id: overriding-page
title: Overriding Page
sidebar_label: Overriding Page
---

Setiap CRUD yang dihasilkan dari CRUD Generator menggunakan view yang sama. Namun ada kalanya view nya harus diubah sesuai dengan kebutuhan. Badaso menyediakan fitur untuk custom view. Untuk custom view ini, Badaso akan memeriksa apakah ada view yang dibuat pada custom-pages, jika tidak ada, maka Badaso akan menggunakan view default.

Badaso berasumsi pengguna sudah paham dengan dasar vue. Maka dari itu Badaso tidak menjelaskan bagaimana membuat component di vue. 

Berikut langkah-langkah untuk membuat custom view guna menyesuaikan tampilan dari CRUD Generator.

1. Buat file vue pada resource seperti struktur berikut.
```
📦Your Project
 ┣ 📂resources
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂badaso
 ┃ ┃ ┃ ┣ 📂custom_pages /** override the view here **/
 ┃ ┃ ┃ ┃ ┣ 📂{slug} /** put the override you want here, for example crud-generated **/
 ┃ ┃ ┃ ┃ ┃ ┣ 📜browse.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜read.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜edit.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜add.vue
 ┃ ┃ ┃ ┃ ┃ ┗ 📜sort.vue
```

Catatan:
* browse.vue: Tambahkan jika butuh mengubah tampilan index/list.
* read.vue: Tambahkan jika butuh mengubah tampilan halaman detail.
* edit.vue: Tambahkan jika butuh mengubah tampilan halaman edit.
* add.vue: Tambahkan jika butuh mengubah tampilan halaman add.
* sort.vue: Tambahkan jika butuh mengubah tampilan halaman pengurutan.

:::important
Anda dapat melakukan override pada semua pages yang ada di dalam direktori `pages` kecuali `index.vue`
:::