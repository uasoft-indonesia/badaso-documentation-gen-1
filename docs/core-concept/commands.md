---
id: commands
title: Commands
sidebar_label: Commands
---

badaso menyediakan command untuk membuat superadmin untuk login ke halaman dashboard
```
php artisan badaso:admin your@email.com --create
```

badaso menyediakan command untuk menjalankan laravel backup
config backup ada pada env
config ini meliputi file yand di backup dan disk backup
```
php artisan badaso:backup
```

command berikut digunakan untuk membuat seeder berdasarkan sebuah table beserta data
```
php artisan badaso:generate-seeder {{table_name}}
```