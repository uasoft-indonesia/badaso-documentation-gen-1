---
id: role-and-permissions
title: Role and Permissions
sidebar_label: Role and Permissions
---

**CRUD Generated**

setiap membuat sebuah CRUD menggukan crud generator, user dapat menentukan apakah generate permission atau tidak
jika generate permission, maka akan di generate 5 permission dengan format sebagai berikut
- browse_{{table_name}}
- read_{{table_name}}
- edit_{{table_name}}
- add_{{table_name}}
- delete_{{table_name}}

setiap permission yang digenerate akan otomatis di assigne ke role administrator, jadi user yang login dengan role administrator akan langsung memiliki permission tersebut

berikut adalah tampilan user management
di fitur ini user(yang login) dapat melihat, mengubah, menambah dan menghapus informasi user beserta menentukan role untuk user tersebut
![user-management](assets/user-management.png)

tampilan berikut adalah tampilan fitur role management, fitur ini untuk menentukan role apa saja yang akan digunakan pada sistem, secara default hanya ada 1 yaitu Administraot
![role-management](assets/role-management.png)

Permission management adalah fitur untuk mengelola permission / CRUD permission
![permission-management](assets/permission-management.png)

setiap role dapat memiliki minimal 1 atau lebih role
![user-role-management](assets/user-role-management.png)

setiap role memiliki permission
![role-permission-management](assets/role-permission-management.png)