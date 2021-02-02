---
id: upload-image-multiple
title: Upload Image Multiple
sidebar_label: Upload Image Multiple
---

## Generate CRUD

Badaso menyediakan sebuah component untuk upload beberapa file gambar sekaligus, yakni BadasoUploadImageMultiple. 
Setiap file yang diunggah, akan di generate menjadi base64 untuk dikirim ke backend.
Beda dengan BadasoUploadFile, BadasoUploadImage dan BadasoUploadImageMultiple akan langsung menampilkan gambar setelah diunggah.
Pada saat membuat/generate CRUD, lebar component ini dapat diatur pada Optional Details dengan format seperti berikut.
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoUploadImageMultiple

Code dibawah adalah sample untuk penggunaan BadasoUploadImageMultiple pada vue template.

```
<badaso-upload-image-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-upload-image-multiple>
```

Berikut adalah daftar props yang disediakan component ini.

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