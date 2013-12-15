#mandrill_client


mandrill_client is a node.js that allow you to use the Mandrill app Api

#Install

via [npm](https://npmjs.org)
	
	npm install mandrill_client


#How to use

	var mandrill = require('mandrill_client');
	var MandrillClient = new mandrill("YOUR_API_KEY");

after this you can use:

	MandrillClient. some of the Api methods . some of the submethods of the Api method;

Available Api Methods:
	
	users - Users Calls
	message - Message Calls	
	tags - Tags Calls
	rejects  - Rejects Calls
	whitelists - Whitelists calls
	senders - Senders Calls
	urls - URLS Calls
	templates - Templates Calls
	webhooks - Webhooks Calls
	subaccounts - Subaccounts Calls
	inbound - Inbound Calls
	exports - Exports Calls
	ips - Ips Calls

Available Submethods:

	users : info, ping, senders, ping2
	message: send, send_template,search,search_time_series,info,content,parse,send_raw,list_scheduled,cancel_scheduled,reschedule
	tags: list, delete,info, time_series, all_time_series
	rejects: add, list, delete
	whitelists: add, list, delete
	senders: list,domains,add_domain,check_domain,verify_domain,info,time_series
	urls: list,search,time_series,tracking_domains,add_tracking_domain,check_tracking_domain
	templates: add,info,update,publish,delete,list,time_series,render
	webhooks: list,add,info,update,delete
	subaccounts: list,add,info,update,delete,pause,resume
	inbound: domains,add_domain,check_domain,delete_domain,routes,add_route,update_route,delete_route,send_raw
	exports: info,list,rejects,whitelist,activity
	ips: list,info,provision,start_warmup

as you can see the Methods are the same than Mandrill App api but without "Calls" and in lower case, and submethods are the same than their api method but instead of "-" is "_".

#Example of use

	var mandrill = require('mandrill_client');
	var MandrillClient = new mandrill("1234567890");
	function callback(mandrill_response){
		console.log(mandrill_response);
	};
	var opts = {
	    "name": "Example Template",
	    "from_email": "from_email@example.com",
	    "from_name": "Example Name",
	    "subject": "example subject",
	    "code": "<div>example code</div>",
	    "text": "Example text content",
	    "publish": false,
	    "labels": [
	        "example-label"
	    ]
	};

	MandrillClient.users.info(data); // returns the info user
	MandrillClient.users.info("xml", data);  // returns the info user
	MandrillClient.users.info("php", data); // returns the info user
	MandrillClient.users.ping2(["json","xml","php"], data); // returns {"PING!": "PONG!"}, also returns the xml and php {"PING!": "PONG!"} version
	MandrillClient.templates.add("php", opts, test); // returns success message
	MandrillClient.templates.delete("php", {"name": "Example Template"}, test); // returns success message

    //ERROR EXAMPLE
	
	var MandrillClient_2 = new mandrill("FAKE_API");
	MandrillClient_2.users.info(data); // returns {"status":"error","code":-1,"name":"Invalid_Key","message":"Invalid API key"}


as you can see the syntax is:

> ## Syntax

> **MandrillClient.method.submethod(*[string or array : type_response]*, *[Object : options]*, *function: callback*)**

> **Type Response**: The response type of your request it can be "xml", "php" or "json" even better it can be the three ["xml", "json", "php"] the default one is "json", for submethods like **add, update, delete** you only can use one, for now we have no support for **yaml**, because any .yaml URL returns a statusCode == 200 but no response body, we are working on it, if you know why, tell us please. Optional.

> **Options**: Options to send in the body, see the example above. Optional.

> **Callback**: In every request you have to pass a callback, this one must receives an argument, this one is going to be the mandrill_response it can be either error message or success message, see the example above.




#Author

Victor M. Castillo - @VerurteiltKind

#Do you want to be an contributor?

Feel free to contribute 

Thank you :D

#Do you want to see something new in mandrill_client? 

Send an email to mini.guero@hotmail.com and tell me or contribute with it :D

#Suggestions etc.

mini.guero@hotmail.com
@eljeic - Twitter