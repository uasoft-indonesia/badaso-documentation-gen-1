---
id: helpers
title: Helpers
sidebar_label: Helpers
---

## Frontend

### ```formatDate```

Badaso menyediakan utilitas helper untuk mengubah tanggal sesuai dengan format yang ditentukan.
Untuk konfigurasi format tanggal dapat diubah pada file ```.env```.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
/**
 ** Gunakan di template
 **/
$helper.formatDate(tanggal)

/**
 ** Gunakan di script
 **/
this.$helper.formatDate(tanggal)
```

<!--END_DOCUSAURUS_CODE_TABS-->

### ```isObjectEmpty```

Helper berikut digunakan untuk memeriksa apakah sebuah nilai obyek adalah kosong atau tidak.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
/**
 ** Gunakan di template
 **/
$helper.isObjectEmpty

/**
 ** Gunakan di script
 **/
this.$helper.isObjectEmpty
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Backend

### ```CaseConvert```

Badaso menyediakan sebuah helper untuk mengubah kunci kasus (*case key*) dari sebuah *array* dan properti dari sebuah obyek menjadi kasus yang ditentukan.

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```PHP
CaseConvert::camel($obyek)
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```PHP
CaseConvert::snake($obyek)
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```PHP
CaseConvert::pascal($obyek)
```

<!--END_DOCUSAURUS_CODE_TABS-->

Berikut ini merupakan contoh keluaran dari helper tersebut.

```json
input: {
    "product_id": 1
}

output: {
    "productId": 1
}
```

### ```AuthenticatedUser```

Helper berikut merupakan helper untuk mendapatkan informasi terkait user yang masuk atau pemanggil API menggunakan JWT token. Informasi yang tersedia yaitu informasi user, wewenang dan izin.

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```PHP
/**
 ** Helper untuk mendapatkan informasi pengguna yang telah
 ** login berupa informasi pengguna, wewenang, dan izin.
 **/

AuthenticatedUser::getUser()
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```PHP
/**
 ** Helper untuk mendapatkan informasi wewenang dari pengguna
 ** yang telah login.
 **/

AuthenticatedUser::getRoles($user_id)
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```PHP
/**
 ** Helper untuk mendapatkan informasi izin dari pengguna
 ** yang telah login.
 **/

AuthenticatedUser::getPermissions($user_id)
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```PHP
/**
 ** Helper untuk mendapatkan informasi tentang apakah pengguna
 ** mempunyai izin yang dimaksud.
 **/
 
AuthenticatedUser::isAllowedTo($permissions_string)
```

<!--END_DOCUSAURUS_CODE_TABS-->

### ```ApiResponse```

Helper ```ApiResponse``` merupakan helper untuk membuat keluaran API dari controller sesuai standar Badaso.

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```PHP
ApiResponse::success($reponse_data)
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```PHP
ApiResponse::failed($reponse_data)
```

<!--END_DOCUSAURUS_CODE_TABS-->