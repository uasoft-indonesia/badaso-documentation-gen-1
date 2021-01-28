---
id: datetime
title: Datetime
sidebar_label: Datetime
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoDatetime
```
<badaso-datetime
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-datetime>
```

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Date Time",
},
placeholder: {
    type: String,
    default: "Date Time",
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