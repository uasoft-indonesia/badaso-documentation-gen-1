---
id: textarea
title: Textarea
sidebar_label: Textarea
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoTextarea
```
<badaso-textarea
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-textarea>
```

```
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "Textarea"
},
placeholder: {
    type: String,
    default: "Textarea"
},
value:  {
    type: String,
    required: true,
    default: 'null'
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