---
id: helpers
title: Helpers
sidebar_label: Helpers
---

## Frontend

### `formatDate`

Badaso menyediakan utilitas helper untuk mengubah tanggal sesuai dengan format yang ditentukan. Konfigurasi format tanggal dapat diubah pada file ```.env```.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
/**
 ** Gunakan di vue template
 **/
$helper.formatDate(tanggal)

/**
 ** Gunakan di vue script
 **/
this.$helper.formatDate(tanggal)
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `isObjectEmpty`

Helper berikut digunakan untuk memeriksa apakah sebuah nilai object adalah kosong atau tidak.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
/**
 ** Gunakan di vue template
 **/
$helper.isObjectEmpty

/**
 ** Gunakan di vue script
 **/
this.$helper.isObjectEmpty
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Backend

### `CaseConvert`

Badaso menyediakan sebuah helper untuk mengubah case key dari sebuah array dan property dari sebuah object menjadi kasus yang ditentukan.

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```PHP
CaseConvert::camel($object)
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```PHP
CaseConvert::snake($object)
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```PHP
CaseConvert::pascal($object)
```

<!--END_DOCUSAURUS_CODE_TABS-->

Berikut ini merupakan contoh output dari helper tersebut.

```json
input: {
    "product_id": 1
}

output: {
    "productId": 1
}
```

### `AuthenticatedUser`

Helper berikut merupakan helper untuk mendapatkan informasi terkait user yang login atau pemanggil API menggunakan JWT token. Informasi yang tersedia yaitu informasi user, role dan permission.

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```PHP
AuthenticatedUser::getUser()
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```PHP
AuthenticatedUser::getRoles($user_id)
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```PHP
AuthenticatedUser::getPermissions($user_id)
```

<!--END_DOCUSAURUS_CODE_TABS-->

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```PHP
AuthenticatedUser::isAllowedTo($permissions_string)
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `ApiResponse`

Helper ApiResponse merupakan helper untuk membuat output API dari controller sesuai standar Badaso.

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