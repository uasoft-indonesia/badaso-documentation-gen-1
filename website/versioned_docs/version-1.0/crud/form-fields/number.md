---
id: version-1.0-number
title: Number
sidebar_label: Number
original_id: number
---

## Generate CRUD    

Badaso provides an input component in the form of numbers, namely BadasoNumber. When generating CRUD, the width of this component can be set in Optional Details with the following format.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoNumber

The code below is a sample for using BadasoNumber in the Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-number
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-number>
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
    default: "Number"
},
placeholder: {
    type: String,
    default: "Number"
},
value:  {
    type: String,
    required: true,
    default: ''
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