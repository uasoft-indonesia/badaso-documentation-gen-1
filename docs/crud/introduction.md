---
id: introduction
title: Pengenalan
sidebar_label: Pengenalan
---

Ketika menambahkan atau mengubah CRUD yang telah ada, kamu akan melihat beberapa info yang dapat kamu ubah yaitu Display Name (Singular dan Plural), Server Side, URL Slug, Icon, Model Name, Controller Name, Order Column, Order Display Column, Order Direction dan Description. Kamu juga dapat memilih jika kamu ingin membuat **Permission** secara otomatis.

## Create Table Description
![crud-add-image](assets/crud-add-part-1.png)

## Set Field property
* BROWSE (field will show up when you browse the current data)
* READ (field will show when you click to view the current data)
* EDIT (field will be visible and allow you to edit the data)
* ADD (field will be visible when you choose to create a new data type)
* DELETE (doesn't pertain to delete so this can be checked or unchecked)

![generate-crud](assets/generate-crud.png)

## Form Result
![form-field](assets/form-field.png)

## From Ouput

Setiap form yang di generate, akan menggunakan vue component yang sudah disediakan badaso.
Pada JSON dibawah, property value adalah output dari tiap form, dan field adalah nama kolom dari table yang di generate.

```
{
  "data": [
    {
      "field": "badaso_text",
      "value": 227
    },
    {
      "field": "badaso_password",
      "value": "password"
    },
    {
      "field": "badaso_textarea",
      "value": "textarea"
    },
    {
      "field": "badaso_search",
      "value": "search"
    },
    {
      "field": "badaso_checkbox",
      "value": [
        "this_is_value"
      ]
    },
    {
      "field": "badaso_number",
      "value": "1"
    },
    {
      "field": "badaso_url",
      "value": "http://dev.programming-bot.com/badaso-admin/main/data-test/add"
    },
    {
      "field": "badaso_time",
      "value": "2021-01-27T10:18:00.000Z"
    },
    {
      "field": "badaso_date",
      "value": "2021-01-27T00:00:00.000Z"
    },
    {
      "field": "badaso_select",
      "value": "this_is_value"
    },
    {
      "field": "badaso_datetime",
      "value": "2021-01-27T10:18:00.000Z"
    },
    {
      "field": "badaso_select_multiple",
      "value": [
        "this_is_value"
      ]
    },
    {
      "field": "badaso_radio",
      "value": "this_is_value"
    },
    {
      "field": "badaso_switch",
      "value": true
    },
    {
      "field": "badaso_slider",
      "value": 22
    },
    {
      "field": "badaso_editor",
      "value": "<p>editor</p>"
    },
    {
      "field": "badaso_tags",
      "value": "badaso,tags"
    },
    {
      "field": "badaso_color_picker",
      "value": "#754B4B"
    },
    {
      "field": "badaso_upload_image",
      "value": {
        "name": "blog.jpg",
        "base64": "string too long",
        "file": {}
      }
    },
    {
      "field": "badaso_upload_image_multiple",
      "value": [
        {
          "name": "categories.jpg",
          "base64": "string too long",
          "file": {}
        },
        {
          "name": "event.jpg",
          "base64": "string too long",
          "file": {}
        }
      ]
    },
    {
      "field": "badaso_upload_file",
      "value": {
        "name": "halaman.jpg",
        "base64": "string too long",
        "file": {}
      }
    },
    {
      "field": "badaso_upload_file_multiple",
      "value": [
        {
          "name": "kelas.jpg",
          "base64": "string too long",
          "file": {}
        },
        {
          "name": "mentor.jpg",
          "base64": "string too long",
          "file": {}
        }
      ]
    },
    {
      "field": "badaso_hidden",
      "value": "hidden"
    }
  ]
}
```
## Catatan

setiap component yang disediakan badaso, ditujukan untuk digunakan di dalam tag dengan css class row. 
semua component yang disedikan badaso merupakan component yang terdiri dari vs-col. jadi pada CRUD Generator, 
bagian Optional details dapat di isi JSON dengan property size. property size ini berisi angka 1-12 yang mana angka ini adalah nilai untuk diterapkan pada vs-col.
Contoh:
```
<vs-row>{{component}}</vs-row>
```