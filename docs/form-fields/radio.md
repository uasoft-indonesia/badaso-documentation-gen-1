---
id: radio
title: Radio
sidebar_label: Radio
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

- View: BadasoRadio
```
<badaso-radio
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items"
></badaso-radio>
```

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