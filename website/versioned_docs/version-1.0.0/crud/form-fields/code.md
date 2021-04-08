---
id: version-1.0.0-code-editor
title: Code Editor
sidebar_label: Code Editor
original_id: code-editor
---

## Generate CRUD

Badaso provides a text editor component for code input. When generating a CRUD for a code type, the Optional Details section can be filled with JSON which has a `size` property to set the width of the text editor code container.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoCode
The code below is a sample for using BadasoCodeEditor on the Vue Template.
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
The following is a list of props provided by BadasoCodeEditor.
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