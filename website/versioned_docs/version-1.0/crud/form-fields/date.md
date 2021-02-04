---
id: version-1.0-date
title: Date
sidebar_label: Date
original_id: date
---

## Generate CRUD

Badaso provides an input component for dates, namely BadasoDate. At the time of generating the CRUD, this component can be set to Optional Details with the following format.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```JSON
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoDate

The code below is a sample for using BadasoDate in the Vue Template.
<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-date
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-date>
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
    default: "Date",
},
placeholder: {
    type: String,
    default: "Date",
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
