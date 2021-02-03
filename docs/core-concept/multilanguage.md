---
id: multilanguage
title: Multi Bahasa
sidebar_label: Multi Bahasa
---

## Backend

Badaso menyediakan bahasa inggris secara *default* untuk bahasa dari *backend*. Untuk mengubah bahasa, perlu dibuatkan konfigurasi lokalisasi untuk laravel, konfigurasi ini dapat diatur melalui ```.env```. Kode di bawah adalah struktur direktori untuk menambahkan bahasa baru.

```
|-- your project
    |-- resources
        |-- lang
            |-- badaso
                |-- en
                    |-- api_response.php
                    |-- validation.php
                |-- add your lang
                    |-- api_response.php
                    |-- validation.php
```

## Frontend

Untuk beberapa label pada frontent, juga menggunakan bahasa terpisah dari *backend*. Kode di bawah adalah struktur direktori bahasa di *frontend*. Bahasa pada *frontend* dapat di ubah melalui navbar header pada dashboard. Bahasa di *frontend* hanya mengubah label pada *frontend*, tidak termasuk response dari *backend* Badaso.
```
|-- your project
    |-- resources
        |-- js
            |-- lang
                |-- module
                    |-- en.js
                    |-- add your lang js
```