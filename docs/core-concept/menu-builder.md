---
id: menu-builder
title: Menu Builder
sidebar_label: Menu Builder
---

berikut adalah tampilan daftar menu
![menu-management](assets/menu-management.png)

tampilan berikut adalah tangkapan layar menu builder, di halaman ini user dapat mengatur tata letak dan urutan menu
![menu-builder](assets/menu-builder.png)

user juga bisa mengedit dan menambahkan menu baru
tambah
![add-menu-item](assets/add-menu-item.png)

edit
![edit-menu-item](assets/edit-menu-item.png)

setiap menu bisa dipasangkan satu atau beberapa permission
jika user yang login memiliki salah satu dari permission tersebut
maka menu ini akan muncul pada sidebar
jika menu ini tidak dipasangkan dengan permission, maka menu akan selalu muncul
![set-menu-item-permissions](assets/set-menu-item-permissions.png)

```
MIX_DEFAULT_MENU
```

pada frontend, menu di fetch pada file store.js
berikut struktur directori untuk mengubah pemanggilan api menu
````
- your project
    - resources
        - js
            - badaso
                - store
                    - store.js 
                        - FETCH_MENU
```