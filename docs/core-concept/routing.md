---
id: routing
title: Routing
sidebar_label: Routing
---

disini dijelaskan mengenai routing frontend dan backend untuk CRUD yang digenerate

Config
* MIX_API_ROUTE_PREFIX
* MIX_ADMIN_PANEL_ROUTE_PREFIX

CRUD GENERATED Routes

**Backend**
berikut adalah url api yang dipanggil

* Browse/Index (List) : GET

```{{BaseUrl}}/{{MIX_API_ROUTE_PREFIX}}/v1/entities/{{table slug}}```

* Add/Create : POST

```{{BaseUrl}}/{{MIX_API_ROUTE_PREFIX}}/v1/entities/{{table slug}}/add```

* Read/Detail : GET

```{{BaseUrl}}/{{MIX_API_ROUTE_PREFIX}}/v1/entities/{{table slug}}/read```

* Edit/Update : PUT

```{{BaseUrl}}/{{MIX_API_ROUTE_PREFIX}}/v1/entities/{{table slug}}/edit```

* Delete/Remove : DELETE

```{{BaseUrl}}/{{MIX_API_ROUTE_PREFIX}}/v1/entities/{{table slug}}/delete```


**Frontend**
berikut adalah url untuk navigasi frontend

* Browse/Index (List)

```{{BaseUrl}}/{{MIX_ADMIN_PANEL_ROUTE_PREFIX}}/main/{{table slug}}```

* Add/Create

```{{BaseUrl}}/{{MIX_ADMIN_PANEL_ROUTE_PREFIX}}/main/{{table slug}}/add```

* Read/Detail

```{{BaseUrl}}/{{MIX_ADMIN_PANEL_ROUTE_PREFIX}}/main/{{table slug}}/{{id}}```

* Delete/Remove

```{{BaseUrl}}/{{MIX_ADMIN_PANEL_ROUTE_PREFIX}}/main/{{table slug}}/{{id}}/edit```