---
id: version-1.0-overriding-controller
title: Overriding Controller
sidebar_label: Overriding Controller
original_id: overriding-controller
---

Every CRUD generated through the CRUD generator will use the same controller. there are times when this controller needs adjustments, such as adding logic that is not provided by Badaso.

To create a new controller and use it in the generated CRUD (overridding), there are several steps that need to be done.
1. Create a laravel controller as usual.
```
php artisan make:controller NewController
```

2. Extends the controller to `BadasoBaseController`.

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

1. Overrides the `BadasoBaseController` method. The following methods are available for overrides.
    - all
    - read
    - edit
    - add
    - delete
    
2. Edit CRUD in CRUD Management, add the new controller created.