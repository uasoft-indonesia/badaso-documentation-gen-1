---
id: upload-image-multiple
title: Upload Image Multiple
sidebar_label: Upload Image Multiple
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoUploadImageMultiple
```
<badaso-upload-image-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-upload-image-multiple>
```

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Upload Image Multiple",
},
placeholder: {
    type: String,
    default: "Upload Image Multiple",
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