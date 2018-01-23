1.0.0 / 2018-01-23
==================
  * Updated project to use node-xmpp-client as node-xmpp is no longer being maintained
  * Updated underscore to newer version
  * Added additional dependencies of he 1.1 and node-windows 0.1
  * Added installService.js and removeService.js files
  * Updated ReadMe to include instructions on running the bot as a Windows service
  * Updated the `chuckjokes.js` plugin to include better parsing of the values returned from the http call

0.8.1 / 2013-10-16
==================

  * Fixed a crash related to the keep-alive ping. (Pull req. #33 by Josh Goodwin)

0.8.0 / 2012-07-05
==================

  * Added `mention_name` to each entry returned by `Bot.getRoster`. (Pull req. #25 by Garret Heaton)
  * Added `mention_name` to `Bot` to obtain the mention name of the bot. (Pull req. #25 by Garret Heaton)
  * Added `historyStanzas` argument to `Bot.join` to specify the max amount history entries to request. (Pull req. #23 by Garret Heaton)

0.7.0 / 2012-01-13
==================

  * Changed the `Bot.onError` arguments. They are now `condition, text, stanza`. (Pull req. #22 by Garret Heaton)

0.6.0 / 2011-12-17
==================

  * Added `Bot.onInvite` which is triggered whenever the bot is invited to a room. (Pull req. #21 by Garret Heaton)

0.5.0 / 2011-12-10
==================

  * Added `Bot.getRooms` to obtain list of available rooms. (Pull req. #17 by Garret Heaton)
  * No longer need to specify the `name` of the bot in `wobot.Bot`. (Pull req. #18 by Garret Heaton)
  * Upon connecting, the bot will send the version it is running (or `caps_ver`) to the server. (Pull req. #16 by Garret Heaton)
  * The behavior of a bot disconnecting when an error occurs can now be overwritten when `bot.on('error')`.

0.4.0 / 2011-12-06
==================

  * Added `Bot.getRoster` to obtain the bot's buddy list. (Pull Req. #15 by Garret Heaton)
  * Added `Bot.sendIq` to send an IQ stanza. (Pull Req. #15 by Garret Heaton)
  * XMPP `host` can now be explicitly set in `wobot.Bot`. (Pull Req. #14 by Garret Heaton)

0.3.1 / 2011-11-09
==================

  * Updated `package.json` for Node 0.6.0 support.

0.3.0 / 2011-05-29
==================

  * New events API with RegExp support.
  * `Bot.pm` has been replaced with `Bot.message`.
  * `Bot.unloadPlugin` has been removed.
  * Updated `node-xmpp` to 0.2.7 for Node 0.4.8 support.

0.2.0 / 2011-05-15
==================

  * Added a new `error` event to capture XMPP errors
  * XMPP errors now trigger the `disconnect` event
  * `message` event will no longer be triggered when message is from self
  * Removed keepalive interval on disconnect

0.1.0 / 2011-05-09
==================

  * Passing reference to bot in plugin onload
  * Delayed messages will now be ignored

0.0.1 / 2011-05-05
==================

  * Initial release
