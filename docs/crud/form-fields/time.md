---
id: time
title: Time
sidebar_label: Time
---

## *Generate* CRUD

Badaso menyediakan sebuah komponen masukan berupa waktu(jam, menit, detik), yaitu BadasoTime. Pada saat *generate* CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoTime

Kode di bawah merupakan sampel untuk penggunaan BadasoTime pada Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-time
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-time>
```
<!--END_DOCUSAURUS_CODE_TABS-->

### ```props```

Berikut merupakan daftar *props* yang disediakan komponen ini.

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