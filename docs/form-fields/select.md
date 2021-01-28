---
id: select
title: Select
sidebar_label: Select
---

- Generate CRUD
```
{
    "size": "6", // 1-12 default 12
    "items": [
        {
            "label": "This is label",
            "value": "this_is_value"
        }
    ]
}
```

- View: BadasoSelect
```
<badaso-select
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items"
></badaso-select>
```

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Select",
},
placeholder: {
    type: String,
    default: "Select",
},
value: {
    type: String,
    required: true,
    default: "",
},
items: {
    type: Array,
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