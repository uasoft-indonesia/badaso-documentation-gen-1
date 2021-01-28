---
id: date
title: Date
sidebar_label: Date
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoDate
```
<badaso-date
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-date>
```

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Date",
},
placeholder: {
    type: String,
    default: "Date",
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
