---
id: overriding-page
title: Overriding Page
sidebar_label: Overriding Page
---

Each CRUD generated from the CRUD generator uses the same page. However, there are times when the page must be changed as needed. Badaso provides features for custom pages. For this custom page, Badaso will check whether any pages are created on the custom page, if not, Badaso will use the default page.

Badaso assumes that the user is familiar with the basics of vue. Therefore Badaso doesn't explain how to create components in vue.

:::important
You can override all pages in the `pages` directory except `index.vue`.
:::

## Overriding CRUD Generated Page

Here are the steps for creating a custom view to customize the appearance of the CRUD Generated.

- Create a vue file on the resource like the following structure.
```
📦 Your Project
 ┣ 📂 resources
 ┃ ┣ 📂 js
 ┃ ┃ ┣ 📂 badaso
 ┃ ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┃ ┃ ┣ 📂 {slug} /** put the override you want here, for example book-management **/
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 browse.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 read.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 edit.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 add.vue
 ┃ ┃ ┃ ┃ ┃ ┗ 📜 sort.vue
```

Note:
* browse.vue: Add if you need to change the appearance of the index / list.
* read.vue: Add if you need to change the appearance of the detail page.
* edit.vue: Add if you need to change the appearance of the edit page.
* add.vue: Add if you need to change the appearance of the add page.
* sort.vue: Add if you need to change the appearance of the sort page.

## Overriding Badaso Default Pages

Here are the steps for creating a custom view to customize the appearance of the page except Crud Generated and index.vue.

- Create a vue file on the resource like the following structure.
```
📦 Your Project
 ┣ 📂 resources
 ┃ ┣ 📂 js
 ┃ ┃ ┣ 📂 badaso
 ┃ ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┃ ┃ ┣ 📂 {badaso-pages} /** put the override you want here, for example database-management **/
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 browse.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 read.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 edit.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜 add.vue
 ┃ ┃ ┃ ┃ ┃ ┗ 📜 sort.vue
```

You can find `badaso-pages` at

```
📦 Your Project
 ┣ 📂 vendor
 ┃ ┣ 📂 uasoft-indonesia
 ┃ ┃ ┣  📂 badaso
 ┃ ┃ ┃ ┣ 📂 src
 ┃ ┃ ┃ ┃ ┣ 📂 resources
 ┃ ┃ ┃ ┃ ┃ ┣ 📂 js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂 {badaso-pages} /** HERE **/
```

Note:
* browse.vue: Add if you need to change the appearance of the index / list.
* read.vue: Add if you need to change the appearance of the detail page.
* edit.vue: Add if you need to change the appearance of the edit page.
* add.vue: Add if you need to change the appearance of the add page.
* sort.vue: Add if you need to change the appearance of the sort page.