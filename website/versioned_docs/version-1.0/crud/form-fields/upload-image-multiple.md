---
id: version-1.0-upload-image-multiple
title: Upload Image Multiple
sidebar_label: Upload Image Multiple
original_id: upload-image-multiple
---

## Generate CRUD

Badaso provides a component for uploading multiple image files at once, namely BadasoUploadImageMultiple. Each uploaded file will be generated as base64 to be sent to the backend. Unlike BadasoUploadFile, BadasoUploadImage and BadasoUploadImageMultiple will display images immediately after uploading. When generating CRUD, the width of this component can be set in Optional Details with the following format.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoUploadImageMultiple

The code below is a sample for using BadasoUploadImageMultiple on the Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-upload-image-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-image-multiple>
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
    default: "Upload Image Multiple",
},
placeholder: {
    type: String,
    default: "Upload Image Multiple",
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