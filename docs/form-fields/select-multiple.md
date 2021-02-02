---
id: select-multiple
title: Select Multiple
sidebar_label: Select Multiple
---

## Generate CRUD

Badaso menyediakan sebuah component untuk input berupa beberapa pilihan sekaligus dengan dropdown, yakni BadasoSelectMultiple. 
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

## View: BadasoSelectMultiple

Code dibawah adalah sample untuk penggunaan BadasoSelectMultiple pada vue template.

```
<badaso-select-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items"
></badaso-select-multiple>
```

Berikut adalah daftar props yang disediakan component ini.

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Select Multiple",
},
placeholder: {
    type: String,
    default: "Select Multiple",
},
value: {
    type: Array,
    default: () => {
    return []
    },
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