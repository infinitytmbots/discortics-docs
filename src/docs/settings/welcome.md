---
id: welcome
title: Welcome Message
sidebar_label: Welcome Message
description: Setup welcome messages.
---

# Welcome Message
Setup welcome messages.

:::warning Permissions Required
You require `MANAGE SERVER` permission to use this command. You can use the `PERMISSION` command in order to grant/deny privilege to any user/role to use this command.
:::

Setup welcome messages. Currently, the bot only supports messages. Embeds with images are coming soon!

### Usage
```
;welcome [channel/"dm"/"message"/"disable"] (new message)
```
## Enable/Disable


 - To __enable__ this feature, type `;welcome #channel` in any of the channels the bot has access to. This sets the mentioned channel as your new welcome channel.
 - Additionally, type `;welcome dm` in order to set DMs as the welcome channel. The newly joined user will be dmed the welcome message.
 - To __disable__ this feature, type `;welcome disable` in any of the channels the bot has access to. This disables the welcome messages.

## Welcome Message
Discortics has multiple variables which you could be used in welcome messages.

To view current messsage, type `;welcome`.
The `;welcome message` command will list all the below provided variables in the respective channel.
##### General Syntax
```
;welcome message [new message]
```
##### Default Messsage
```yaml
[user:mention], Welcome to ** [server:name] **
```
 
| Variable | Description |
|--------|-------------|
|`[user:mention]`|Mention the User
|`[user:tag]`|Show the tag of the User
|`[user:creation]`| Show the user account creation date (Do MMM YYYY)
|`[user:createdAgo]`|Show how long ago the account was created
|`[server:name]`| Show the Server Name
|`[server:members]`| Server Member Count



