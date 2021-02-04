---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

## Generate CRUD

Badaso provides a component for the color picker, namely BadasoColorPicker, which can be adjusted in width by adding a `size` property to the Optional Details when generating the CRUD.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```JSON
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoColorPicker

The following is a sample code for using the BadasoColorPicker in the Vue template.
<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-color-picker
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-color-picker>
```
<!--END_DOCUSAURUS_CODE_TABS-->

### ```props```

The following is a list of props provided by this component.

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Color picker",
},
placeholder: {
    type: String,
    default: "Color picker",
},
value: {
    type: String,
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

## Reference

https://github.com/xiaokaike/vue-color