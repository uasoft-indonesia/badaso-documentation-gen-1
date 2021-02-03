---
id: role-and-permissions
title: Wewenang dan Izin
sidebar_label: Wewenang dan Izin
---

## CRUD *Generated*

Setiap CRUD dibuat menggunakan CRUD *generator*, kamu dapat menentukan apakah ingin *generate* izin atau tidak. Jika *generate* izin, maka akan di *generate* 5 izin secara otomatis dengan format sebagai berikut.
- browse_{{ TABLE_NAME }}
- read_{{ TABLE_NAME }}
- edit_{{ TABLE_NAME }}
- add_{{ TABLE_NAME }}
- delete_{{ TABLE_NAME }}

sebagai contoh:

* browse_posts
* read_posts
* edit_posts
* add_posts
* delete_posts

Setiap izin yang di-*generate* akan otomatis di *assign* ke wewenang administrator, jadi pengguna yang masuk dengan wewenang administrator akan langsung memiliki izin tersebut

## Manajemen Pengguna

Berikut merupakan tampilan manajemen pengguna. Pada fitur ini pengguna yang telah masuk dapat melihat, mengubah, menambah dan menghapus informasi user beserta menentukan wewenang untuk user tersebut.

![user-management](assets/user-management.png)

## Manajemen Wewenang

Tampilan berikut merupakan tampilan fitur manajemen wewenang, fitur ini yang berfungsi untuk menentukan wewenang apa saja yang akan digunakan pada sistem, secara *default* hanya ada 1 yaitu Administrator.

![role-management](assets/role-management.png)

## Manajemen Izin

Manajemen Izin merupakan fitur untuk mengelola perizinan / CRUD *permission*. Berikut merupakan tampilan dari manajemen izin.

![permission-management](assets/permission-management.png)

## Manajemen Wewenang Pengguna

Setiap pengguna dapat memiliki minimal 1 atau lebih wewenang. Berikut merupakan tampilan dari manajemen wewenang untuk pengguna.

![user-role-management](assets/user-role-management.png)

## Manajemen Izin Wewenang

Setiap wewenang memiliki izin. Berikut merupakan tampilan dari manajemen izin wewenang.

![role-permission-management](assets/role-permission-management.png)