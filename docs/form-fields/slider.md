---
id: slider
title: Slider
sidebar_label: Slider
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoSlider
```
<badaso-slider
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-slider>
```

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