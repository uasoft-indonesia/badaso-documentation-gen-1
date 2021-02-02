---
id: checkbox
title: Checkbox
sidebar_label: Checkbox
---

## Generate CRUD

Pada saat membuat CRUD, bagian Optional Details Checkbox dapat di isi dengan json seperti dibawah. property `items` harus di isi sedangkan size tidak harus di isi karena secara default sudah di isi 12. property `items` berguna sebagai item checkbox sedangkan size adalah untuk mengatur lebar container checkbox.
```
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

## View: BadasoCheckbox

Badaso menyediakan vue component untuk penggunaan checkbox, yakni BadasoCheckbox. Penggunaan BadasoCheckbox dapat dilihat pada sampel code dibawah.
```
<badaso-checkbox
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items"
></badaso-checkbox>
```
untuk penggunaan BadasoCheckbox terdapat beberapa props yang harus di isi dan optional. code di bawah adalah daftar props untuk BadasoCheckbox.

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Checkbox",
},
placeholder: {
    type: String,
    default: "Checkbox",
},
value: {
    type: Array,
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
## Catatan
Props value diisi menggunakan v-model.