---
id: search
title: Search
sidebar_label: Search
---

## Generate CRUD

Badaso provides an input component for search, namely BadasoSearch. When generating CRUD, the width of this component can be set in Optional Details with the following format.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoSearch

The code below is a sample for using BadasoSearch on the Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-search
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-search>
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
    default: "Search"
},
placeholder: {
    type: String,
    default: "Search"
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