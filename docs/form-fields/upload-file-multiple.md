---
id: upload-file-multiple
title: Upload File Multiple
sidebar_label: Upload File Multiple
---

## Generate CRUD

Badaso menyediakan sebuah component untuk upload beberapa file sekaligus, yakni BadasoUploadFileMultiple. 
Setiap file yang diunggah, akan di generate menjadi base64 untuk dikirim ke backend.
Pada saat membuat/generate CRUD, lebar component ini dapat diatur pada Optional Details dengan format seperti berikut.
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoUploadFileMultiple

Code dibawah adalah sample untuk penggunaan BadasoUploadFileMultiple pada vue template.

```
<badaso-upload-file-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-upload-file-multiple>
```

Berikut adalah daftar props yang disediakan component ini.

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