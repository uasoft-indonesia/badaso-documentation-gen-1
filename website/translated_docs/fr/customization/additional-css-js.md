---
id: additional-css-js
title: Additional CSS and JS
sidebar_label: Additional CSS and JS
---

## CSS

Kamu dapat menambahkan css kustom di direktori `assets` seperti pada direktori di bawah ini. Setiap file SCSS yang dibuat, harus didaftarkan atau diimport ke file style.scss.

```
📦Your Project
 ┣ 📂resources
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂badaso
 ┃ ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┃ ┣ 📂scss /** register your style here **/
 ┃ ┃ ┃ ┃ ┃ ┗ 📜example.scss
```

## JS

Untuk menambahkan JS lain seperti vanilla JS atau library lainnya dapat dilakukan seperti menginstall library JS biasa pada laravel.
- Untuk penambahan library, install library seperti biasa pada root project laravel.
- Untuk penambahan Script JS lainnya, dapat dipasang pada semua JS badaso sesuai kebutuhan.