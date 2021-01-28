---
id: tags
title: Tags
sidebar_label: Tags
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoTags
```
<badaso-tags
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-tags>
```

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Tags",
},
placeholder: {
    type: String,
    default: "Tags",
},
value: {
    type: String,
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