---
id: select-multiple
title: Select Multiple
sidebar_label: Select Multiple
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
    default: "Select Multiple",
},
placeholder: {
    type: String,
    default: "Select Multiple",
},
value: {
    type: Array,
    default: () => {
    return []
    },
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