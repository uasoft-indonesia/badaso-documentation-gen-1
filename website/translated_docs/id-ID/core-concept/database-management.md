---
id: database-management
title: Database Management
sidebar_label: Database Management
---

Badaso menyediakan fitur manajemen database keren yang dapat membuat tabel, mengubah tabel, menghapus tabel, memigrasi tabel, dan menghapus file migrasi. Sederhananya, badaso menyediakan fitur manajemen database tanpa perlu membuat file migrasi menggunakan laravel artisan.

Anda dapat mengunjunginya di menu `Configuration -> Database Management` dan Anda akan melihat table Anda saat ini yang ada di dalam database. Anda juga dapat mengklik tombol **Add Table** untuk membuat tabel baru di database Anda.

![browse-table](assets/browse-table.jpeg)

Pada halaman ini Anda juga dapat melakukan **Rollback Migration**, **Alter Table** dan **Drop Table**.

:::warning
Jika Anda menggunakan fitur ini, maka Anda tidak dapat mengubah migrasi laravel atau properti tabel secara manual. Jika terdapat perubahan yang tidak terdaftar oleh badaso, maka migrasi tidak akan sinkron atau tidak akan berfungsi dengan baik
:::

:::important
Setiap perubahaan yang dilakukan akan otomatis dibuatkan file migrasi-nya.
:::

## Buat Tabel

Pada halaman ini Anda dapat membuat tabel baru. Berikut rincian dari field yang tersedia.

* `Table Name`: Input untuk nama tabel yang hanya memperbolehkan karakter alfanumerik dan underscore.
* `Timestamp`: Jika input dicentang, maka tabel yang dibuat akan memiliki field created_at dan updated_at dengan tipe data timestamp pada tabel yang baru dibuat.
* `Field Name`: Input untuk nama field pada tabel baru. Input ini hanya memperbolehkan karakter alfanumerik dan underscore.
* `Field Type`: Input untuk tipe field pada tabel baru.
* `Length/Value`: Input untuk panjang (varchar, char) atau nilai (set, enum). 
  * Field ini harus diisi jika tipe field bernilai varchar, char, set atau enum.
  * Jika tipe field bernilai varchar atau char, nilai input harus berupa integer atau angka.
  * Jika tipe field bernilai enum atau set, nilai input harus berupa array dengan pemisahnya yaitu koma (tanpa spasi).
  * Jika tipe field bernilai integer, big integer, float atau lainnya maka input ini dapat berfungsi sebagai decimal point dengan pemisahnya yaitu koma (tanpa spasi).
* `Auto Increment`: Input untuk auto increment pada tabel. Hanya satu auto increment pada tabel yang dibolehkan. Jika tipe field kosong saat mencentang auto increment, maka tipe field otomatis menjadi big integer dan field index menjadi primary.
* `Nullable`: Input untuk nullable field.
* `Default`: Input untuk default field.
* `As Defined`: Input untuk nilai dari default field jika memilih As Defined.
* `Index`: Input untuk index field.
* `Attribute`: Input untuk atribut field.

![create-table](assets/add-table.png)

## Alter Tabel

Pada halaman ini Anda dapat membuat perubahaan pada tabel Anda seperti menambahkan field, menghapus field, mengubah rincian field dan mengubah nama table. Rincian field sama seperti pada Create Table.

![alter-table](assets/alter-table.png)

:::important
Timestamp pada tabel akan otomatis di deteksi jika memiliki field `updated_at` dengan tipe field `timestamp` dan field `created_at` dengan tipe field `timestamp`.
:::

Berikut merupakan tampilan dari edit field ketika melakukan alter tabel.

![alter-field](assets/edit-field.png)

## Drop Tabel

Pada halaman ini Anda dapat menghapus tabel dengan menekan tombol **Drop Table**.

![browse-table](assets/browse-table.jpeg)

## Rollback Migrasi

Ketika Anda ingin melakukan rollback migrasi, maka centang batasan yang diinginkan lalu tekan tombol Rollback Migration. Jika Anda ingin menghapus file migrasi sekaligus, maka centang **Delete Migration File?**.

![rollback-migration](assets/rollback-migration.png)

## Rollback Konflik

Ketika migrasi pada database tidak cocok dengan file migrasi pada folder project Anda, maka akan muncul konflik seperti pada gambar. Untuk menyelesaikan konflik ini, maka Anda diminta untuk melakukan migrasi terhadap file migrasi yang tidak sinkron atau menghapus file migrasi tersebut.

:::warning
Ketika terjadi konflik, maka Anda tidak bisa melakukan apapun terhadap Database Management. Anda harus menyelesaikan konflik ini terlebih dahulu.
:::

![rollback-migration](assets/rollback-conflict.png)
