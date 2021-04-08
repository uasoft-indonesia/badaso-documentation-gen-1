---
id: version-1.0.0-textarea
title: Textarea
sidebar_label: Textarea
original_id: textarea
---

## Generate CRUD

Badaso provides an input component in the form of a longer text, namely BadasoTextarea. When generating CRUD, the width of this component can be set in Optional Details with the following format.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoTextarea

The code below is a sample for using BadasoTextarea on the Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-textarea
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-textarea>
```
<!--END_DOCUSAURUS_CODE_TABS-->

### ```props```

Below is a list of props that this component provides.

```
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "Textarea"
},
placeholder: {
    type: String,
    default: "Textarea"
},
value:  {
    type: String,
    required: true,
    default: 'null'
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