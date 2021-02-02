---
id: hidden
title: Hidden
sidebar_label: Hidden
---

## Generate CRUD

Badaso menyediakan sebuah component untuk input tersembunyi, yakni BadasoHidden. 
Pada saat membuat/generate CRUD, lebar component ini dapat diatur pada Optional Details dengan format seperti berikut
```
    {
        "size": "6" // 1-12 default 12,
        "value": "" // harus diisi saat generate CRUD jika kolom pada table tidak boleh null
    }
```

## View: BadasoHidden

Code dibawah adalah sample untuk penggunaan BadasoHidden pada vue template.

```
<badaso-hidden
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    :alert="error"
></badaso-hidden>
```

Berikut adalah daftar props yang disediakan component ini.

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Text",
},
placeholder: {
    type: String,
    default: "Text",
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