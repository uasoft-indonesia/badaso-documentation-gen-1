---
id: installation
title: Installation
sidebar_label: Installation
---


## Preparation
Before using Badaso, please register on <a href="https://badaso.uatech.co.id/" target="_blank">Badaso</a> to get BADASO_LICENSE_KEY. This key must be included in the laravel project's .env.
Here are the steps for registering and getting a license on Badaso Dashboard.

1. On auth page, click "create and account" and enter your data on the given field

![register](assets/dashboard-register.png)

2. Enter your validation token that send to your email.

![verify](assets/dashboard-verify.png)

3. After successful verification, you will be directed to the dashboard page.

4. Your license can be obtained in the License menu (License)

![license](assets/dashboard-licence.png)

5. Add license to your .env

`BADASO_LICENSE_KEY={your license from number 4}`


### Installation step

After getting the license, you can proceed to Badaso installation.


1. Badaso is easy to install. After creating your new Laravel application you can include the Badaso package with the following command.

```bash
composer require uasoft-indonesia/badaso:^1.0@alpha
```
:::important
Badaso is still in Alpha version. See the latest alpha version <a href="https://github.com/uasoft-indonesia/badaso/releases">here</a>.
:::

2. Add the following Badaso provider and JWT provider to ```config/app.php```.

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

3. Add the following aliases to ```config/app.php```.
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

5. Run the following commands to update dependencies in package.json and webpack.
```
php artisan badaso:setup
```

6. Open the ```env``` file then add the following lines and fill in the value of each value if needed.
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
MIX_API_ROUTE_PREFIX=admin

#Badaso provide Log Viewer feature. please set a route to access this feature
MIX_LOG_VIEWER_ROUTE="log-viewer"
```
:::important
MIX_ADMIN_PANEL_ROUTE_PREFIX, MIX_API_ROUTE_PREFIX & MIX_LOG_VIEWER_ROUTE should be different
:::

7. Add the following Badaso guard and auth provider in ```config/auth.php```. Make sure to use Badaso guard as auth default in ```config/auth.php```.
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

8. Create an admin account by typing the following command.
```
php artisan badaso:admin your@email.com --create
```

9. Run the command ```npm install``` to install all of dependencies
10. Run laravel with the command ```npm run watch``` if it is under development environment or ```npm run prod``` for production environment.