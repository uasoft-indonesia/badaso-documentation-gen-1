---
id: push-notification
title: Push Notification
sidebar_label: Push Notification
---

Badaso dapat menggunakan firebase cloud messages untuk push notifikasi, event notifikasi terjadi ketika ONCREATE, ONREAD, ONUPDATE, and ONDELETE data baris tabel

1. Setup file env
```
# ADD FIREBASE ENV
# VIEW FROM FIREBASE IN PROJECT SETTING > GENERAL
MIX_FIREBASE_API_KEY=""
MIX_FIREBASE_AUTH_DOMAIN=""
MIX_FIREBASE_PROJECT_ID=""
MIX_FIREBASE_STORAGE_BUCKET=""
MIX_FIREBASE_MESSAGE_SEENDER=""
MIX_FIREBASE_APP_ID=""
MIX_FIREBASE_MEASUREMENT_ID=""

# VIEW FROM FIREBASE IN PROJECT SETTING > CLOUD MESSAGES 
MIX_FIREBASE_WEB_PUSH_CERTIFICATES=""

# VIEW FROM FIREBASE IN PROJECT SETTING > CLOUD MESSAGES FROM BOX KEY PAIR > WEB PUSH CERTIFICATE
MIX_FIREBASE_SERVER_KEY=""
```
2. Panggil command `php artisan badaso:firebase-sw`

##Menggunkan class `FCMNoficication` 
bagaiman cara menggunkan class `FCMNotification` untuk kebutuhan lain push notification lainnya 
```
// indentifikasi class
$notification = new FCMNotification();
// pengiriman notifikasi 
$notification->send(
  [tokenClientFirebaseCloudNotification : string] array,
  judul : string,
  pesan : string,
  data : [ key => value, ... ] array
);
// contoh : $notification->send(["eKk2LSpXVE4hasCAP9t7Vy:APA91bHafroaQcAI3hTdXLYLXCRpaXSgZOqoNWVnNxMut8LlLJJ-LQJVjok2fONRV7c_J_JtymY7Q13F5d0SLxycRCTbv8539uuez2S1aka8yAXHBGg_Kd2xmjwEKTtR3D41cyZc3iSj"], "Judul pesan", "Content Pesan", [ "userId" => 65372 ])
```
