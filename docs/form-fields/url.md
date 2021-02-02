---
id: url
title: Url
sidebar_label: Url
---

## Generate CRUD

Badaso menyediakan sebuah component untuk input tersembunyi, yakni BadasoUrl. 
Pada saat membuat/generate CRUD, lebar component ini dapat diatur pada Optional Details dengan format seperti berikut
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoUrl

Code dibawah adalah sample untuk penggunaan BadasoUrl pada vue template.

```
<badaso-url
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-url>
```

Berikut adalah daftar props yang disediakan component ini.

```
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "URL"
},
placeholder: {
    type: String,
    default: "URL"
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