---
id: overriding-controller
title: Overriding Controller
sidebar_label: Overriding Controller
---

Setiap CRUD yang di-generate melalui CRUD generator akan menggunakan controller yang sama. Ada kalanya controller ini butuh penyesuaian, seperti penambahan logika yang tidak disediakan oleh Badaso.

Untuk membuat controller baru dan menggunakannya pada CRUD yang telah di-generate, ada beberapa langkah yang perlu dilakukan, yaitu:
1. Membuat controller laravel seperti biasa.
```
php artisan make:controller NewController
```

2. Menambahkan extends ke `BadasoBaseController` pada controller yang baru di buat.

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```
<?php

namespace App\Http\Controllers;

class NewController extends Uasoft\Badaso\Controllers\BadasoBaseController
{
    //...
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

3. Menimpa method `BadasoBaseController`. Berikut method yang tersedia.
    - all
    - read
    - edit
    - add
    - delete

4. Edit CRUD pada CRUD Management, tambahkan controller yang baru di buat.