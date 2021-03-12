---
id: verification
title: Verification
hide_title: true
sidebar_label: verification
description: Setup verification in your server.
---

# Verification System
Setup verification for your server.

:::warning Permissions Requirement
You require `MANAGE SERVER` permission to use this command. You can use the `PERMISSION` command in order to grant/deny privilege to any user/role to use this command.<br>
Dashboard requires you to have `ADMINISTRATOR` permission in order to configure settings.
:::

:::warning IP Logging
By enabling, we're granted the permission to store the IP address of users that verify through Discortics. Each ip is stored in a highly secure database whose access is restricted to the owner of Discortics.
:::

## Enable/Disable

  | Command | Description |
  |--------|------------|
  |`verify log [channel]` | Enables verification if not enable, and sets the log channel.|
  |`verify disable` | Disable verification.|

## Setting up Verification
Make a role that has access to talk in channels, make sure the `@everyone` role does not have perrmission to veiw or speak in the channels unless you want.<br>
Use `verify add [role]`, now once the user has verify they will automatically recive this role and be able to chat.

## Alt Kicks/Bans
You'll never have to worry about fake invites and alts joining giveaway etc. By using `verify age [time]` the user's account will at least have to be old as the time you entered to stay in the server.<br>
You must setup an action that will happen when a user's account age is not old enough or else no action will take place. To set an action Kick/Ban you must do `verify action [kick/ban]`.

## Verification Utils

  | Command | Description |
  |--------|------------|
  |`v-info` | Get information about a user who has verified in your server.|
  |`v-manual` | Manually verify a user, which means they can receive the member role without verifying|
  |`oldest` | Lists top 15 oldest accounts in Discord that is in your server.|
  |`youngest` | Lists top 15 youngest accounts in Discord that is on your server.|
