---
id: version-1.0-installation
title: Installation
sidebar_label: Installation
original_id: installation
---

## Preparation
Before using Badaso, please register on <a href="https://badaso.uatech.co.id/" target="_blank">Badaso</a> to get BADASO_LICENSE_KEY. This key must be included in the laravel project's .env.
Here are the steps for registering and getting a license on Badaso Dashboard.

1. Register, enter your data name, email and password

![register](assets/dashboard-register.png)

2. After that, Badaso will send token to your email for your email verification.

![verify](assets/dashboard-verify.png)

3. After successful verification, you will be directed to the dashboard page.

4. Your license can be obtained in the License menu (License).

![license](assets/dashboard-licence.png)

5. Add license to your .env

`BADASO_LICENSE_KEY={your license from number 4}`

## Installation step

After getting the license, you can proceed to Badaso installation.

1. Badaso is easy to install. After creating your new Laravel application you can include the Badaso package with the following command.

```bash
composer require uasoft-indonesia/badaso
```

2. Add the following Badaso provider and JWT provider to ```config/app.php```.

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```php
Uasoft\Badaso\Providers\BadasoServiceProvider::class,
Tymon\JWTAuth\Providers\LaravelServiceProvider::class,
```

<!--END_DOCUSAURUS_CODE_TABS-->

3. Add the following aliases to ```config/app.php```.
<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```php
'JWTAuth' => Tymon\JWTAuth\Facades\JWTAuth::class,
'JWTFactory' => Tymon\JWTAuth\Facades\JWTFactory::class,
```
<!--END_DOCUSAURUS_CODE_TABS-->

4. Run the following commands in sequence.
```
php artisan vendor:publish --tag=Badaso
php artisan vendor:publish --provider="Spatie\Backup\BackupServiceProvider"
php artisan vendor:publish --provider="Spatie\Activitylog\ActivitylogServiceProvider" --tag="migrations"
php artisan vendor:publish --provider="Spatie\Activitylog\ActivitylogServiceProvider" --tag="config"
composer dump-autoload
php artisan migrate
php artisan db:seed --class=BadasoSeeder
```

5. Add the following javascript libraries to ```package.json```.
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
 "vuelidate": "^0.7.6",
 "vuesax": "3.12.2",
 "vuex": "^3.1.1",
 "vuex-persistedstate": "^4.0.0-beta.1",
 "weekstart": "^1.0.1"
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

6. Run the command ```npm install```
7. Add the following line to ```webpack.mix.js```
<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
mix.js('resources/js/badaso/app.js', 'public/js/badaso.js')
```
<!--END_DOCUSAURUS_CODE_TABS-->

8. Open the ```env``` file then add the following lines and fill in the value of each value if needed.
```
#REQUIRED. Set a key as secret key for generating JWT token
JWT_SECRET=

#OPTIONAL. Laravel file system driver, default public
FILESYSTEM_DRIVER=

#OPTIONAL. Set JWT Token lifetime, default 60 minutes
BADASO_AUTH_TOKEN_LIFETIME=

#REQUIRED. License key that can accuired in Badaso Dashbord
BADASO_LICENSE_KEY=

#REQUIRED. Set Route prefix for your dashboard. 
#Access dashboard via {HOST}/{MIX_ADMIN_PANEL_ROUTE_PREFIX}
MIX_ADMIN_PANEL_ROUTE_PREFIX=

#REQUIRED. Set default menu to generate menu in dashboard. 
#By default Badaso provide `admin` as default menu
MIX_DEFAULT_MENU=

#REQUIRED. Set prefix for api that badaso provide. By default 
#Badaso provide `badaso-api` as prefix. 
MIX_API_ROUTE_PREFIX=

#REQUIRED. Badaso provide Log Viewer feature. please set a route 
#to access this feature
MIX_LOG_VIEWER_ROUTE=

#OPTIONAL. Format to display date in UI
MIX_DATE_FORMAT=

#OPTIONAL. Format to display time in UI
MIX_TIME_FORMAT=

#OPTIONAL. Format to display datetime in UI
MIX_DATETIME_FORMAT=

#OPTIONAL. Set AWS credential if use aws as storage
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
AWS_BUCKET=
AWS_URL=

#OPTIONAL. Set Google Drive credential if use Google Drive as storage
GOOGLE_DRIVE_CLIENT_ID=
GOOGLE_DRIVE_CLIENT_SECRET=
GOOGLE_DRIVE_REFRESH_TOKEN=
GOOGLE_DRIVE_FOLDER_ID=

#OPTIONAL. Set Dropbox credential if use Dropbox as storage
DROPBOX_AUTH_TOKEN=

#OPTIONAL. Badaso provide backup feature. please fill variable below to 
#use this feature.
#fill with one of all,database,files, backup will not run if BACKUP_TARGET 
#empty
BACKUP_TARGET=
#fill with many of s3,google,dropbox, backup will not run if BACKUP_TARGET 
#empty
BACKUP_DISK=
```

9. Add the following Badaso guard and auth provider in ```config/auth.php```. Make sure to use Badaso guard as auth default in ```config/auth.php```.
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

11. Add the following line to the ```config/database.php```
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

12. Add the following line to the ```config/filesystem.php```
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

13. The final step is creating an admin account by typing the following command.
```
php artisan badaso:admin your@email.com --create
```
Run laravel with the command ```npm run watch``` if it is under development environment.