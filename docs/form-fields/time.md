---
id: time
title: Time
sidebar_label: Time
---

## Generate CRUD

Badaso menyediakan sebuah component untuk input waktu(jam, menit, detik), yakni BadasoTime. 
Pada saat membuat/generate CRUD, lebar component ini dapat diatur pada Optional Details dengan format seperti berikut
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoTime

Code dibawah adalah sample untuk penggunaan BadasoTime pada vue template.

```
<badaso-time
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-time>
```

Berikut adalah daftar props yang disediakan component ini.

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Time",
},
placeholder: {
    type: String,
    default: "Time",
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