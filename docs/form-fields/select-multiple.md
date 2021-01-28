---
id: select-multiple
title: Select Multiple
sidebar_label: Select Multiple
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

- View: BadasoSelectMultiple
```
<badaso-select-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items"
></badaso-select-multiple>
```

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