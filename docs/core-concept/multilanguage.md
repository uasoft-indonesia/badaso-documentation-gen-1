---
id: multilanguage
title: Multilanguage
sidebar_label: Multilanguage
---

Backend
badaso menyediakan bahasa inggris secara default untuk language dari backend
untuk mengubah bahasa, perlu di config laravel locale, 
config ini dapat di set melalui env
code dibawah adalah struktur direktori untuk menambahkan bahasa/lang baru
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

Frontend
untuk beberapa label pada frontent, juga mengunakan lang terpisah dari backend
code di bawah adalah struktur direktori lang di frontend
lang pada frontend dapat di ubah melalui navbar header pada dashboard
lang di frontend hanya mengubah label pada frontent, tidak termasuk response dari backend badaso
```
|-- your project
    |-- resources
        |-- js
            |-- lang
                |-- module
                    |-- en.js
                    |-- add your lang js
```