---
id: version-1.0-hidden
title: Hidden
sidebar_label: Hidden
original_id: hidden
---

## Generate CRUD

Badaso provides a hidden input component, namely BadasoHidden. When generating CRUD, the width of this component can be set in Optional Details with the following format.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6", // 1-12 default 12
        "value": "" // must be filled when generating CRUD if the column in the table cannot be null
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoHidden

The code below is a sample for using BadasoHidden in the Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-hidden
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    :alert="error">
</badaso-hidden>
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
    default: "Text",
},
placeholder: {
    type: String,
    default: "Text",
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