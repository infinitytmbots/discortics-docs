---
id: autorole
title: Auto-Roles
sidebar_label: Auto-Roles
description: Setup roles to be given on join.
---

# Auto-Roles
Setup roles to be given on join.

:::warning Permissions Required
You require `MANAGE SERVER` permission to use this command. You can use the `PERMISSION` command in order to grant/deny privilege to any user/role to use this command.
:::

This command allows you to view/add/remove auto-toles which are given to a user upon join.

### Usage
```
;auto-role (add/remove) (role)
```

## Adding/Removing Roles
 - To __add__ a role, run `;auto-role add [role ID/name/mention]` in any of the channels the bot has access to.
 - To __remove__ a role, run `;auto-role remove [role ID/name/mention]` in any of the channels the bot has access to.

## Viewing Roles
To view current messsage, type `;auto-role`.
If auto-roles exist, they will be displayed along with the sub command description.

## FAQ
### Why didn't I receive the role on join?
The bot requires `MANAGE ROLES` permission as well as the ability to manage the role. Make sure the auto-role(s) are below the highest role of the bot.