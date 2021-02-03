---
id: select
title: Select
sidebar_label: Select
---

## *Generate* CRUD

Badaso menyediakan sebuah komponen masukan berupa pilihan dengan dropdown, yaitu BadasoSelect. Pada saat *generate* CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti kode di bawah. untuk menggunakan radio pada saat membuat CRUD, properti `items` pada Optional Details harus diisi.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6", // 1-12 default 12
        "items": [
            {
                "label": "This is label",
                "value": "this_is_value"
            }
        ]
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoSelect

Kode di bawah merupakan sampel untuk penggunaan BadasoSelect pada Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-select
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items">
</badaso-select>
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
    default: "Select",
},
placeholder: {
    type: String,
    default: "Select",
},
value: {
    type: String,
    required: true,
    default: "",
},
items: {
    type: Array,
    required: true,
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