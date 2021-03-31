---
id: commands
title: Commands
sidebar_label: Commands
---

## Membuat Akun Admin

Badaso menyediakan perintah untuk membuat superadmin akun untuk dapat masuk ke halaman dashboard.
```
php artisan badaso:admin your@email.com --create
```

## Backup

Badaso menyediakan perintah untuk menjalankan laravel backup. Konfigurasi backup terdapat pada file ```.env```. Konfigurasi ini meliputi file yang di backup dan disk backup.
```
php artisan badaso:backup
```

## Seeder

Perintah berikut digunakan untuk membuat seeder berdasarkan sebuah tabel beserta datanya.
```
php artisan badaso:generate-seeder TABLE_NAME
```