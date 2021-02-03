---
id: select-multiple
title: Select Multiple
sidebar_label: Select Multiple
---

## *Generate* CRUD

Badaso menyediakan sebuah komponen masukan berupa beberapa pilihan sekaligus dengan dropdown, yaitu BadasoSelectMultiple. Pada saat *generate* CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti kode di bawah. Untuk menggunakan radio pada saat membuat CRUD, properti `items` pada Optional Details harus diisi.
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

## View: BadasoSelectMultiple

Kode di bawah merupakan sampel untuk penggunaan BadasoSelectMultiple pada Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-select-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items">
</badaso-select-multiple>
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
    default: "Select Multiple",
},
placeholder: {
    type: String,
    default: "Select Multiple",
},
value: {
    type: Array,
    default: () => {
    return []
    },
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