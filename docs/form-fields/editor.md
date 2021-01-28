---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoEditor
```
<badaso-editor
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-editor>
```

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Editor",
},
placeholder: {
    type: String,
    default: "Editor",
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