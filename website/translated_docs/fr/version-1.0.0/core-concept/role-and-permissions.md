---
id: role-and-permissions
title: Role and Permissions
sidebar_label: Role and Permissions
---

## CRUD Generated

Setiap CRUD dibuat menggunakan CRUD generator, kamu dapat menentukan apakah ingin generate permission atau tidak. Jika generate permission, maka akan di generate 5 permission secara otomatis dengan format sebagai berikut.

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

Setiap permission yang di-generate akan otomatis di assign ke role administrator, jadi user yang masuk dengan role administrator akan langsung memiliki permission tersebut.

## Manajemen User

Berikut merupakan tampilan manajemen user. Pada fitur ini user yang telah login dapat melihat, mengubah, menambah dan menghapus informasi user beserta menentukan role untuk user tersebut.

![user-management](assets/user-management.png)

## Manajemen Role

Tampilan berikut merupakan tampilan fitur manajemen role, fitur ini yang berfungsi untuk menentukan role apa saja yang akan digunakan pada sistem, secara default hanya ada 1 yaitu Administrator.

![role-management](assets/role-management.png)

## Manajemen Permission

Manajemen permission merupakan fitur untuk mengelola permission atau CRUD permission. Berikut merupakan tampilan dari manajemen permission.

![permission-management](assets/permission-management.png)

## Manajemen User Role

Setiap user dapat memiliki minimal 1 atau lebih role. Berikut merupakan tampilan dari manajemen role untuk user.

![user-role-management](assets/user-role-management.png)

## Manajemen Role Permission

Setiap wewenang memiliki permission. Berikut merupakan tampilan dari manajemen role permission.

![role-permission-management](assets/role-permission-management.png)