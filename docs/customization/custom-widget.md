---
id: custom-widget
title: Custom Widget
sidebar_label: Custom Widget
---

Badaso supports creating and displaying widgets on the dashboard page. Badaso also provides default widget (user, role and permission widget). Here's what the widget looks like.

![widget](assets/widget.png)

## Add Widget

1. Create a php file in the `app\Widgets` folder (if the folder does not exist, then create a folder first). Then fill in the file with the following template.

```
📦Your Project
 ┣ 📂app
 ┃ ┣ 📂Widgets /** register your widget here **/
 ┃ ┃ ┗ 📜ExampleWidget.php
```

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```php
<?php

namespace App\Widgets;

use Uasoft\Badaso\Interfaces\WidgetInterface;

class ExampleWidget implements WidgetInterface
{
    public function run($params = null)
    {
        return [
            'label' => 'Label', /** Fill in the label as desired **/
            'value' => 0,       /** Fill in the value as desired **/
        ];
    }
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

2. Then add the file or class you just created to the configuration file `config\badaso.php`.

<!--DOCUSAURUS_CODE_TABS-->
<!--PHP-->
```php
<?php

return [
    ...
    'widgets' => [
        'Uasoft\\Badaso\\Widgets\\UserWidget',
        'Uasoft\\Badaso\\Widgets\\RoleWidget',
        'Uasoft\\Badaso\\Widgets\\PermissionWidget',
        'App\\Widgets\\ExampleWidget', /** Register the widget here **/
    ],
];
```
<!--END_DOCUSAURUS_CODE_TABS-->