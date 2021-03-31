---
id: version-1.0.0-additional-css-js
title: Additional CSS and JS
sidebar_label: Additional CSS and JS
original_id: additional-css-js
---

## CSS

You can add custom css in the `assets` directory as in the shown below. Each SCSS file that is created, must register or import to the style.scss file

```
📦 Your Project
 ┣ 📂 resources
 ┃ ┣ 📂 js
 ┃ ┃ ┣ 📂 badaso
 ┃ ┃ ┃ ┣ 📂 assets
 ┃ ┃ ┃ ┃ ┣ 📂 scss /** register your style here **/
 ┃ ┃ ┃ ┃ ┃ ┗ 📜 example.scss
```

## JS

To add custom JS such as vanilla JS or other libraries, you can do it like installing a regular javascript library on laravel.
- To add a library, install the library as usual in the laravel project root.
- For the addition of other JS scripts, it can be installed on all JS badaso as needed.