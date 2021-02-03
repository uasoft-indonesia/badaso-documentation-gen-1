---
id: routing
title: Rute
sidebar_label: Rute
---

Pada halaman ini dijelaskan mengenai *routing frontend* dan *backend* untuk CRUD yang di-*generate*.

Konfigurasi *Environtment*:
```
MIX_API_ROUTE_PREFIX=
MIX_ADMIN_PANEL_ROUTE_PREFIX=
```

## CRUD *Generated Routes*

### *Backend*

Berikut ini merupakan tipe URL API yang dipanggil untuk Backend.

* Browse/Index (List) : GET

```javascript
BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG
```

* Add/Create : POST

```javascript
BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/add
```

* Read/Detail : GET

```javascript
BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/read
```

* Edit/Update : PUT

```javascript
BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/edit
```

* Delete/Remove : DELETE

```javascript
BASE_URL/MIX_API_ROUTE_PREFIX/v1/entities/TABLE_SLUG/delete
```


### *Frontend*

Berikut ini merupakan tipe URL API yang dipanggil untuk Frontend.

* Browse/Index (List)

```javascript
BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG
```

* Add/Create

```javascript
BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG/add
```

* Read/Detail

```javascript
BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG/ID/detail
```

* Edit/Update

```javascript
BASE_URL/MIX_ADMIN_PANEL_ROUTE_PREFIX/main/TABLE_SLUG/ID/edit
```