---
id: search
title: Search
sidebar_label: Search
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoSearch
```
<badaso-search
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-search>
```

```

size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "Search"
},
placeholder: {
    type: String,
    default: "Search"
},
value:  {
    type: String,
    required: true,
    default: ''
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