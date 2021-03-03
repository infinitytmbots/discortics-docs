---
id: application
title: Applications
hide_title: true
sidebar_label: Applications
description: Setup an applications for your server
---

# Application System
Setup an applications for your server.

:::warning Permissions Requirement
You require `MANAGE SERVER` permission to use this command. You can use the `PERMISSION` command in order to grant/deny privilege to any user/role to use this command.<br>
Dashboard requires you to have `ADMINISTRATOR` permission in order to configure settings.
:::

Discortics Application System is easy to configure & use. You can have upto 50 questions and collect infinite applications. Here is how to setup applications in your server.

## Questions
In order to add the questions, 
-  Log into the [**Dashboard**](https://discortics.ga)
-  Choose Your Server
-  Select Applications from the Left-side Menu
-  Click on `Add Questions` button and enter your question. Repeat the process until all questions are ready.
-  To save the questions, click on `Save Current Settings` and you are ready!

## Open/Close
This toggle is used to open & close applications. This can be done either via the Dashboard or though Commands.

- Through Commands
  The command `app-status` is used to toggle the applications.

  | Command | Description |
  |--------|------------|
  |`app-status open` | Opens application. Users can apply using the command `apply`|
  |`app-status closed` | Closes Application.|

- Through Dashboard
  The application toggle is available in the Application Section of the [**Dashboard**](https://discortics.ga).

## Application Logging
To view the applications submitted, you have two options,
- Use the Automatic Application Logging
  Automatic application logging sends the application to a specific channel when the applicant completes it.<br>
  To enable application logging, choose the channel in the Application Section of the [**Dashboard**](https://discortics.ga).

- Manual Review
  You can also view all the applications using the `review` command. The command alone shows all the applications along with their ID.<br>
  In order to view a particular application, use `review [ID]`.

## Acceptance/Denial DMs
While/After collecting the applications, you can accept/deny them.<br>
When you accept/deny, the applicant is send a DM of their application status.<br>
**Note: Acceptance/Denial of an Application Deletes it Permenantly**

| Command | Description |
|--------|------------|
|`accept [ID]` | Accepts the Application/User ID |
|`accept all` | Accepts all Applications.|
|`deny [ID]` | Denies the Application/User ID |
|`deny all` | Denies all Applications.|

## Deleting Applications
You need to clear all the applications before you reopen applications again for the usersto be able to apply again.<br>
To clear applications, use the command `scroll` which wips all current applications **permenantly**. <br>
If a user has an application in the database, the user will not be able to apply again unless its deleted either using `scroll` or `accept`/`deny`.



