---
id: overriding-controller
title: Overriding Controller
sidebar_label: Overriding Controller
---

Setiap CRUD yang digenerate melalui CRUD generator akan menggunakan controller yang sama. ada kalanya controller ini butuh penyesuaian, seperti penambahan logika yang tidak disediakan oleh Badaso. 

Untuk membuat controller baru dan menggunakannya pada CRUD yang telah digenerate, ada beberapa langkah yang perlu dilakukan, yakni:
1. Membuat controller laravel seperti biasa
```
php artisan make:controller NewController
```
2. Menambahkan extends ke `BadasoBaseController` pada controller yang baru di buat
```
<?php

namespace App\Http\Controllers;

class NewController extends Uasoft\Badaso\Controllers\BadasoBaseController
{
    //...
}
```
3. Menimpa method `BadasoBaseController. Berikut method yang tersedia
    - all
    - read
    - edit
    - add
    - delete
4. Edit CRUD pada CRUD Management, tambahkan controller yang baru di buat