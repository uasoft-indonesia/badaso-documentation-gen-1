---
id: radio
title: Radio
sidebar_label: Radio
---

## *Generate* CRUD

Badaso menyediakan sebuah komponen masukan berupa pilihan dengan radio *button*, yaitu BadasoRadio. Pada saat *generate* CRUD, lebar kontainer untuk komponen ini dapat diatur pada Optional Details dengan format seperti kode di bawah. Untuk menggunakan radio, saat membuat CRUD, properti `items` pada Optional Details harus diisi.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6", // 1-12 default 12
        "items": [
            {
              "label": "This is label",
                "value": "this_is_value"
            }
        ]
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoRadio

Kode di bawah merupakan sampel untuk penggunaan BadasoRadio pada Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-radio
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items">
</badaso-radio>
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
    default: "Radio",
},
placeholder: {
    type: String,
    default: "Radio",
},
value: {
    type: String,
    required: true,
},
items: {
    type: Array,
    required: true,
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