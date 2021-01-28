---
id: code-editor
title: Code Editor
sidebar_label: Code Editor
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoCode
```
<badaso-code-editor
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-code-editor>
```

```
value: {
    type: String,
    required: true,
    default: "",
},
size: {
    type: String,
    default: "",
},
label: {
    type: String,
    default: "",
},
additionalInfo: {
    type: String,
    default: "",
},
alert: {
    type: String | Array,
    default: "",
},
```