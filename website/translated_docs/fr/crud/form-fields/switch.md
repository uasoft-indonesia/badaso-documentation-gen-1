---
id: switch
title: Switch
sidebar_label: Switch
---

## Generate CRUD

Badaso menyediakan sebuah komponen input berupa boolean dengan switch, yaitu BadasoSwitch. Pada saat generate CRUD, lebar container untuk komponen ini dapat diatur pada Optional Details dengan format seperti kode di bawah. Untuk menggunakan switch pada saat membuat CRUD, properti `items` pada Optional Details harus diisi.

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoSwitch

Kode di bawah merupakan sampel untuk penggunaan BadasoSwitch pada Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-switch
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-switch>
```
<!--END_DOCUSAURUS_CODE_TABS-->

### `props`

Berikut merupakan daftar props yang disediakan komponen ini.

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