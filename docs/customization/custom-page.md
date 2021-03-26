---
id: custom-page
title: Custom Page
sidebar_label: Custom Page
---

Badaso uses the VueJS framework for the Frontend. Therefore, adding pages to the frontend also uses VueJS. The block below is a directory structure for adding a new page to the frontend.

## Add Custom Page

- To add a page, add it to the `pages` directory.
- layout adjustments can be made in the `layout` directory.

```
📦Your Project
 ┣ 📂resources
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂badaso
 ┃ ┃ ┃ ┣ 📂layout /** you can modify layout here **/
 ┃ ┃ ┃ ┃ ┣ 📂admin-panel
 ┃ ┃ ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┃ ┗ 📂public
 ┃ ┃ ┃ ┣ 📂custom-pages /** create your own pages here **/
 ┃ ┃ ┃ ┃ ┣ 📂{slug}
 ┃ ┃ ┃ ┃ ┃ ┣ 📜browse.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜read.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜edit.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜add.vue
 ┃ ┃ ┃ ┃ ┃ ┗ 📜sort.vue
```

- To access the new page, the user must add a router to the router directory.

```
📦Your Project
 ┣ 📂resources
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂badaso
 ┃ ┃ ┃ ┣ 📂router /** create your own router .js here **/
 ┃ ┃ ┃ ┃ ┗ 📜example-router.js
```