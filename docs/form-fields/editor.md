---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

## Generate CRUD

Badaso menyediakan sebuah component untuk input text dengan format HTML, yakni BadasoEditor. 
Pada saat membuat/generate CRUD, lebar component ini dapat diatur pada Optional Details dengan format seperti berikut
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoEditor

Code dibawah adalah sample untuk penggunaan BadasoEditor pada vue template.

```
<badaso-editor
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-editor>
```

Berikut adalah daftar props yang disediakan component ini.

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Editor",
},
placeholder: {
    type: String,
    default: "Editor",
},
value: {
    type: String,
    required: true,
    default: "",
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