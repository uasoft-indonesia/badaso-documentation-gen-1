---
id: date
title: Date
sidebar_label: Date
---

## Generate CRUD

Badaso menyediakan sebuah component untuk input tanggal, yakni BadasoDate. 
Pada saat membuat/generate CRUD, lebar component ini dapat diatur pada Optional Details dengan format seperti berikut
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoDate

Code dibawah adalah sample untuk penggunaan BadasoDate pada vue template.
```
<badaso-date
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-date>
```

Berikut adalah daftar props yang disediakan component ini.

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
