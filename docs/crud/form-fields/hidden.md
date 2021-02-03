---
id: hidden
title: Hidden
sidebar_label: Hidden
---

## *Generate* CRUD

Badaso menyediakan sebuah komponen masukan tersembunyi, yaitu BadasoHidden. Pada saat *generate* CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6", // 1-12 default 12
        "value": "" // harus diisi saat generate CRUD jika kolom pada table tidak boleh null
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoHidden

Kode di bawah merupakan sampel untuk penggunaan BadasoHidden pada Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-hidden
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    :alert="error">
</badaso-hidden>
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
    default: "Text",
},
placeholder: {
    type: String,
    default: "Text",
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