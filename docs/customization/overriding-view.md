---
id: version-1.0-overriding-view
title: Overriding View
sidebar_label: Overriding View
---

Each CRUD generated from the CRUD generator uses the same view. However, there are times when the view must be changed as needed. Badaso provides features for custom views. For this custom view, Badaso will check whether any views are created on the custom page, if not, Badaso will use the default view.

Badaso assumes that the user is familiar with the basics of vue. Therefore Badaso doesn't explain how to create components in vue.

Here are the steps for creating a custom view to customize the appearance of the CRUD Generator.

1. Create a vue file on the resource like the following structure
```
root_project
    |-- resources
        |-- js
            |-- badaso
                |-- custom_pages
                    |-- {slug}
                        |-- browse.vue
                        |-- read.vue
                        |-- edit.vue
                        |-- add.vue
                        |-- sort.vue
```
Note:
* browse.vue -> add if you need to change the appearance of the index / list
* read.vue -> add if you need to change the appearance of the detail page
* edit.vue -> add if you need to change the appearance of the edit page
* add.vue -> add if you need to change the appearance of the add page
* sort.vue -> add if you need to change the appearance of the sort page


2. There are times when the user only needs to change the display but not the script. to get the default source Badaso can be taken on
```
root_project
    |-- resources
        |-- js
            |-- badaso
                |-- pages
                    |-- crud-template
                        |-- browse.vue
                        |-- read.vue
                        |-- edit.vue
                        |-- add.vue
                        |-- sort.vue
```