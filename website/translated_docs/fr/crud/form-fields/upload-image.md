---
id: upload image
title: Upload Image
sidebar_label: Upload Image
---

## Generate CRUD

Badaso menyediakan sebuah komponen untuk mengunggah file gambar, yaitu BadasoUploadImage. File yang diunggah, akan di generate menjadi base64 untuk dikirim ke backend. Beda dengan BadasoUploadFile, BadasoUploadImage dan BadasoUploadImageMultiple akan langsung menampilkan gambar setelah diunggah. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoUploadImage

Kode di bawah merupakan sampel untuk penggunaan BadasoUploadImage pada Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-upload-image
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-image>
```
<!--DOCUSAURUS_CODE_TABS-->

### `props`

Berikut merupakan daftar props yang disediakan komponen ini.

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