---
id: radio
title: Radio
sidebar_label: Radio
---

## Generate CRUD

Badaso menyediakan sebuah component untuk input berupa pilihan dengan radio button, yakni BadasoRadio. 
Pada saat membuat/generate CRUD, lebar container untuk component ini dapat diatur pada Optional Details dengan format seperti code di bawah. untuk menggunakan radio, saat membuat CRUD, propery items pada OptionalDetails harus diisi.
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

## View: BadasoRadio

Code dibawah adalah sample untuk penggunaan BadasoRadio pada vue template.

```
<badaso-radio
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items"
></badaso-radio>
```

Berikut adalah daftar props yang disediakan component ini.

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Radio",
},
placeholder: {
    type: String,
    default: "Radio",
},
value: {
    type: String,
    required: true,
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