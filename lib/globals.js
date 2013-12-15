var request = require('superagent');
var MANDRILL_API = "https://mandrillapp.com/api/1.0";
var globals = {};
globals.request = request;
globals.api = MANDRILL_API;
module.exports = globals;