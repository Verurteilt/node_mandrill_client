var MandrillClient = require('./mandrill_client');
var Mandrill = new MandrillClient("YOUR_API_KEY");
function test(data){
	console.log(data);
}
Mandrill.users.info("json", test);
Mandrill.users.info("xml", test);
Mandrill.users.info("php", test);
Mandrill.users.info(["xml", "php"], test);
Mandrill.users.ping("json", test);
Mandrill.users.ping("xml", test);
Mandrill.users.ping("php", test);
Mandrill.users.ping(["xml", "php"], test);
Mandrill.users.ping2("json", test);
Mandrill.users.ping2("xml", test);
Mandrill.users.ping2("php", test);
Mandrill.users.ping2(["xml", "php"], test);
Mandrill.users.senders("json", test);
Mandrill.users.senders("xml", test);
Mandrill.users.senders("php", test);
Mandrill.users.senders(["xml", "php"], test);
Mandrill.users.info({},test);
Mandrill.tags.list(test);
var add_template = {
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
Mandrill.templates.add("json", add_template, test);
Mandrill.templates.delete("php", {"name": "Example Template"}, test);
Mandrill.webhooks.list(test);
Mandrill.exports.list(test);
Mandrill.ips.list(test);
Mandrill.subaccounts.list(test);
Mandrill.senders.list(test);
Mandrill.rejects.list(test);
Mandrill.whitelists.list(test);
Mandrill.urls.list(test);
Mandrill.templates.list(test);
Mandrill.webhooks.list(test);
Mandrill.subaccounts.list(test);
Mandrill.inbound.domains(test);
Mandrill.exports.list(test);
Mandrill.ips.list(test);