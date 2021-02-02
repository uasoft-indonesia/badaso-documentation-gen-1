---
id: relation
title: Relation
sidebar_label: Relation
---

## Generate CRUD

Badaso menyediakan fitur untuk merelasikan data dari suatu table dengan table lain. saat membuat sebuah CRUD, user dapat merelasikan sebuah field dari suatu table ke table lain. dengan memilih field mana yang akan direlasikan, memilih jenis relasi dan table tujuan.

## View

Code dibawah adalah sample untuk penggunaan Relation pada vue template.

```
<badaso-select
    v-if="formType === 'relation' && relationType === 'belongs_to'"
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :items="itemFromRelation"
    :alert="errors"
></badaso-select>
<badaso-text
    v-if="formType === 'relation' && relationType !== 'belongs_to'"
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="errors"
></badaso-text>
```
