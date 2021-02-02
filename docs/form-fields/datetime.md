---
id: datetime
title: Datetime
sidebar_label: Datetime
---

## Generate CRUD

Badaso menyediakan sebuah component untuk input tanggal dan waktu, yakni BadasoDatetime. 
Pada saat membuat/generate CRUD, lebar component ini dapat diatur pada Optional Details dengan format seperti berikut
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoDatetime

Code dibawah adalah sample untuk penggunaan BadasoDatetime pada vue template.

```
<badaso-datetime
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-datetime>
```

Berikut adalah daftar props yang disediakan component ini.

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Date Time",
},
placeholder: {
    type: String,
    default: "Date Time",
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