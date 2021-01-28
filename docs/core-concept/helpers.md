---
id: helpers
title: Helpers
sidebar_label: Helpers
---

**Frontend**

badaso menyediakan util helper untuk mengubah tanggal sesuai dengan format yang ditentukan
untuk config format tanggal ada pada env
```
// use in template
$helper.formatDate
// use in script
this.$helper.formatDate
```

helper berikut digunakan untuk memeriksa apakah sebuah value adalah object kosong atau bukan
```
// use in template
$helper.isObjectEmpty
// use in script
this.$helper.isObjectEmpty
```

**Backend**

Badaso menyediakan sebuah class helper untuk mengubah case key dari sebuah array dan property dari sebuah object menjadi case yang ditentukan.

```
CaseConvert::camel($object)
```
```
CaseConvert::snake($object)
```
```
CaseConvert::pascal($object)
```
contoh:
input: {
    "product_id": 1
}

output: {
    "productId": 1
}

Helper-helper berikut adalah helper untuk mendapatkan informasi terkait user yang login atau pemanggil api menggunakan JWT token.
informasi yang tersedia yaitu informasi user, role dan permission
```
AuthenticatedUser::getUser()
```
```
AuthenticatedUser::getRoles($user_id)
```
```
AuthenticatedUser::getPermissions($user_id)
```
```
AuthenticatedUser::isAllowedTo($permissions_string)
```

Helper ApiResponse adalah helper untuk membuat output api dari controller sesuai standar badaso
```
ApiResponse::success($reponse_data)
```
```
ApiResponse::failed($reponse_data)
```
