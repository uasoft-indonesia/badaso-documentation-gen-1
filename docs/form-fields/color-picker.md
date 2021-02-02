---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

## Generate CRUD

Badaso menyediakan component untuk color picker, yakni BadasoColorPicker, yang dapat diatur lebar nya dengan menambahkan property `size` pada Optional Details saat generate CRUD.
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoColorPicker

Berikut adalah code sample untuk penggunakan BadasoColorPicker di dalam template vue.
```
<badaso-color-picker
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-color-picker>
```

Berikut adalah daftar props yang disediakan component ini.


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