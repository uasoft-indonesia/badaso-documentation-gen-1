---
id: hidden
title: Hidden
sidebar_label: Hidden
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoHidden
```
<badaso-hidden
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    :alert="error"
></badaso-hidden>
```

```
{
  "value": "value"
}
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
placeholder: {
    type: String,
    default: "Text",
},
value: {
    type: String,
    required: true,
    default: "",
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