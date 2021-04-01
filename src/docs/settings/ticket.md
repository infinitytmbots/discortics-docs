---
id: ticket
title: Tickets
hide_title: true
sidebar_label: Tickets
description: Setup tickets in your server.
---

# Ticket System
Setup tickets for your server.

:::warning Permissions Requirement
You require `MANAGE SERVER` permission to use this command. You can use the `PERMISSION` command to grant/deny privilege to any user/role to use this command.
:::

# What is a ticket
A ticket is when a customer or a member communicates with a staff or a support team to solve problems.

## Enable/Disable

  | Command | Description |
  |--------|------------|
  |`tsetup enable` | Enables tickets to work|
  |`tsetup disable` | Disables ticket.|

## Setting up tickets
Start by doing `tsetup create`.
You can cancel the setup anytime by replying `cancel`.

#### Mention the support role which will assist your members or customers.

This step can be skipped, by replying `none`/`skip`. You can set this up manually by setting up the permissions for the ticket category that the bot will create.


#### Mention the channel in which the reaction message must be sent. People can open tickets by reacting to this message.

You can not skip this part.

#### Enter a message that the member or customer will see when they open a ticket
You can use the default message by replying `none`.

## Ticket Utils

  | Command | Description |
  |--------|------------|
  |`tclaim` | The ticket name will be changed to `claim-ticket-number` when a ticket is claimed it means that someone will take care of the member or customer.|
  |`tclose` | Close the ticket you can also react to the lock emoji, to reopen react with unlock emoji or delete by reacting the trash emoji.|
  |`tadd` | Add a member or customer to the ticket.|
  |`tremove` | Remove a member or customer from the ticket.|
  |`tmove` | Move the ticket to another category.|
  |`trename` | Rename the ticket.|
  |`tsend` |Send an anonymous reply to the ticket.|
