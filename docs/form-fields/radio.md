---
id: radio
title: Radio
sidebar_label: Radio
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
    default: "Radio",
},
placeholder: {
    type: String,
    default: "Radio",
},
value: {
    type: String,
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