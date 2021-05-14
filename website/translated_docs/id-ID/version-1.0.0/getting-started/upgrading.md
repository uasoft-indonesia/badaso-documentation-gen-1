---
id: version-1.0.0-upgrading
title: Upgrading
sidebar_label: Upgrading
original_id: upgrading
---

## Update to latest badaso version

:::important
Before updating the Badaso version, you should first backup / commit the project. 
:::

1. Update badaso to latest version with command below

```composer update uasoft-indonesia/badaso```

2. Run command below for setup project to latest badaso version configuration

```php artisan badaso:setup --force```

:::important
--force is used to overwrite previously published ones. Don't use --force if you only want to publish unpublished files.
:::

3. Migrate database if available

```php artisan migrate```

4. Re-seed badaso 

```php artisan db:seed --class=BadasoSeeder```

5. Install new Javascript packages if available 

```npm install```