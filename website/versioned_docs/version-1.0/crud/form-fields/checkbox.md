---
id: version-1.0-checkbox
title: Checkbox
sidebar_label: Checkbox
original_id: checkbox
---

## Generate CRUD

When generating a CRUD, the Optional Details checkbox can be filled with JSON as shown below. Property `items` must be filled while `size` is not required because by default it is already filled with 12. The `items` property is used as checkbox content while `size` functions to adjust the width of the checkbox container.
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

## View: BadasoCheckbox

Badaso provides a Vue component for checkbox use, namely BadasoCheckbox. The use of BadasoCheckbox can be seen in the code sample below.
<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<badaso-checkbox
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
    :items="items">
</badaso-checkbox>
```
<!--END_DOCUSAURUS_CODE_TABS-->

### ```props```

To use BadasoCheckbox, there are some props that must be filled and optional. the code below is a list of props for BadasoCheckbox.

```js
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Checkbox",
},
placeholder: {
    type: String,
    default: "Checkbox",
},
value: {
    type: Array,
    required: true,
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

## Note
The ```value``` props are filled using v-model.