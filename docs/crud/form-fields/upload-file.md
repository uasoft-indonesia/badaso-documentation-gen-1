---
id: upload-file
title: Upload File
sidebar_label: Upload File
---

## Generate CRUD

Badaso provides a component for uploading files, namely BadasoUploadFile. The uploaded file will be generated as base64 to be sent to the backend. When generating CRUD, the width of this component can be set in Optional Details with the following format.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoUploadFile

The code below is a sample for using BadasoUploadFile in the Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-upload-file
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-file>
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
    default: "Upload File",
},
placeholder: {
    type: String,
    default: "Upload File",
},
value: {
    type: Object | String,
    default: () => {
    return {};
    },
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