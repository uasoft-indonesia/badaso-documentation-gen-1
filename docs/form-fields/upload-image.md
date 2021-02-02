---
id: upload image
title: Upload Image
sidebar_label: Upload Image
---

## Generate CRUD

Badaso menyediakan sebuah component untuk upload file gambar , yakni BadasoUploadImage. 
File yang diunggah, akan di generate menjadi base64 untuk dikirim ke backend.
Beda dengan BadasoUploadFile, BadasoUploadImage dan BadasoUploadImageMultiple akan langsung menampilkan gambar setelah diunggah.
Pada saat membuat/generate CRUD, lebar component ini dapat diatur pada Optional Details dengan format seperti berikut.
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoUploadImage

Code dibawah adalah sample untuk penggunaan BadasoUploadImage pada vue template.

```
<badaso-upload-image
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-upload-image>
```

Berikut adalah daftar props yang disediakan component ini.

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