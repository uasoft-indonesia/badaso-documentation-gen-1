---
id: auto-backup
title: Auto Backup
sidebar_label: Auto Backup
---

Badaso provides automatic backup features. You can setup env to backup your file or database to your storage.

To use Auto Backup, there is some config needs to setup.

1. Setup ENV
```
#OPTIONAL. Badaso provide backup feature. please fill variable below to 
#use this feature.
#fill with one of all,database,files, backup will not run if BACKUP_TARGET 
#empty
BACKUP_TARGET=
#fill with many of s3,google,dropbox, backup will not run if BACKUP_TARGET 
#empty
BACKUP_DISK=
```

2. Add the following line to the ```config/database.php```
<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```php
...,
'connections' => [
	'mysql' => [
		'driver'    => 'mysql'
		...,
		'dump' => [
		   'dump_binary_path' => env('DUMP_BINARY_PATH', 'C:\xampp\mysql\bin'),
		   'use_single_transaction',
		   'timeout' => 60 * 5, // 5 minute timeout
		]  
  ],
...,
```
<!--END_DOCUSAURUS_CODE_TABS-->

3. Add the following line to the ```config/filesystem.php```
<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```php
'disks' => [

  ...,

  's3' => [
    'driver' => 's3',
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION'),
    'bucket' => env('AWS_BUCKET'),
    'url' => env('AWS_URL'),
  ],

  'google' => [
    'driver' => 'google',
    'clientId' => env('GOOGLE_DRIVE_CLIENT_ID'),
    'clientSecret' => env('GOOGLE_DRIVE_CLIENT_SECRET'),
    'refreshToken' => env('GOOGLE_DRIVE_REFRESH_TOKEN'),
    'folderId' => env('GOOGLE_DRIVE_FOLDER_ID'),
  ],

  'dropbox' => [
    'driver' => 'dropbox',
    'authorization_token' => env('DROPBOX_AUTH_TOKEN'),
  ],

],
```
<!--END_DOCUSAURUS_CODE_TABS-->

4. Run Backup command
```
php artisan badaso:backup
```