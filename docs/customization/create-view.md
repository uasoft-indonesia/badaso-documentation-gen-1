---
id: create-view
title: Create View
sidebar_label: Create View
---

Badaso menggunakan framework VueJS untuk Frontend. Maka dari itu untuk menambahkan view pada frontend juga menggunakan VueJS. Blok di bawah adalah struktur direktori untuk menambahkan view baru pada frontend. 
- untuk menambahkan view, tambahkan pada direktori `views`
- untuk penyesuaian layout dapat dilakukan pada direktori `layout`
- untuk mengakses view baru, perlu di tambahkan dulu routing nya pada direktori `router`
    - tambahkan route pada admin-router.js jika menambahkan view dengan layout admin-panel
    - tambahkan route pada public-router.js jika menambahkan view dengan layout landing-page
    
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