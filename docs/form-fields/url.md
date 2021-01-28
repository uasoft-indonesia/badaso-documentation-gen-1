---
id: url
title: Url
sidebar_label: Url
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoUrl
```
<badaso-url
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-url>
```

```
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "URL"
},
placeholder: {
    type: String,
    default: "URL"
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