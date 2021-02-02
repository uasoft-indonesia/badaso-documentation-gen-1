---
id: search
title: Search
sidebar_label: Search
---

## Generate CRUD

Badaso menyediakan sebuah component untuk input pencarian, yakni BadasoSearch. 
Pada saat membuat/generate CRUD, lebar component ini dapat diatur pada Optional Details dengan format seperti berikut
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoSearch

Code dibawah adalah sample untuk penggunaan BadasoSearch pada vue template.

```
<badaso-search
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-search>
```

Berikut adalah daftar props yang disediakan component ini.

```
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "Search"
},
placeholder: {
    type: String,
    default: "Search"
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