---
id: upload-file
title: Upload File
sidebar_label: Upload File
---

## Generate CRUD

Badaso menyediakan sebuah komponen untuk mengunggah file, yaitu BadasoUploadFile. File yang diunggah, akan di generate menjadi base64 untuk dikirim ke backend. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoUploadFile

Kode di bawah merupakan sampel untuk penggunaan BadasoUploadFile pada Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-upload-file
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-file>
```
<!--END_DOCUSAURUS_CODE_TABS-->

### `props`

Berikut merupakan daftar props yang disediakan komponen ini.

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