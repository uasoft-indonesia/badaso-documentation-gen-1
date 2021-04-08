---
id: version-1.0.0-upgrading
title: Upgrading
sidebar_label: Upgrading
original_id: upgrading
---

## Updating Existing Badaso

Before updating the Badaso version, you should first backup the project. 

Publish all files from Badaso and overwrite the previously published ones.

```php artisan vendor:publish --tag=Badaso --force```

Publish only seeder files from Badaso and overwrite seeders that were previously published.

```php artisan vendor:publish --tag=BadasoSeeder --force```

Publish only config files from badaso and overwrite previously published config.

```php artisan vendor:publish --tag=BadasoConfig --force```

Publish only resource files from badaso, and overwrite previously published resources.
Resource files include vue file, lang file and assets.

```php artisan vendor:publish --tag=BadasoResource --force```

:::important
--force is used to overwrite previously published ones. Don't use --force if you only want to publish unpublished files.
:::