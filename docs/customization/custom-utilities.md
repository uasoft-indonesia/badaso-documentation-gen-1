---
id: custom-utilities
title: Custom Utilities
sidebar_label: Custom Utilities
---

Badaso also supports for customization utilities. The block below is a directory structure for adding a new utilities.

## Add Utilities

- To add a utilities, add it to the `utils` directory.

```
📦 Your Project
 ┣ 📂 resources
 ┃ ┣ 📂 js
 ┃ ┃ ┣ 📂 badaso
 ┃ ┃ ┃ ┣ 📂 utils /** you can add a utility here **/
 ┃ ┃ ┃ ┃ ┣ 📜 example-utils.js /** example one **/
 ┃ ┃ ┃ ┃ ┗ 📜 exampleutils.js /** example two **/
```

- To use the utility that was just added, you can try using syntax below.

:::warning
The naming utils in Badaso uses the camel case. For example example-utils will become exampleUtils.
:::

<!--DOCUSAURUS_CODE_TABS-->
<!--Vue-->
```js
/** in template **/
$exampleUtils.yourMethod(); /** example one **/
$exampleutils.yourMethod(); /** example two **/

/** in script **/
this.$exampleUtils.yourMethod(); /** example one **/
this.$exampleutils.yourMethod(); /** example two **/
```
<!--END_DOCUSAURUS_CODE_TABS-->
