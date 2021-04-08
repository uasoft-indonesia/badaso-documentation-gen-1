---
id: version-1.0.0-helpers
title: Helpers
sidebar_label: Helpers
original_id: helpers
---

## Frontend

### ```formatDate```

Badaso provides a helper utility to change the date according to the specified format.
The date format configuration can be changed in the file ```.env```.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
/**
 ** Use in vue template
 **/
$helper.formatDate(date)

/**
 ** Use in vue script
 **/
this.$helper.formatDate(date)
```

<!--END_DOCUSAURUS_CODE_TABS-->

### ```isObjectEmpty```

The following helper is used to check whether an object value is empty or not.

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
/**
 ** Use in vue template
 **/
$helper.isObjectEmpty

/**
 ** Use in vue script
 **/
this.$helper.isObjectEmpty
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Backend

### ```CaseConvert```

Badaso provides a helper for converting the case keys of an array and the properties of an object to specified cases.

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

The following is an example of the output of the helper.

```json
input: {
    "product_id": 1
}

output: {
    "productId": 1
}
```

### ```AuthenticatedUser```

The following helper is a helper to get information related to an incoming user or API caller using the JWT token. The information that available is user information, role and permissions.

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

### ```ApiResponse```

Helper ```ApiResponse``` is a helper for generating API output from the controller according to Badaso standards.

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