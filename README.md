# wobot

A plugin-based HipChat bot written in Node.js.

# Installation

Download the source.

# Your First Bot

Create a file called `wobot.js` and instantiate the `wobot.Bot` class by passing it an object containing:

  - `jid`: Jabber ID followed by `/bot`
  - `password`: The account's password
  - Optional `caps_ver`: Name and version of the bot. Defaults to `Wobot:x.x`.
  - Optional `debug`: When set to `true`, XMPP traffic will be printed.
  - Optional `host`: The hostname of the server. Defaults to `jid` host.

```javascript
var wobot = require('wobot');

var bot = new wobot.Bot({
  jid: '####_####@chat.hipchat.com/bot', //replace ##_## with your hipchat info
  password: 'Abc123' //put in your password
});
  
//load any plugins here before the bot connects
  
bot.connect();
```

# Events

The following events can be binded to:

## onConnect(callback)
Emitted whenever the bot connects to the server.

## onMessage(condition, callback)
Emitted whenever a message is sent to a channel the bot is in.

 - `condition` is either a RegExp or a string which must match the message for the callback to be triggered.
 - `callback` in the form of `function(channel, from, message[, matches])`.

`condition` can also be omitted i.e. `onMessage(callback)`.

## onPrivateMessage(condition, callback)
Emitted whenever a message is sent privately to the bot.

 - `condition` is either a RegExp or a string which must match the message for the callback to be triggered.
 - `callback` in the form of `function(from, message[, matches])`.

`condition` can also be omitted i.e. `onPrivateMessage(callback)`.

## onInvite(callback)
Emitted whenever invited to a room.

 - `callback` in the form of `function(roomJid, fromJid, reason)`.

## onPing(callback)
Emitted everytime the bot pings the server (roughly every 30 seconds.)

## onError(callback)
Emitted whenever an error occurs. `disconnect` will be emitted afterwards.

 - `callback` in the form of `function(condition, text, stanza)`
   - `condition` is a string containing the XMPP stream error condition.
   - `text` is a string containing a human-readable error message.
   - `stanza` is an instance of `xmpp.Element`, when available.

## onDisconnect(callback)
Emitted whenever the bot disconnects from the server.

# Public API

Instances of `wobot.Bot` have the following methods:

## join(roomJid, historyStanzas)
Join a channel.

 - `roomJid` is in the following format: `????_????@conf.hipchat.com`.
 - `historyStanzas`: Max number of history entries to request (default=0).

## part(roomJid)
Part a channel.

## message(targetJid, message)
Send a message to either a channel or a user.

 - `targetJid` is in the following format:
   - `????_????@chat.hipchat.com` for a private message.
   - `????_????@conf.hipchat.com` for a channel message.

## getRoster(callback)

Fetches the roster (buddy list).

 - `callback` in the form of `function(err, roster, stanza)`
   - `err` is a string representation of the error, if any.
   - `roster` is an array of objects containing user data.
   - `stanza` is the full response stanza, an `xmpp.Element`.

Example return value for `roster`:

```js
[
  { name: 'Christian Joudrey', jid: '1111_12345@chat.hipchat.com', mention_name: 'ChristianJoudrey' },
  { name: 'The Bot', jid: '1111_12346@chat.hipchat.com', mention_name: 'TheBot' }
]
```

## getRooms(callback)

Fetches the rooms available to the bot user. This is equivalent to what
would show up in the HipChat lobby.

 - `callback`: Function to be triggered: `function (err, items, stanza)`
   - `err`: Error condition (string) if any
   - `rooms`: Array of objects containing room data
   - `stanza`: Full response stanza, an `xmpp.Element`

## connect()
Connect to the server.

## disconnect()
Disconnect from the server.

## loadPlugin(identifier, plugin, options)
Load a plugin.

 - `identifier`: A unique string that identifies the plugin. This will be used to unload it.
 - `plugin`: Object with a `load` function as so: `function load (bot)`.
 - `options`: Will be passed as the second argument to `load`.

## sendIq(stanza, callback)

Sends an IQ stanza and stores a callback to be called when its response is received.

 - `stanza` is the `xmpp.Element` to send.
 - `callback` in the form of `function (err, stanza)`.
   - `err` is a string representation of the error, if any.
   - `stanza` is the full response stanza, an `xmpp.Element`.
   
# Running the bot as a Windows Service
The bot can be run as a Windows service.

- Open an administrator command prompt on the server where the Wobot will run and change to the directory where the `installService.js` file resides.
- Type `node installService.js`

# Changing or Removing the Windows Service

If you have to change the path to the file that runs Wobot, you need to perform the following steps:

- Stop the service
- Run the removeService.js file
- Change the path/file name in both removeService.js and installService.js to match what you have changed it to
- Run the installService.js file

Changing the file name or location should be an absolute Last Resort! 

# Legal stuff

Copyright (c) 2011 Christian Joudrey. See LICENSE for details.

Updates and Wobot as a Windows Service Copyright (c) 2018 Michael Bielski. Same license applies.

Node.js is an official trademark of Joyent. This module is not formally related to or endorsed by the official Joyent Node.js open source or commercial project.
