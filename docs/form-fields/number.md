---
id: number
title: Number
sidebar_label: Number
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoNumber
```
<badaso-number
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-number>
```

```
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "Number"
},
placeholder: {
    type: String,
    default: "Number"
},
value:  {
    type: String,
    required: true,
    default: ''
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