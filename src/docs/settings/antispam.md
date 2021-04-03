---
id: antispam
title: Antispam
hide_title: true
sidebar_label: Antispam
description: Setup an antispam/raid filter in your server.
---

# Antispam
Setup an antispam/raid filter in your server.

:::warning Permission Requirement
You require `MANAGE SERVER` permission to use this command. You can use the `PERMISSION` command in order to grant/deny privilege to any user/role to use this command.
:::

The most advanced yet another easy-to-manage antispam filter.Antispam is one of our proud features. Its highly advanced, yet you can configure it with ease.

### Usage
```
;antispam [enable/config/disable] (options)
```
## Enable/Disable


 - To __enable__ this feature, type `;antispam enable` in any of the channels the bot has access to. This enables the antispam filter with the default configuration.
 - To __disable__ this feature, type `;antispam disable` in any of the channels the bot has access to. This disables the antispam filter throughout the server.

## Configurations
The following are the configurations which can be applied to the antispam filter.

To view current configurations, type `;antispam` in any of the channels the bot has access to. If the filter is enabled, the bot will list the configurations.
##### General Syntax
```
;antispam [config] [options]
```
 
| Config | Description | Usage | Default |
|--------|-------------|-------|---------|
|`warn`| Warn the user | `warn [enable/disable]` | Enabled|
|`mute`| Mute the user | `mute [enable/disable]` | Disabled|
|`spam-rate`| The message rate which will define a spam | `spam-rate messages/time` | 5 msgs/5s|
|`duplicate-rate`| The number of duplicate message which should result in a mute | `duplicate-rate messages/time` | 3 msgs/30s|
|`mute-warns`| The number of warns which should result in a mute | `mute-warns warns/time` | 3 warns/5m|
|`mute-duration`| The duration for which the user should be muted | `mute-duration time` | 15m |
|`ignored-users`| Whitelisted Users (Users with `ADMINISTRATOR` are whitelisted by default) | `ignored-users [add/remove] @user1 @user2` | None |
|`ignored-channels`| Whitelisted Channels | `ignored-channels [add/remove] #channel1 #channel2` | None |
|`ignored-roles`| Whitelisted Roles | `ignored-roles [add/remove] @role1 @role2` | None |

__Abbrevations Used:__
```
s - Seconds
m - Minutes
msgs - Messages
```


## FAQ
### Why doesn't the bot mute the spammer?
Muting system is disabled by default. You need to enable it via `antispam mute enable`. Additionally, if you don't have the mute role created/set, you need to set/create using the `muted-role [set/create] (role)` command. Also make sure that the mute-role exists and is below the highest role of the bot.<br>
**Note:** Users with `ADMINISTRATOR` permission has bypass since muting has no additional effects on them.
