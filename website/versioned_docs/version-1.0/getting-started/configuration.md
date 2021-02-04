---
id: version-1.0-configuration
title: Configuration
sidebar_label: Configuration
original_id: configuration
---

When Badaso has been successfully installed, you will find the configuration files in ```config/badaso.php``` and ```.env```. In this file you will find many options for changing the configuration of your Badaso installation.

## Back Up
The backup settings can be changed in the ```.env``` file.

### AWS S3
```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
AWS_BUCKET=
AWS_URL=
```
`AWS_ACCESS_KEY_ID`: Fill in to use the backup feature to AWS S3.

`AWS_SECRET_ACCESS_KEY`: Fill in to use the backup feature to AWS S3.

`AWS_DEFAULT_REGION`: S3 bucket region for uploading backup files.

`AWS_BUCKET`: S3 bucket name to upload the backup file.

`AWS_URL`: AWS S3 bucket URL.

### Google Drive
```
GOOGLE_DRIVE_CLIENT_ID=
GOOGLE_DRIVE_CLIENT_SECRET=
GOOGLE_DRIVE_REFRESH_TOKEN=
GOOGLE_DRIVE_FOLDER_ID=
```
`GOOGLE_DRIVE_CLIENT_ID`: Fill in to use the backup feature to Google Drive.

`GOOGLE_DRIVE_CLIENT_SECRET`: Fill in to use the backup feature to Google Drive.

`GOOGLE_DRIVE_REFRESH_TOKEN`: Fill in to use the backup feature to Google Drive.

`GOOGLE_DRIVE_FOLDER_ID`: Folder id to upload backup files into the specified folder.

### Dropbox
```
DROPBOX_AUTH_TOKEN=
```
`GOOGLE_DRIVE_CLIENT_ID`: Fill in to use the backup feature to Dropbox.