---
id: installation
title: Instalasi
sidebar_label: Instalasi
---

1. Menginstal Badaso sangatlah mudah. Setelah laravel terinstal, kamu dapat menambahkan Badaso dengan cara berikut ini.

```
composer require uasoft-indonesia/badaso
```

2. Tambahkan Badaso *provider* dan JWT *provider* berikut ini pada ```config/app.php```.

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```php
Uasoft\Badaso\Providers\BadasoServiceProvider::class,
Tymon\JWTAuth\Providers\LaravelServiceProvider::class,
```

<!--END_DOCUSAURUS_CODE_TABS-->

3. Tambahkan juga *aliases* berikut ini pada ```config/app.php```.
<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```php
'JWTAuth' => Tymon\JWTAuth\Facades\JWTAuth::class,
'JWTFactory' => Tymon\JWTAuth\Facades\JWTFactory::class,
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

5. Tambahkan javascript *libraries* berikut ini pada ```package.json```.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
  "devDependencies": {
    "axios": "^0.18",
    "bootstrap": "^4.0.0",
    "popper.js": "^1.12",
    "cross-env": "^5.1",
    "jquery": "^3.2",
    "laravel-mix": "^2.0",
    "lodash": "^4.17.4",
    "vue": "^2.5.7"
  },
  "dependencies": {
    "@johmun/vue-tags-input": "^2.1.0",
    "chart.js": "^2.8.0",
    "luxon": "^1.25.0",
    "moment": "^2.29.1",
    "material-icons": "^0.3.1",
    "prismjs": "^1.17.1",
    "vue-chartjs": "^3.4.2",
    "vue-color": "^2.7.1",
    "vue-datetime": "^1.0.0-beta.14",
    "vue-draggable-nested-tree": "^3.0.0-beta2",
    "vue-i18n": "^8.22.4",
    "vue-prism-editor": "^1.2.2",
    "vue-router": "^3.1.3",
    "vue2-editor": "^2.10.2",
    "vuedraggable": "^2.24.3",
    "vuesax": "3.12.2",
    "vuex": "^3.1.1",
    "vuex-persistedstate": "^4.0.0-beta.1",
    "weekstart": "^1.0.1"
  }
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

6. Jalankan perintah ```npm install```.
7. Tambahkan baris berikut ini pada ```webpack.mix.js```
<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
mix.js('resources/js/badaso/app.js', 'public/js/badaso.js')
```
<!--END_DOCUSAURUS_CODE_TABS-->

8. Buka file ```.env``` lalu tambahkan baris berikut ini dan isi nilai dari masing-masing nilai jika dibutuhkan.
```
JWT_SECRET={Your JWT secret key}
FILESYSTEM_DRIVER={public by default}

#must be filled in
MIX_ADMIN_PANEL_ROUTE_PREFIX=
MIX_DEFAULT_MENU=
MIX_API_ROUTE_PREFIX=
MIX_LOG_VIEWER_ROUTE=

MIX_DATE_FORMAT=
MIX_TIME_FORMAT=
MIX_DATETIME_FORMAT=

#opsional
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
AWS_BUCKET=
AWS_URL=
#opsional
GOOGLE_DRIVE_CLIENT_ID=
GOOGLE_DRIVE_CLIENT_SECRET=
GOOGLE_DRIVE_REFRESH_TOKEN=
GOOGLE_DRIVE_FOLDER_ID=
#opsional
DROPBOX_AUTH_TOKEN=

#fill with one of all,database,files, backup will not run if BACKUP_TARGET empty
BACKUP_TARGET=
#fill with many of s3,google,dropbox, backup will not run if BACKUP_TARGET empty
BACKUP_DISK=
```

9. Tambahkan Badaso *guard* dan *auth provider* berikut ini pada ```config/auth.php```. Pastikan kamu menggunakan Badaso *guard* sebagai *auth default* pada ```config/auth.php```.
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

11. Tambahkan baris berikut ini pada ```config/database.php```
<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```php
...,
'connections' => [
    'mysql' => [
        'driver'    => 'mysql'
        ...,
        'dump' => [
           'dump_binary_path' => env('DUMP_BINARY_PATH', 'C:\xampp\mysql\bin'),
           'use_single_transaction',
           'timeout' => 60 * 5, // 5 minute timeout
        ]  
  ],
...,
```
<!--END_DOCUSAURUS_CODE_TABS-->

12. Tambahkan baris berikut ini pada ```config/filesystem.php```
<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```php
'disks' => [

  ...,

  's3' => [
    'driver' => 's3',
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION'),
    'bucket' => env('AWS_BUCKET'),
    'url' => env('AWS_URL'),
  ],

  'google' => [
    'driver' => 'google',
    'clientId' => env('GOOGLE_DRIVE_CLIENT_ID'),
    'clientSecret' => env('GOOGLE_DRIVE_CLIENT_SECRET'),
    'refreshToken' => env('GOOGLE_DRIVE_REFRESH_TOKEN'),
    'folderId' => env('GOOGLE_DRIVE_FOLDER_ID'),
  ],

  'dropbox' => [
    'driver' => 'dropbox',
    'authorization_token' => env('DROPBOX_AUTH_TOKEN'),
  ],

],
```
<!--END_DOCUSAURUS_CODE_TABS-->

13. Langkah terakhir yaitu pembuatan akun admin dengan cara mengetikan perintah berikut ini.
```
php artisan badaso:admin your@email.com --create
```
Jalankan laravel dengan perintah ```npm run watch``` jika dalam masa pengembangan.