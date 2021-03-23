---
id: version-1.0-create-view
title: Create View
sidebar_label: Create View
original_id: create-view
---

Badaso uses the VueJS framework for the Frontend. Therefore, adding views to the frontend also uses VueJS. The block below is a directory structure for adding a new view to the frontend.
- To add a view, add it to the `pages` directory
- layout adjustments can be made in the `layout` directory
    
```
|-- your project
    |-- resources
        |-- js
            |-- badaso
                |-- layout //you can modify layout here
                    |-- admin-panel
                    |-- auth
                    |-- landing-page
                |-- pages
                    |-- //create your own views here
```
- To access the new view, the user must add a router to the router directory

```
|-- your project
    |-- resources
        |-- js
            |-- badaso
                |-- router
                    |-- //create your own router js here
                    |-- router.js // register your router here
```
- Register router
```
import YourRouter from "path-to-your-router";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      name: "Auth",
      component: AuthContainer,
      children: [
          ...AuthRoute,
          ...{YourRouter} // Register #1
        ],
    },
    {
      path: "",
      name: "LandingPage",
      component: LandingPageContainer,
      children: [
          ...PublicRoute,
          ...{YourRouter} // Register #2
        ],
    },
    {
      path: "",
      name: "AdminPanel",
      component: AdminContainer,
      children: [
        ...AdminRoute,
        ...{YourRouter} // Register #3
      ],
    },
    ...{YourRouter} // Register #4
    ...,
  ],
});
```
Register the router on `router.js`. Place your router in the space provided according to the number. You can choose to be placed on the number # 1, # 2, # 3 or # 4. In accordance with the Container Layout that will be used for your view.