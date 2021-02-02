---
id: switch
title: Switch
sidebar_label: Switch
---

## Generate CRUD

Badaso menyediakan sebuah component untuk input berupa boolean dengan switch, yakni BadasoRadio. 
Pada saat membuat/generate CRUD, lebar container untuk component ini dapat diatur pada Optional Details dengan format seperti code di bawah. untuk menggunakan radio, saat membuat CRUD, propery items pada OptionalDetails harus diisi.
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoSwitch

Code dibawah adalah sample untuk penggunaan BadasoSwitch pada vue template.

```
<badaso-switch
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-switch>
```

Berikut adalah daftar props yang disediakan component ini.

```
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "Switch"
},
placeholder: {
    type: String,
    default: "Switch"
},
onLabel: {
    type: String,
    default: "On"
},
offLabel: {
    type: String,
    default: "Off"
},
value:  {
    type: Boolean,
    required: true,
    default: false
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