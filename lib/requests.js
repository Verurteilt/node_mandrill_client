var request = require('./globals').request,
	_ = require('underscore');



function mandrill_request(url, api_key, opts, callback){
    request.post(url).send(_.extend({"key": api_key}, opts)).end(function(error, res){
       callback(res.text);
    });
 }

function mandrill(url, api_key, formats, opts, callback){
	if(typeof formats == "function"){ callback = formats; formats = "json"; opts={};}
	if(typeof opts == "function"){callback=opts; opts = {};}
	if(typeof formats.constructor == Object){ callback=opts;opts=formats;formats = "json";}
	if(Array.isArray(formats)){
		var to_callback = [];
		var fake_callback = function(data){
			to_callback.push(data);
			if(to_callback.length == formats.length)callback(to_callback);
		};
		for(var format in formats){
			_url = url + formats[format];
			mandrill_request(_url, api_key, opts, fake_callback);
		}
	}else{
		_url = url+formats;
		mandrill_request(_url, api_key, opts, callback);
	}
}
module.exports = mandrill;