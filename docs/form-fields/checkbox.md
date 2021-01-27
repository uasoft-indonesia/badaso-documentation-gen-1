---
id: checkbox
title: Checkbox
sidebar_label: Checkbox
---

- Generate CRUD
```
{
  "items": [
    {
      "label": "This is label",
      "value": "this_is_value"
    }
  ]
}
```

- View

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Checkbox",
},
placeholder: {
    type: String,
    default: "Checkbox",
},
value: {
    type: Array,
    required: true,
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