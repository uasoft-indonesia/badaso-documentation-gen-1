---
id: email
title: Email
sidebar_label: Email
---

## Generate CRUD

Badaso menyediakan sebuah component untuk input email, yaknni BadasoEmail. 
Pada saat membuat/generate CRUD, lebar component ini dapat diatur pada Optional Details dengan format seperti berikut
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoEmail

Code dibawah adalah sample untuk penggunaan BadasoEmail pada vue template.

```
<badaso-email
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-email>
```

Berikut adalah daftar props yang disediakan component ini.

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Email",
},
additionalInfo: {
    type: String,
    default: "",
},
alert: {
    type: String|Array,
    default: "",
},
placeholder: {
    type: String,
    default: "Email",
},
value: {
    type: String,
    required: true,
    default: "",
},
readonly: {
    type: Boolean,
    default: false,
},
disabled: {
    type: Boolean,
    default: false,
},
autofocus: {
    type: Boolean,
    default: false,
},
required: {
    type: Boolean,
    default: false,
},
```
