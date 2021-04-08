---
id: version-1.0-upgrading
title: Upgrading
sidebar_label: Upgrading
---

## Updating Existing Badaso

Sebelum memperbarui versi Badaso, sebaiknya di backup terlebih dahulu projectnya.

Publish semua file dari Badaso dan menimpa file yang sudah di publish sebelumnya.

```php artisan vendor:publish --tag=Badaso --force```

Publish hanya file seeder dari Badaso, dan menimpa seeder yang sudah di publish sebelumnya

```php artisan vendor:publish --tag=BadasoSeeder --force```

Publish hanya file config dari Badaso, dan menimpa config yang sudah di publish sebelumnya.

```php artisan vendor:publish --tag=BadasoConfig --force```

Publish hanya file resource dari Badaso, dan menimpa resource yang sudah di publish sebelumnya. File resource meliputi: vue file, lang file dan assets.

```php artisan vendor:publish --tag=BadasoResource --force```

:::important
--force digunakan untuk menimpa yang sudah pernah di publish sebelumnya. Jangan gunakan --force jika hanya ingin publish file yang belum di publish
:::