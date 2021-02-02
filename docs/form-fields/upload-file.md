---
id: upload-file
title: Upload File
sidebar_label: Upload File
---

## Generate CRUD

Badaso menyediakan sebuah component untuk upload file, yakni BadasoUploadFile. 
File yang diunggah, akan di generate menjadi base64 untuk dikirim ke backend.
Pada saat membuat/generate CRUD, lebar component ini dapat diatur pada Optional Details dengan format seperti berikut.
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoUploadFile

Code dibawah adalah sample untuk penggunaan BadasoUploadFile pada vue template.

```
<badaso-upload-file
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-upload-file>
```

Berikut adalah daftar props yang disediakan component ini.

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