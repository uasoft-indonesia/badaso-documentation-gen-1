---
id: switch
title: Switch
sidebar_label: Switch
---

## Generate CRUD

Badaso provides a boolean input component with a switch, namely BadasoSwitch. When generating CRUD, the container width for this component can be set in Optional Details with the format shown in the code below. To use switch when creating a CRUD, the `items` property in Optional Details is required.

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoSwitch

The code below is a sample for using BadasoSwitch in the Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-switch
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-switch>
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
    default: "Switch"
},
placeholder: {
    type: String,
    default: "Switch"
},
onLabel: {
    type: String,
    default: "On"
},
offLabel: {
    type: String,
    default: "Off"
},
value:  {
    type: Boolean,
    required: true,
    default: false
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