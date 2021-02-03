---
id: upload-file-multiple
title: Upload File Multiple
sidebar_label: Upload File Multiple
---

## *Generate* CRUD

Badaso menyediakan sebuah komponen pengunggah beberapa file sekaligus, yaitu BadasoUploadFileMultiple. Setiap file yang diunggah, akan di *generate* menjadi base64 untuk dikirim ke *backend*. Pada saat *generate* CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoUploadFileMultiple

Kode di bawah merupakan sampel untuk penggunaan BadasoUploadFileMultiple pada Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-upload-file-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-file-multiple>
```
<!--END_DOCUSAURUS_CODE_TABS-->

### ```props```

Berikut merupakan daftar *props* yang disediakan komponen ini.

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