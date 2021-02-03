---
id: date
title: Date
sidebar_label: Date
---

## *Generate* CRUD

Badaso menyediakan sebuah komponen masukan untuk tanggal, yaitu BadasoDate. Pada saat *generate* CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```JSON
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoDate

Kode di bawah merupakan sampel untuk penggunaan BadasoDate pada Vue Template.
<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-date
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-date>
```
<!--END_DOCUSAURUS_CODE_TABS-->

### ```props```

Berikut merupakan daftar *props* yang disediakan komponen ini.

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Date",
},
placeholder: {
    type: String,
    default: "Date",
},
value: {
    type: String,
    required: true,
    default: "",
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
