---
id: installation
title: Instalasi
sidebar_label: Instalasi
---

## Persiapan
Sebelum menggunakan Badaso, Silahkan registrasi pada <a href="https://badaso.uatech.co.id/" target="_blank">Badaso</a> untuk mendapatkan BADASO_LICENSE_KEY. Key ini harus disertakan pada .env project laravel.
Berikut langkah-langkah untuk mendaftar dan mendapatkan lisensi di Badaso Dashboard.

1. Pada halaman login, klik "create an account", lalu masukan data anda sesuai isian yang tersedia

![register](assets/dashboard-register.png)

2. Masukan kode token yang dikirimkan ke email and

![verify](assets/dashboard-verify.png)

3. Setelah berhasil verifikasi, anda akan diarahkan ke halaman dashboard

4. Lisensi anda dapat diperoleh pada menu Lisensi(License)

![license](assets/dashboard-licence.png)

5. Tambahkan lisensi pada .env

`BADASO_LICENSE_KEY={your license from number 4}`

### Langkah Instalasi

Setelah mendapatkan lisensi, anda dapat melanjutkan ke instalasi Badaso.

1. Menginstal Badaso sangatlah mudah. Setelah laravel terinstal, kamu dapat menambahkan Badaso dengan perintah berikut ini.

```bash
composer require uasoft-indonesia/badaso:^1.0@alpha
```

2. Tambahkan Badaso provider dan JWT provider berikut ini pada ```config/app.php```.

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```php
'providers' => [
  ...,
  Uasoft\Badaso\Providers\BadasoServiceProvider::class,
  Tymon\JWTAuth\Providers\LaravelServiceProvider::class,
]
```

<!--END_DOCUSAURUS_CODE_TABS-->

3. Tambahkan juga aliases berikut ini pada ```config/app.php```.
<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```php
'aliases' => [
  ...,
  'JWTAuth' => Tymon\JWTAuth\Facades\JWTAuth::class,
  'JWTFactory' => Tymon\JWTAuth\Facades\JWTFactory::class,
]
```
<!--END_DOCUSAURUS_CODE_TABS-->

4. Jalankan perintah berikut ini secara berurutan.
```
php artisan vendor:publish --tag=Badaso
php artisan vendor:publish --provider="Spatie\Backup\BackupServiceProvider"
php artisan vendor:publish --provider="Spatie\Activitylog\ActivitylogServiceProvider" --tag="migrations"
php artisan vendor:publish --provider="Spatie\Activitylog\ActivitylogServiceProvider" --tag="config"
composer dump-autoload
php artisan migrate
php artisan db:seed --class=BadasoSeeder
```

5. Jalankan perintah berikut untuk memperbarui dependensi pada package.json dan webpack.
```
php artisan badaso:setup
```


6. Buka file ```.env``` lalu tambahkan baris berikut ini dan isi nilai dari masing-masing nilai jika dibutuhkan.
```
#Set a key as secret key for generating JWT token
JWT_SECRET=

#Set JWT Token lifetime, default 60 minutes
BADASO_AUTH_TOKEN_LIFETIME=

#License key that can accuired in Badaso Dashbord
BADASO_LICENSE_KEY=

#Set default menu to generate menu in dashboard. 
#By default Badaso provide `admin` as default menu
MIX_DEFAULT_MENU=admin

#Set Route prefix for your dashboard. 
#Access dashboard via {HOST}/{MIX_ADMIN_PANEL_ROUTE_PREFIX}
MIX_ADMIN_PANEL_ROUTE_PREFIX=dashboard

#Set prefix for api that badaso provide. By default 
#Badaso provide `badaso-api` as prefix. 
MIX_API_ROUTE_PREFIX=api

#Badaso provide Log Viewer feature. please set a route to access this feature
MIX_LOG_VIEWER_ROUTE="log-viewer"
```
:::important
MIX_ADMIN_PANEL_ROUTE_PREFIX, MIX_API_ROUTE_PREFIX & MIX_LOG_VIEWER_ROUTE harus berbeda
:::

7. Tambahkan Badaso guard dan auth provider berikut ini pada ```config/auth.php```. Pastikan kamu menggunakan Badaso guard sebagai auth default pada ```config/auth.php```.
<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```php
return [
  'defaults' => [
    'guard' => 'badaso_guard',
    'passwords' => 'users',
  ],

  'guards' => [
    ...,
    'badaso_guard' => [
        'driver' => 'jwt',
        'provider' => 'badaso_users',
    ],
  ],

  'providers' => [
    ...,
    'badaso_users' => [
        'driver' => 'eloquent',
        'model' => \Uasoft\Badaso\Models\User::class,
    ],
  ],

  ...,
]
```
<!--END_DOCUSAURUS_CODE_TABS-->


8. Buat akun admin dengan cara mengetikan perintah berikut ini.
```
php artisan badaso:admin your@email.com --create
```

9. Jalankan perintah ```npm install``` untuk menginstall semua dependensi
10. jalankan laravel dengan perintah ```npm run watch``` jika dalam pengembangan atau ```npm run prod``` untuk production.