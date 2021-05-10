---
id: version-1.0.0-push-notification
title: Push Notification
sidebar_label: Push Notification
original_id: push-notification
---

Badaso can use firebase cloud messages for push notifications, event notifications occur when ONCREATE, ONREAD, ONUPDATE, and ONDELETE table row data

1. Setup the env file
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
2. Call the command `php artisan badaso:firebase-sw`

### Use the `FCMNoficication` class
how to use the `FCMNotification` class for other push notification needs
```
// identifies the class
$ notification = new FCMNotification ();
// sending notification
$ notification-> send (
   [tokenClientFirebaseCloudNotification: string] array,
   title: string,
   message: string,
   data: [key => value, ...] array
);
// example: $ notification-> send (["eKk2LSpXVE4hasCAP9t7Vy:APA91bHafroaQcAI3hTdXLYLXCRpaXSgZOqoNWVnNxMut8LlLJJ-LQJVjok2fONRV7c_J_JtymY7Q13F5d0SLxycRCTbv8539uuez2S1aka8yAXHBGg_Kd2xmjwEKTtR3D41cyZc3iSj"], "Message title", "Message Content", ["userId" => 65372])
```