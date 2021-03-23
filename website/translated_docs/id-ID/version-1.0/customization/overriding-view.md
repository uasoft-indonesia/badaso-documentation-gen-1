---
id: version-1.0-overriding-view
title: Overriding View
sidebar_label: Overriding View
---

Setiap CRUD yang dihasilkan dari CRUD generator menggunakan view yang sama. Namun ada kalanya view nya harus diubah sesuai dengan kebutuhan. Badaso menyediakan fitur untuk custom view. Untuk custom view ini, Badaso akan memeriksa apakah ada view yang dibuat pada custom-pages, jika tidak ada, maka Badaso akan menggunakan view default.

Badaso berasumsi pengguna sudah paham dengan dasar vue. Maka dari itu Badaso tidak menjelaskan bagaimana membuat component di vue. 

Berikut langkah-langkah untuk membuat custom view guna menyesuaikan tampilan dari CRUD Generator.

1. Buat file vue pada resource seperti struktur berikut
```
root_project
    |-- resources
        |-- js
            |-- badaso
                |-- custom_pages
                    |-- {slug}
                        |-- browse.vue
                        |-- read.vue
                        |-- edit.vue
                        |-- add.vue
                        |-- sort.vue
```
Catatan:
* browse.vue -> tambahkan jika butuh mengubah tampilan index/list
* read.vue -> tambahkan jika butuh mengubah tampilan halaman detail
* edit.vue -> tambahkan jika butuh mengubah tampilan halaman edit
* add.vue -> tambahkan jika butuh mengubah tampilan halaman add
* sort.vue -> tambahkan jika butuh mengubah tampilan halaman pengurutan


2. Ada kalanya pengguna hanya butuh mengubah tampilan tapi tidak dengan scriptnya. untuk mendapatkan source default Badaso dapat di ambil pada
```
root_project
    |-- resources
        |-- js
            |-- badaso
                |-- pages
                    |-- crud-template
                        |-- browse.vue
                        |-- read.vue
                        |-- edit.vue
                        |-- add.vue
                        |-- sort.vue
```