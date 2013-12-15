var _mandrill = require('./lib/requests');
var	api = require('./lib/globals').api;


var mandrill = function (api_key){
	if(!api_key) throw Error("The Api Key?") ;

	this.users = {
		"info": function(formats, opts, callback){
			_mandrill(api+"/users/info.",api_key, formats,opts, callback);
		},
		"ping": function(formats, opts, callback){
			_mandrill(api+"/users/ping.",api_key, formats,opts, callback);
		},
		"ping2": function(formats, opts, callback){
			_mandrill(api+"/users/ping2.",api_key, formats, opts,callback);
		},
		"senders": function(formats, opts, callback){
			_mandrill(api+"/users/senders.",api_key, formats, opts,callback);
		}
	};
	this.messages = {
		"send": function(formats, opts, callback){
					_mandrill(api+"/messages/send.",api_key, formats,opts, callback);
		},
		"send_template": function(formats, opts, callback){
					_mandrill(api+"/messages/send-template.",api_key, formats,opts, callback);
		},
		"search": function(formats, opts, callback){
					_mandrill(api+"/messages/search.",api_key, formats,opts, callback);
		},
		"search_time_series": function(formats, opts, callback){
					_mandrill(api+"/messages/search-time-series.",api_key, formats,opts, callback);
		},
		"info": function(formats, opts, callback){
					_mandrill(api+"/messages/info.",api_key, formats,opts, callback);
		},
		"content": function(formats, opts, callback){
					_mandrill(api+"/messages/content.",api_key, formats,opts, callback);
		},
		"parse": function(formats, opts, callback){
					_mandrill(api+"/messages/parse.",api_key, formats,opts, callback);
		},
		"send_raw": function(formats, opts, callback){
					_mandrill(api+"/messages/send-raw.",api_key, formats,opts, callback);
		},
		"list_scheduled": function(formats, opts, callback){
					_mandrill(api+"/messages/list-scheduled.",api_key, formats,opts, callback);
		},
		"cancel_scheduled": function(formats, opts, callback){
					_mandrill(api+"/messages/cancel-scheduled.",api_key, formats,opts, callback);
		},
		"reschedule": function(formats, opts, callback){
					_mandrill(api+"/messages/reschedule.",api_key, formats,opts, callback);
		}

	};

	this.tags = {
		"list": function(formats, opts, callback){
			_mandrill(api+"/tags/list.",api_key, formats,opts, callback);
		},
		"delete": function(formats, opts, callback){
			_mandrill(api+"/tags/delete.",api_key, formats,opts, callback);
		},
		"info": function(formats, opts, callback){
			_mandrill(api+"/tags/info.",api_key, formats,opts, callback);
		},
		"time_series": function(formats, opts, callback){
			_mandrill(api+"/tags/time-series.",api_key, formats,opts, callback);
		},
		"all_time_series": function(formats, opts, callback){
			_mandrill(api+"/tags/all-time-series.",api_key, formats,opts, callback);
		}
	};

	this.rejects = {
		"add": function(formats, opts, callback){
			_mandrill(api+"/rejects/add.",api_key, formats,opts, callback);
		},
		"list": function(formats, opts, callback){
			_mandrill(api+"/rejects/list.",api_key, formats,opts, callback);
		},
		"delete": function(formats, opts, callback){
			_mandrill(api+"/rejects/delete.",api_key, formats,opts, callback);
		}

	};

	this.whitelists = {
		"add": function(formats, opts, callback){
			_mandrill(api+"/whitelists/add.",api_key, formats,opts, callback);
		},
		"list": function(formats, opts, callback){
			_mandrill(api+"/whitelists/list.",api_key, formats,opts, callback);
		},
		"delete": function(formats, opts, callback){
			_mandrill(api+"/whitelists/delete.",api_key, formats,opts, callback);
		}

	};

	this.senders = {
		"list": function(formats, opts, callback){
				_mandrill(api+"/senders/list.",api_key, formats,opts, callback);
		},
		"domains": function(formats, opts, callback){
				_mandrill(api+"/senders/domains.",api_key, formats,opts, callback);
		},
		"add_domain": function(formats, opts, callback){
				_mandrill(api+"/senders/add-domain.",api_key, formats,opts, callback);
		},
		"check_domain": function(formats, opts, callback){
				_mandrill(api+"/senders/check-domain.",api_key, formats,opts, callback);
		},
		"verify_domain": function(formats, opts, callback){
				_mandrill(api+"/senders/verify-domain.",api_key, formats,opts, callback);
		},
		"info": function(formats, opts, callback){
				_mandrill(api+"/senders/info.",api_key, formats,opts, callback);
		},
		"time_series": function(formats, opts, callback){
				_mandrill(api+"/senders/time-series.",api_key, formats,opts, callback);
		}
	};
	this.urls = {
		"list": function(formats, opts, callback){
				_mandrill(api+"/urls/list.",api_key, formats,opts, callback);
		},
		"search": function(formats, opts, callback){
				_mandrill(api+"/urls/search.",api_key, formats,opts, callback);
		},
		"time_series": function(formats, opts, callback){
				_mandrill(api+"/urls/time_series.",api_key, formats,opts, callback);
		},
		"tracking_domains": function(formats, opts, callback){
				_mandrill(api+"/urls/tracking-domains.",api_key, formats,opts, callback);
		},
		"add_tracking_domain": function(formats, opts, callback){
				_mandrill(api+"/urls/add-tracking-domain.",api_key, formats,opts, callback);
		},
		"check_tracking_domain": function(formats, opts, callback){
				_mandrill(api+"/urls/check-tracking-domain.",api_key, formats,opts, callback);
		}
	};
	this.templates = {
		"add": function(formats, opts,callback){
				_mandrill(api+"/templates/add.",api_key, formats,opts, callback);
		},
		"info": function(formats, opts,callback){
				_mandrill(api+"/templates/info.",api_key, formats,opts, callback);
		},
		"update": function(formats, opts,callback){
				_mandrill(api+"/templates/update.",api_key, formats,opts, callback);
		},
		"publish": function(formats, opts,callback){
				_mandrill(api+"/templates/publish.",api_key, formats,opts, callback);
		},
		"delete": function(formats, opts,callback){
				_mandrill(api+"/templates/delete.",api_key, formats,opts, callback);
		},
		"list": function(formats, opts,callback){
				_mandrill(api+"/templates/list.",api_key, formats,opts, callback);
		},
		"time_series": function(formats, opts,callback){
				_mandrill(api+"/templates/time-series.",api_key, formats,opts, callback);
		},
		"render": function(formats, opts,callback){
				_mandrill(api+"/templates/render.",api_key, formats,opts, callback);
		}
	};

	this.webhooks = {
		"list": function(formats, opts, callback){
			_mandrill(api+"/webhooks/list.",api_key, formats,opts, callback);
		},
		"add": function(formats, opts, callback){
			_mandrill(api+"/webhooks/add.",api_key, formats,opts, callback);
		},
		"info": function(formats, opts, callback){
			_mandrill(api+"/webhooks/info.",api_key, formats,opts, callback);
		},
		"update": function(formats, opts, callback){
			_mandrill(api+"/webhooks/update.",api_key, formats,opts, callback);
		},
		"delete": function(formats, opts, callback){
			_mandrill(api+"/webhooks/delete.",api_key, formats,opts, callback);
		}
	};
	this.subaccounts = {
		"list": function(formats, opts, callback){
			_mandrill(api+"/subaccounts/list.",api_key, formats,opts, callback);
		},
		"add": function(formats, opts, callback){
			_mandrill(api+"/subaccounts/add.",api_key, formats,opts, callback);
		},
		"info": function(formats, opts, callback){
			_mandrill(api+"/subaccounts/info.",api_key, formats,opts, callback);
		},
		"update": function(formats, opts, callback){
			_mandrill(api+"/subaccounts/update.",api_key, formats,opts, callback);
		},
		"delete": function(formats, opts, callback){
			_mandrill(api+"/subaccounts/delete.",api_key, formats,opts, callback);
		},
		"pause": function(formats, opts, callback){
			_mandrill(api+"/subaccounts/pause.",api_key, formats,opts, callback);
		},
		"resume": function(formats, opts, callback){
			_mandrill(api+"/subaccounts/resume.",api_key, formats,opts, callback);
		}
	};

	this.inbound = {
		"domains": function(formats, opts, callback){
			_mandrill(api+"/inbound/domains.",api_key, formats,opts, callback);
		},
		"add_domain": function(formats, opts, callback){
			_mandrill(api+"/inbound/add-domain.",api_key, formats,opts, callback);
		},
		"check_domain": function(formats, opts, callback){
			_mandrill(api+"/inbound/check-domain.",api_key, formats,opts, callback);
		},
		"delete_domain": function(formats, opts, callback){
			_mandrill(api+"/inbound/delete-domain.",api_key, formats,opts, callback);
		},
		"routes": function(formats, opts, callback){
			_mandrill(api+"/inbound/routes.",api_key, formats,opts, callback);
		},
		"add_route": function(formats, opts, callback){
			_mandrill(api+"/inbound/add-route.",api_key, formats,opts, callback);
		},
		"update_route": function(formats, opts, callback){
			_mandrill(api+"/inbound/update-route.",api_key, formats,opts, callback);
		},
		"delete_route": function(formats, opts, callback){
			_mandrill(api+"/inbound/delete-route.",api_key, formats,opts, callback);
		},
		"send_raw": function(formats, opts, callback){
			_mandrill(api+"/inbound/send-raw.",api_key, formats,opts, callback);
		}
	};
	this.exports = {
		"info": function(formats, opts, callback){
			_mandrill(api+"/exports/info.",api_key, formats,opts, callback);
		},
		"list": function(formats, opts, callback){
			_mandrill(api+"/exports/list.",api_key, formats,opts, callback);
		},
		"rejects": function(formats, opts, callback){
			_mandrill(api+"/exports/rejects.",api_key, formats,opts, callback);
		},
		"whitelist": function(formats, opts, callback){
			_mandrill(api+"/exports/whitelist.",api_key, formats,opts, callback);
		},
		"activity": function(formats, opts, callback){
			_mandrill(api+"/exports/activity.",api_key, formats,opts, callback);
		}
	};

	this.ips = {
		"list": function(formats, opts, callback){
			_mandrill(api+"/ips/list.",api_key, formats,opts, callback);
		},
		"info": function(formats, opts, callback){
			_mandrill(api+"/ips/info.",api_key, formats,opts, callback);
		},
		"provision": function(formats, opts, callback){
			_mandrill(api+"/ips/provision.",api_key, formats,opts, callback);
		},
		"start_warmup": function(formats, opts, callback){
			_mandrill(api+"/ips/start-warmup.",api_key, formats,opts, callback);
		},
	};
};

module.exports = mandrill;