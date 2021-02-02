---
id: select
title: Select
sidebar_label: Select
---

## Generate CRUD

Badaso menyediakan sebuah component untuk input berupa pilihan dengan dropdown, yakni BadasoSelect. 
Pada saat membuat/generate CRUD, lebar component ini dapat diatur pada Optional Details dengan format seperti code di bawah. untuk menggunakan radio, saat membuat CRUD, propery items pada OptionalDetails harus diisi.
```
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

## View: BadasoSelect

Code dibawah adalah sample untuk penggunaan BadasoSelect pada vue template.

```
<badaso-select
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items"
></badaso-select>
```

Berikut adalah daftar props yang disediakan component ini.

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