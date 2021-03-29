---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

## Generate CRUD

Badaso provides an input component for text in HTML format, namely BadasoEditor. When generating CRUD, the width of this component can be set in Optional Details with the following format.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoEditor

The code below is a sample for using BadasoEditor in the Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-editor
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-editor>
```
<!--END_DOCUSAURUS_CODE_TABS-->

### ```props```

Below is a list of props that this component provides.

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