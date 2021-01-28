---
id: time
title: Time
sidebar_label: Time
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoTime
```
<badaso-time
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-time>
```

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Time",
},
placeholder: {
    type: String,
    default: "Time",
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