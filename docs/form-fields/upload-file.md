---
id: upload-file
title: Upload File
sidebar_label: Upload File
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoUploadFile
```
<badaso-upload-file
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-upload-file>
```

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Upload File",
},
placeholder: {
    type: String,
    default: "Upload File",
},
value: {
    type: Object | String,
    default: () => {
    return {};
    },
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