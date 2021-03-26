---
id: overriding-page
title: Overriding Page
sidebar_label: Overriding Page
---

Each CRUD generated from the CRUD generator uses the same view. However, there are times when the view must be changed as needed. Badaso provides features for custom views. For this custom view, Badaso will check whether any views are created on the custom page, if not, Badaso will use the default view.

Badaso assumes that the user is familiar with the basics of vue. Therefore Badaso doesn't explain how to create components in vue.

Here are the steps for creating a custom view to customize the appearance of the CRUD Generator.

1. Create a vue file on the resource like the following structure.
```
📦Your Project
 ┣ 📂resources
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂badaso
 ┃ ┃ ┃ ┣ 📂custom_pages /** override the view here **/
 ┃ ┃ ┃ ┃ ┣ 📂{slug} /** put the override you want here, for example crud-management **/
 ┃ ┃ ┃ ┃ ┃ ┣ 📜browse.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜read.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜edit.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜add.vue
 ┃ ┃ ┃ ┃ ┃ ┗ 📜sort.vue
```

Note:
* browse.vue: Add if you need to change the appearance of the index / list.
* read.vue: Add if you need to change the appearance of the detail page.
* edit.vue: Add if you need to change the appearance of the edit page.
* add.vue: Add if you need to change the appearance of the add page.
* sort.vue: Add if you need to change the appearance of the sort page.

:::important
You can override all pages in the `pages` directory except `index.vue`.
:::