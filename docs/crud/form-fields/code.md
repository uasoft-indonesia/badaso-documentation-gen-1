---
id: code-editor
title: Code Editor
sidebar_label: Code Editor
---

## *Generate* CRUD

Badaso menyediakan sebuah komponen editor teks untuk masukan berupa kode. Saat *generate* CRUD untuk tipe kode, bagian Optional Details dapat diisi dengan JSON yang memiliki properti `size` untuk mengatur lebar kontainer kode editor teks.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoCode
Kode di bawah merupakan sampel untuk penggunaan ```BadasoCodeEditor``` pada Vue Template.
<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-code-editor
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-code-editor>
```
<!--END_DOCUSAURUS_CODE_TABS-->

### ```props```
Berikut merupakan daftar *props* yang disediakan BadasoCodeEditor.
```js
value: {
    type: String,
    required: true,
    default: "",
},
size: {
    type: String,
    default: "",
},
label: {
    type: String,
    default: "",
},
additionalInfo: {
    type: String,
    default: "",
},
alert: {
    type: String | Array,
    default: "",
},
```