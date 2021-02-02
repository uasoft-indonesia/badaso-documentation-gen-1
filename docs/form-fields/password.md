---
id: password
title: Password
sidebar_label: Password
---

## Generate CRUD

Badaso menyediakan sebuah component untuk input password, yakni BadasoPassword. 
Pada saat membuat/generate CRUD, lebar component ini dapat diatur pada Optional Details dengan format seperti berikut
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoPassword

Code dibawah adalah sample untuk penggunaan BadasoPassword pada vue template.

```
<badaso-password
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-password>
```

Berikut adalah daftar props yang disediakan component ini.

```
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "Password"
},
placeholder: {
    type: String,
    default: "Password"
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