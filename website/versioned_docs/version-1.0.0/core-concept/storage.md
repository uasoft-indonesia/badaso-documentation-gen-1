---
id: version-1.0.0-storage
title: Storage
sidebar_label: Storage
original_id: storage
---


Badaso provides some storage driver that laravel already support like AWS S3, Google Drive and Dropbox. 

To use the storage driver, just set it on env like below.

1. Setup ENV
```
#OPTIONAL. Badaso default storage driver are public by removing the key below from .env
FILESYSTEM_DRIVER=

#OPTIONAL. Set AWS credential if use aws as storage
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
AWS_BUCKET=
AWS_URL=

#OPTIONAL. Set Google Drive credential if use Google Drive as storage
GOOGLE_DRIVE_CLIENT_ID=
GOOGLE_DRIVE_CLIENT_SECRET=
GOOGLE_DRIVE_REFRESH_TOKEN=
GOOGLE_DRIVE_FOLDER_ID=

#OPTIONAL. Set Dropbox credential if use Dropbox as storage
DROPBOX_AUTH_TOKEN=

```
