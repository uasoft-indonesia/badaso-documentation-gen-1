---
id: version-1.0-upload-file-multiple
title: Upload File Multiple
sidebar_label: Upload File Multiple
original_id: upload-file-multiple
---

## Generate CRUD

Badaso provides a component that uploads multiple files at once, namely BadasoUploadFileMultiple. Each uploaded file will be generated as base64 to be sent to the backend. When generating CRUD, the width of this component can be set in Optional Details with the following format.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoUploadFileMultiple

The code below is a sample for using BadasoUploadFileMultiple on the Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-upload-file-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-file-multiple>
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
    default: "Upload File Multiple",
},
placeholder: {
    type: String,
    default: "Upload File Multiple",
},
value: {
    type: Array,
    default: () => {
    return [];
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