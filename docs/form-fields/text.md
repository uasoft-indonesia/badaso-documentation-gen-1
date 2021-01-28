---
id: text
title: Text
sidebar_label: Text
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoText
```
<badaso-text
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-text>
```

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Text",
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
    default: "Text",
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