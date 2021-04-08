---
id: multilanguage
title: Multilanguage
sidebar_label: Multilanguage
---

## Backend

Badaso provides english by default for languages in backend. To change the language, it is necessary to make a localization configuration for laravel, this configuration can be set via ```.env```. Below is the directory structure for adding a new language.

```
📦 Your Project
┃ ┣ 📂 resources
┃ ┃ ┣ 📂 lang
┃ ┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┃ ┣ 📂 en
┃ ┃ ┃ ┃ ┃ ┣ 📜 api_response.php
┃ ┃ ┃ ┃ ┃ ┣ 📜 validation.php
┃ ┃ ┃ ┃ ┣ 📂 add your lang
┃ ┃ ┃ ┃ ┃ ┣ 📜 api_response.php
┃ ┃ ┃ ┃ ┃ ┣ 📜 validation.php
```

## Frontend

Untuk beberapa label pada frontend, juga menggunakan bahasa terpisah dari backend. Kode di bawah adalah struktur direktori bahasa di frontend. Bahasa pada frontend dapat di ubah melalui navbar header pada dashboard. Bahasa di frontend hanya mengubah label pada frontend, tidak termasuk response dari backend Badaso.

```
📦 Your Project
┃ ┣ 📂 resources
┃ ┃ ┣ 📂 js
┃ ┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┃ ┣ 📂 lang
┃ ┃ ┃ ┃ ┃ ┣ 📜 en.js
┃ ┃ ┃ ┃ ┃ ┣ 📜 id.js
```