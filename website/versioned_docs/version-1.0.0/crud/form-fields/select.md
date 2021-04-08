---
id: version-1.0.0-select
title: Select
sidebar_label: Select
original_id: select
---

## Generate CRUD

Badaso provides an input component in the form of a dropdown option, namely BadasoSelect. When generating CRUD, the width of this component can be set in Optional Details with the format shown in the code below. To use radio when creating a CRUD, the `items` property in Optional Details is required.

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6", // 1-12 default 12
        "items": [
            {
                "label": "This is label",
                "value": "this_is_value"
            }
        ]
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoSelect

The code below is a sample for using BadasoSelect in the Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-select
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items">
</badaso-select>
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
    default: "Select",
},
placeholder: {
    type: String,
    default: "Select",
},
value: {
    type: String,
    required: true,
    default: "",
},
items: {
    type: Array,
    required: true,
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