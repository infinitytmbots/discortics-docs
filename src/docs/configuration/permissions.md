---
id: permissions
title: Permissions
sidebar_label: Permissions
description: Setup custom permissions for each role and user.
---

# Permissions
Setup custom permissions for each role and user.

:::warning Permissions Required
You require `MANAGE SERVER` permission to use this command. You can use the `PERMISSION` command in order to grant/deny privilege to any user/role to use this command.
:::

### Usage
```
;permission (allow/view/clear/deny) (role/user) (command/category)
```

## Adding permissions for a command/category
You can add permission to a users or an roles to allow them to use the category or command
 - Adding permissioins from roles, run `;permissions allow (role) (command/category)`.
 - Example:
 ```
;permission allow @role hack
```
 - Adding permissioins from users, run `;permissions allow (user) (command/category)`.
 - Example:
 ```
;permission allow @member hack
```

## Removing permissions for a command/category
Removing permissions is like the same thing as adding permissions expect they are refused to use the category or command
 - Removing permissioins from roles, run `;permissions deny (role) (command/category)`.
 - Example:
 ```
;permission deny @role hack
```
 - Removing permissioins from users, run `;permissions deny (user) (command/category)`.
 - Example:
 ```
;permission deny @member hack
```

## Viewing permissions for users/roles
Have you been adding/removing to much permissions and lost track where you we're? You can view what permissions a user/role has
- Viewing permissions for roles, run `;permissions view (role)`.
- Viewing permissions for users, run `;permissions view (user)`.

## Clearing permissions for users/roles
Comming Soon!
