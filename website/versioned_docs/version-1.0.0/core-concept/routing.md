---
id: version-1.0.0-routing
title: Routing
sidebar_label: Routing
original_id: routing
---

This page explains the frontend and backend routing for the generated CRUD.

`.env` configuration:
```
MIX_API_ROUTE_PREFIX=
MIX_ADMIN_PANEL_ROUTE_PREFIX=
```

## CRUD Generated Routes

### Backend

The following is the type of API URL called for the Backend.

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


### Frontend

The following is the type of API URL called for the Frontend.

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