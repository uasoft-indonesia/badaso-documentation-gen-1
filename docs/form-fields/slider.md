---
id: slider
title: Slider
sidebar_label: Slider
---

## Generate CRUD

Badaso menyediakan sebuah component untuk input angka dalam bentuk slider, yakni BadasoSlider. 
Pada saat membuat/generate CRUD, lebar component ini dapat diatur pada Optional Details dengan format seperti berikut
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoSlider

Code dibawah adalah sample untuk penggunaan BadasoSlider pada vue template.

```
<badaso-slider
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-slider>
```

Berikut adalah daftar props yang disediakan component ini.

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Slider",
},
placeholder: {
    type: String,
    default: "Slider",
},
min: {
    type: Number,
    default: 0,
},
max: {
    type: Number,
    default: 100,
},
value: {
    type: Number,
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