---
id: upload image
title: Upload Image
sidebar_label: Upload Image
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoUploadImage
```
<badaso-upload-image
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-upload-image>
```

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Upload Image",
},
placeholder: {
    type: String,
    default: "Upload Image",
},
value: {
    type: Object|String,
    default: () => {
    return null;
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