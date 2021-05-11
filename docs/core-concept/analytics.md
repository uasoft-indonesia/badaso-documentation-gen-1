---
id: analytics
title: Analytics
sidebar_label: Analytics
---

Analytics is useful for getting site visitor information such as the number of visitors to a page, the average length of time visitors have accessed the site, etc. To use analytics on badaso, you must create [Google Analytics](https://analytics.google.com/analytics/web) account first. After that, get the View ID and Tracking ID from your analytics.

Insert the View ID and Tracking ID from your analytics to .env variable `ANALYTICS_VIEW_ID` and `MIX_ANALYTICS_TRACKING_ID`.

To retrieve the site visitor information, you must create a service account for your analytics and download the service-account.json file. After that, you can store it in storage directory like below.

```
📦 Your Project
 ┣ 📂 storage
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📂 analytics
 ┃ ┃ ┃ ┗ 📜 service-account-crendetial.js   /** Store the .json file here. **/
```

:::important
You can adjust the service account credential store directory in `analytics.php` config file.
:::

:::important
Analytics will only detect visitor from accessing generated CRUD only.
:::

After that you can perform queries using classes provided by spatie/laravel-analytics. If you want to know more about the queries, visit [spatie/laravel-analytics](https://github.com/spatie/laravel-analytics).
