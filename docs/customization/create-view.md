---
id: create-view
title: Create View
sidebar_label: Create View
---

Badaso uses the VueJS framework for the Frontend. Therefore, adding views to the frontend also uses VueJS. The block below is a directory structure for adding a new view to the frontend.
- To add a view, add it to the `views` directory
- layout adjustments can be made in the `layout` directory
- To access the new view, it is necessary to add the routing to the `router` directory
     - add a route to admin-router.js if you add a view with admin-panel layout
     - add a route to public-router.js if you add a view with a landing-page layout
    
```
|-- your project
    |-- resources
        |-- js
            |-- badaso
                |-- layout //you can modify layout here
                    |-- admin-panel
                    |-- auth
                    |-- landing-page
                |-- router
                    |-- admin-router.js //add your custom route here
                    |-- public-router.js //add your custom route here**
                |-- views
                    |-- //create your own views here
```