---
id: commands
title: Perintah
sidebar_label: Perintah
---

## Membuat Akun Admin

Badaso menyediakan perintah untuk membuat *superadmin* akun untuk dapat masuk ke halaman dashboard.
```
php artisan badaso:admin your@email.com --create
```

## Pencadangan

Badaso menyediakan perintah untuk menjalankan pencadangan laravel. Konfigurasi pencadangan terdapat pada file ```.env```. Konfigurasi ini meliputi file yang di cadangkan dan disk pencadangan.
```
php artisan badaso:backup
```

## *Seeder*

Perintah berikut digunakan untuk membuat *seeder* berdasarkan sebuah tabel beserta datanya.
```
php artisan badaso:generate-seeder TABLE_NAME
```