var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
	name:'Wobot',
	script: 'c:\\path_to\\wobot.js'
});

//confirming that the service exitst
console.log('The service exists: ',svc.exists);

// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall',function(){
	console.log('Uninstall complete.');
	console.log('The service exists: ',svc.exists);
});

svc.user.account = 'yourAccount';
svc.user.password = 'yourPassword';

// Uninstall the service.
svc.uninstall();