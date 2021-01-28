---
id: relation
title: Relation
sidebar_label: Relation
---

For CRUD Generated
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
