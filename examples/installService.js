let Service = require('node-windows').Service;

let svc = new Service({
	name:'Wobot',
	description:'HipChat chatbot for the dev rooms',
	script:'c:\\path_to\\wobot.js',
	abortOnError:true
});

svc.on('install', function(){
	svc.start();
});

svc.user.account = 'yourAccount';
svc.user.password = 'yourPassword';

svc.install();