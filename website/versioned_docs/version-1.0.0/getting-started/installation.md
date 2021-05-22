---
id: version-1.0.0-installation
title: Installation
sidebar_label: Installation
original_id: installation
---

## Preparation
Before using Badaso, please register on <a href="https://badaso.uatech.co.id/" target="_blank">Badaso</a> to get BADASO_LICENSE_KEY. This key must be included in the laravel project's .env.
Here are the steps for registering and getting a license on Badaso Dashboard.

1. On auth page, click "create and account" and enter your data on the given field

2. Enter your validation token that send to your email.

3. After successful verification, you will be directed to the dashboard page.

4. Your license can be obtained in the License menu (License)

![license](assets/dashboard-licence.png)

5. Add license to your .env

`BADASO_LICENSE_KEY={your license from number 4}`


### Installation step

After getting the license, you can proceed to Badaso installation.


1. Badaso is easy to install. After creating your new Laravel application you can include the Badaso package with the following command.

```bash
composer require uasoft-indonesia/badaso
```

2. Run the following commands to update dependencies in package.json, webpack and publish vendor provider.
```
php artisan badaso:setup
```

3. Run the following commands in sequence.
```
composer dump-autoload
php artisan migrate
php artisan db:seed --class=BadasoSeeder
```

4. Create an admin account by typing the following command.
```
php artisan badaso:admin your@email.com --create
```

5. Run the command ```npm install``` to install all of dependencies
6. Run ```npm run watch``` or ```npm run dev``` if it is under development environment or ```npm run prod``` for production environment.
7. Run your laravel project and access /dashboard path on your laravel