---
id: email
title: Email
sidebar_label: Email
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoEmail
```
<badaso-email
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-email>
```

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Email",
},
additionalInfo: {
    type: String,
    default: "",
},
alert: {
    type: String|Array,
    default: "",
},
placeholder: {
    type: String,
    default: "Email",
},
value: {
    type: String,
    required: true,
    default: "",
},
readonly: {
    type: Boolean,
    default: false,
},
disabled: {
    type: Boolean,
    default: false,
},
autofocus: {
    type: Boolean,
    default: false,
},
required: {
    type: Boolean,
    default: false,
},
```
