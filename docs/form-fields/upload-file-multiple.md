---
id: upload-file-multiple
title: Upload File Multiple
sidebar_label: Upload File Multiple
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoUploadFileMultiple
```
<badaso-upload-file-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-upload-file-multiple>
```

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Upload File Multiple",
},
placeholder: {
    type: String,
    default: "Upload File Multiple",
},
value: {
    type: Array,
    default: () => {
    return [];
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