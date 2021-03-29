---
id: password
title: Password
sidebar_label: Password
---

## Generate CRUD

Badaso menyediakan sebuah komponen untuk input password, yaitu BadasoPassword. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoPassword

Kode di bawah merupakan sampel untuk penggunaan BadasoPassword pada Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-password
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-password>
```
<!--END_DOCUSAURUS_CODE_TABS-->

### `props`

Berikut merupakan daftar props yang disediakan komponen ini.

```
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "Password"
},
placeholder: {
    type: String,
    default: "Password"
},
value:  {
    type: String,
    required: true,
    default: ''
},
additionalInfo: {
    type: String,
    default: "",
},
alert: {
    type: String|Array,
    default: "",
},
```