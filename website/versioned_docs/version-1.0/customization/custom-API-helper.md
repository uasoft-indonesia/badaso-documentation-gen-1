---
id: version-1.0-custom-API-helper
title: Custom API Helper
sidebar_label: Custom API Helper
original_id: custom-API-helper
---

Badaso provides a [axios](https://github.com/axios/axios) based utility for calling an API. The difference is that resource have inserted headers such as authorization and content-type. Here is an example of calling the API.
```js
resource.get(url); /** equal axios.get(url) **/
```

Badaso also supports for customization API helper. The block below is a directory structure for adding a new API  helper.

## Add an API Helper

- To add an API helper, add it to the `modules` directory in `api` directory.

```
📦Your Project
 ┣ 📂resources
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📂badaso
 ┃ ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┃ ┣ 📂modules /** you can add an API helper here **/
 ┃ ┃ ┃ ┃ ┃ ┗ 📜example-api.js
```

- Below is an example of HTTP request method that you can use.

<!--DOCUSAURUS_CODE_TABS-->
<!--GET-->
```js
example(data = {}) {
  let ep = '/example';
  let qs = QueryString(data);
  let url = ep + qs;
  return resource.get(url);
},
```
<!--POST-->
```js
example(data) {
  return resource.post('/example', data);
},
```
<!--PUT-->
```js
example(data) {
  return resource.put('/example', data);
},
```
<!--PATCH-->
```js
example(data) {
  return resource.patch('/example', data);
},
```
<!--DELETE-->
```js
example(data) {
  let paramData = {
    data: data,
  };
  return resource.delete('/example', paramData);
},
```
<!--END_DOCUSAURUS_CODE_TABS-->

- Here is the example of using the custom API helper.

<!--DOCUSAURUS_CODE_TABS-->
<!--Template-->
```js
$api.exampleApi.example(data)
```
<!--Script-->
```js
this.$api.exampleApi.example(data)
```
<!--END_DOCUSAURUS_CODE_TABS-->