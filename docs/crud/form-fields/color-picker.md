---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

## *Generate* CRUD

Badaso menyediakan komponen untuk *color picker*, yaitu BadasoColorPicker, yang dapat diatur lebarnya dengan menambahkan properti `size` pada Optional Details saat *generate* CRUD.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```JSON
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoColorPicker

Berikut merupakan sampel kode untuk penggunakan BadasoColorPicker di dalam Vue *template*.
<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-color-picker
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-color-picker>
```
<!--END_DOCUSAURUS_CODE_TABS-->

### ```props```

Berikut merupakan daftar *props* yang disediakan komponent ini.

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Color picker",
},
placeholder: {
    type: String,
    default: "Color picker",
},
value: {
    type: String,
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

## Referensi

https://github.com/xiaokaike/vue-color