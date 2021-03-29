---
id: version-1.0-menu-builder
title: Menu Builder
sidebar_label: Menu Builder
original_id: menu-builder
---

The following is a menu list view.

![menu-management](assets/menu-management.png)

The following display is the display of the menu builder, on this page the user can adjust the layout and menu order.

![menu-builder](assets/menu-builder.png)

## Add or Edit Menu

### Add Menu

In the following display, there are several fields that must be filled in when creating a menu.

* Title: The text that will appear on the menu.
* URL: The URL page that will be accessed when the menu is clicked.
* Target: Type of URL access method, The URL open in current tab or open in new tab.
* Icon: The icon that will appear on the menu. For a list of icons can be browse on the [Material Icon](https://material.io/resources/icons/?style=baseline) page.
* Color Picker: The color that will appear on the background menu.

![add-menu-item](assets/add-menu-item.png)

### Edit Menu

![edit-menu-item](assets/edit-menu-item.png)

### Menu Permission

Each menu can be assigned one or more permissions. If the logged-in user has one of these permissions, the menu will appear in the sidebar. If this menu isn't paired with permissions, it will always appear.

![set-menu-item-permissions](assets/set-menu-item-permissions.png)

```
MIX_DEFAULT_MENU
```

On the frontend, the menus are loaded from the store.js file. Here's the directory structure for changing the menu API calls.

```
- your project
    - resources
        - js
            - badaso
                - store
                    - store.js 
                        - FETCH_MENU
```