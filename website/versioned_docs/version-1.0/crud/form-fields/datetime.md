---
id: version-1.0-datetime
title: Datetime
sidebar_label: Datetime
original_id: datetime
---

## Generate CRUD

Badaso provides an input component for date and time, that is BadasoDatetime. When generating CRUD, the width of this component can be set in Optional Details with the following format.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```JSON
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoDatetime

The code below is a sample for using BadasoDatetime on the Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-datetime
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-datetime>
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
    default: "Date Time",
},
placeholder: {
    type: String,
    default: "Date Time",
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