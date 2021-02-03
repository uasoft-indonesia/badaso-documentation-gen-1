---
id: menu-builder
title: Pembuat Menu
sidebar_label: Pembuat Menu
---

Berikut merupakan tampilan daftar menu.

![menu-management](assets/menu-management.png)

Tampilan berikut merupakan tampilan dari pembuat menu atau *menu builder*, di halaman ini user dapat mengatur tata letak dan urutan menu.

![menu-builder](assets/menu-builder.png)

## Tambah atau Edit Menu

### Tambah Menu

Pada tampilan berikut, tersedia beberapa kolom yang harus diisi ketika membuat sebuah menu yaitu:

* Title: Teks yang akan tampil pada menu.
* URL: Halaman URL yang akan diakses ketika menu di klik.
* Target: Tipe cara akses URL, akses URL di *tab* saat ini atau akses URL di *tab* baru
* Icon: Ikon yang akan tampil pada menu. Untuk daftar ikon dapat dilihat pada halaman [Material Icon](https://material.io/resources/icons/?style=baseline).
* Color Picker: Warna yang akan tampil pada *background* menu.

![add-menu-item](assets/add-menu-item.png)

### Ubah Menu

![edit-menu-item](assets/edit-menu-item.png)

### Izin Menu

Setiap menu bisa dipasangkan satu atau beberapa permission. jika pengguna yang masuk memiliki salah satu dari permission tersebut, maka menu tersebut akan muncul pada sidebar. Jika menu ini tidak dipasangkan dengan permission, maka menu akan selalu muncul.

![set-menu-item-permissions](assets/set-menu-item-permissions.png)

```
MIX_DEFAULT_MENU
```

Pada frontend, menu diambil dari file store.js. Berikut struktur direktori untuk mengubah pemanggilan API menu.

```
- your project
    - resources
        - js
            - badaso
                - store
                    - store.js 
                        - FETCH_MENU
```