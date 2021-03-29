---
id: slider
title: Slider
sidebar_label: Slider
---

## Generate CRUD

Badaso provides an input component in the form of a slider, namely BadasoSlider. When generating CRUD, the width of this component can be set in Optional Details in the format shown below.
<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
    {
        "size": "6" // 1-12 default 12
    }
```
<!--END_DOCUSAURUS_CODE_TABS-->

## View: BadasoSlider

The code below is a sample for using BadasoSlider on the Vue Template.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-slider
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-slider>
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
    default: "Slider",
},
placeholder: {
    type: String,
    default: "Slider",
},
min: {
    type: Number,
    default: 0,
},
max: {
    type: Number,
    default: 100,
},
value: {
    type: Number,
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