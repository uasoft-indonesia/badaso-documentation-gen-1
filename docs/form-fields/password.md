---
id: password
title: Password
sidebar_label: Password
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoPassword
```
<badaso-password
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-password>
```

```
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "Password"
},
placeholder: {
    type: String,
    default: "Password"
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