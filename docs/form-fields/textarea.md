---
id: textarea
title: Textarea
sidebar_label: Textarea
---

## Generate CRUD

Badaso menyediakan sebuah component untuk input text yang lebih panjang, yakni BadasoTextarea. 
Pada saat membuat/generate CRUD, lebar component ini dapat diatur pada Optional Details dengan format seperti berikut
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoTextarea

Code dibawah adalah sample untuk penggunaan BadasoTextarea pada vue template.

```
<badaso-textarea
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-textarea>
```

Berikut adalah daftar props yang disediakan component ini.

```
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "Textarea"
},
placeholder: {
    type: String,
    default: "Textarea"
},
value:  {
    type: String,
    required: true,
    default: 'null'
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