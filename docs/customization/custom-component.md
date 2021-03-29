---
id: custom-component
title: Custom Component
sidebar_label: Custom Component
---

Badaso uses the VueJS framework for the frontend. Therefore, adding components to the frontend also uses VueJS. The block below is a directory structure for adding a new component to the frontend.

## Add a Component

- To add a component, add it to the `components` directory.

```
📦Your Project
 ┣ 📂resources
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂badaso
 ┃ ┃ ┃ ┣ 📂components /** you can add a component here **/
 ┃ ┃ ┃ ┃ ┗ 📜ExampleComponent.vue
```

- Now you can use that custom component in your pages like below.

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```vue
<template>
  ...
  <example-component></example-component>
  ...
</template>
<script>
  import ExampleComponent from '../components/ExampleComponent.vue

  export default {
    ...
    components: {
      ExampleComponent
    },
    ...
  }
</script>
```
<!--END_DOCUSAURUS_CODE_TABS-->
