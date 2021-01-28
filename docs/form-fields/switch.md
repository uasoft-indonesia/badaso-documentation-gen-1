---
id: switch
title: Switch
sidebar_label: Switch
---

- Generate CRUD
```
    {
        "size": "6" // 1-12 default 12
    }
```

- View: BadasoSwitch
```
<badaso-switch
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error"
></badaso-switch>
```

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