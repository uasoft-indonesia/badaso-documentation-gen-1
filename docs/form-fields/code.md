---
id: code-editor
title: Code Editor
sidebar_label: Code Editor
---

## Generate CRUD

Badaso menyediakan sebuah text editor yang bertujuan untuk input berupa code. 
Saat generate CRUD, untuk Type Code, bagian Optional Details dapat diisi dengan JSON yang memiliki propert `size` untuk mengatur lebar container Code Editor.
```
    {
        "size": "6" // 1-12 default 12
    }
```

## View: BadasoCode
Code dibawah adalah sample untuk penggunaan BadasoCodeEditor pada vue template.
```
<badaso-code-editor
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-code-editor>
```

Berikut adalah daftar props yang disediakan BadasoCodeEditor.
```
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